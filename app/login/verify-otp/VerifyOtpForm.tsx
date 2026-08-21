'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Field from '../Field';
import SendCode from '../SendCode';
import SubmitButton from '../SubmitButton';
import { verifyLoginOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import { autoCompleteCode } from '../autoCompleteCode';

interface Props {
  phoneNumber: string;
}

export default function VerifyOtpForm({ phoneNumber }: Props) {
  const [verifyCode, setVerifyCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // استفاده از ref برای جلوگیری از Stale Closure در Event Listenerها
  const phoneNumberRef = useRef(phoneNumber);
  useEffect(() => {
    phoneNumberRef.current = phoneNumber;
  }, [phoneNumber]);

  const handleLoginVerifyOtp = useCallback(
    async (code?: string) => {
      const finalCode = code ?? verifyCode;

      if (!finalCode || !/^\d{4,6}$/.test(finalCode)) {
        return;
      }

      try {
        setIsLoading(true);

        const res = await verifyLoginOtp(phoneNumberRef.current, finalCode);

        showSnackbar(res.data.message, 'success');

        if (typeof window !== 'undefined' && window.AndroidBridge) {
          window.AndroidBridge.notifyUserLogin(
            String(res.data.data.user.id)
          );
        }

        router.push('/dashboard');
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          if (
            error.response?.status === 404 &&
            error.response?.data?.message?.need_register
          ) {
            router.push(
              `/login/register/?phone=${phoneNumberRef.current}`
            );

            showSnackbar(
              error.response?.data?.message?.message,
              'warning'
            );
          } else {
            showSnackbar(
              error.response?.data?.message?.message ||
                error.response?.data?.message ||
                'خطایی رخ داده است'
            );
          }
        } else {
          showSnackbar('خطایی رخ داده است');
        }
      } finally {
        setIsLoading(false);
      }
    },
    [verifyCode, router]
  );

  // دریافت خودکار OTP از WebOTP API (مرورگر استاندارد)
  useEffect(() => {
    const cleanup = autoCompleteCode(setVerifyCode, (code) => {
      handleLoginVerifyOtp(code);
    });

    return cleanup;
  }, [handleLoginVerifyOtp]);

  // دریافت OTP از Android WebView
  useEffect(() => {
    const handleAndroidOtp = (event: MessageEvent) => {
      let rawData = event.data;

      // استخراج داده در صورت ارسال به شکل JSON
      if (typeof rawData === 'string' && rawData.startsWith('{')) {
        try {
          const parsed = JSON.parse(rawData);
          rawData = parsed.code || parsed.otp || rawData;
        } catch {
          // ignore error
        }
      }

      const otpCode = String(rawData || '').trim();

      // بررسی معتبر بودن OTP
      if (!/^\d{4,6}$/.test(otpCode)) {
        return;
      }

      setVerifyCode(otpCode);
      handleLoginVerifyOtp(otpCode);
    };

    // Callback گلوبال جهت فراخوانی مستقیم از سمت Kotlin با evaluateJavascript
    window.onReceiveAndroidOtp = (code: string) => {
      const cleanCode = String(code).trim();
      if (/^\d{4,6}$/.test(cleanCode)) {
        setVerifyCode(cleanCode);
        handleLoginVerifyOtp(cleanCode);
      }
    };

    window.addEventListener('message', handleAndroidOtp);

    return () => {
      window.removeEventListener('message', handleAndroidOtp);
      delete window.onReceiveAndroidOtp;
    };
  }, [handleLoginVerifyOtp]);

  return (
    <>
      <Field
        type="number"
        value={verifyCode}
        setValue={setVerifyCode}
        label="کد تایید"
      />

      <SendCode phoneNumber={phoneNumber} />

      <SubmitButton
        title="تایید"
        isLoading={isLoading}
        handleSubmit={() => handleLoginVerifyOtp()}
      />
    </>
  );
}