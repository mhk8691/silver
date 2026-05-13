import {  Stack, Typography } from "@mui/material";
import VerifyOtpCode from "./VerifyOtpCode";
import BackLink from "@/app/dashboard/BackLink";
interface Props {
  searchParams: {
    phone: string;
  };
}
export default async function page({ searchParams }: Props) {
  const { phone } = await searchParams;
  return (
    <Stack>
      <BackLink fontSize="30" />
      <Typography
        variant="h6"
        fontWeight={"500"}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: "text.title" }}
      >
        تایید شماره موبایل
      </Typography>
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 14,
          xl: 16,
        }}
        fontWeight={500}
        sx={{ mt: 3 }}
      >
        کد تایید ارسال شده به شماره موبایل {phone} را وارد کنید.
       
      </Typography>

      <VerifyOtpCode phone={phone} />
    </Stack>
  );
}
