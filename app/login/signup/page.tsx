"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ActionButton from "../SubmitButton";
import Field from "../Field";

export default function page() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Stack>
      <Typography
        variant="h6"
        fontWeight={"700"}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: "text.title" }}
      >
        ثبت نام
      </Typography>
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 16,
        }}
        sx={{ mt: 3 }}
      >
        شماره موبایل خود را وارد کنید
      </Typography>

      <Field
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="شماره موبایل"
      />
      <Typography
        variant="body2"
        sx={{
          mt: {
            xs: 4.5,
            md: 9,
          },
          color: "#535657",
        }}
        fontSize={{
          xs: 10,
          md: 12,
        }}
        fontWeight={500}
      >
        ورود شما به منزله قبول‌{" "}
        <Link
          href={"/roules"}
          style={{
            color: "#F5B536",
            textDecoration:'underline'
          }}
        >
          قوانین و مقررات‌
        </Link>{" "}
        نقره می‌باشد.
      </Typography>
      <ActionButton title={"ادامه"} />
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        sx={{ width: "100%" }}
        mt={3}
      >
        <Divider sx={{ flexGrow: 1 }} />
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            md: 12,
          }}
          sx={{ whiteSpace: "nowrap", direction: "row" }}
        >
          حساب کاربری دارید؟
          <Box
            component={"span"}
            sx={{
              color: "#F5B536",
              fontSize: {
                xs: 12,
                md: 14,
              },
              ml: 1,
            }}
          >
            <Link href={"/login/login-password"}>ورود</Link>
          </Box>
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Stack>
    </Stack>
  );
}
