import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LoginTab from "../LoginTab";
import ForgetPasswordForm from "../forget/ForgetPasswordForm";
import LoginOtpForm from "./LoginOtpForm";

export default function page() {
  return (
    <Stack>
      <LoginTab />
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 16,
        }}
        sx={{ mt: 2 }}
      >
        شماره موبایل خود را وارد کنید
      </Typography>

      <LoginOtpForm>
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
              textDecoration: "underline",
            }}
          >
            قوانین و مقررات‌
          </Link>{" "}
          نقره می‌باشد.
        </Typography>
      </LoginOtpForm>
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
          حساب کاربری ندارید؟
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
            <Link href={"/login/signup"}>ثبت نام</Link>
          </Box>
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Stack>
    </Stack>
  );
}
