import { Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const aboutLink = [
  { title: "درباره‌ ما", link: "/about-us" },
  { title: "سوالات متداول", link: "/faq" },
  { title: "اپلیکیشن نقرینه", link: "/application" },
  { title: "قوانین و مقررات", link: "/rules" },
  { title: 'آموزش پلتفرم', link: '/' },
];
export const contentLink = [
  { title: "محاسبه قیمت نقره", link: "/calculator" },
  { title: "قیمت نقره امروز", link: "/silver-price" },
];

export default function DesktopLinks() {
  return (
    <Grid
      size={{
        xs: 12,
        md: 4,
      }}
      display={"flex"}
      justifyContent={{
        xs: "center",
        xl: "flex-start",
      }}
    >
      <Stack direction={"row"} gap={8}>
        <Stack gap={2}>
          <Typography
            variant="body1"
            fontSize={14}
            fontWeight={"bold"}
            sx={{ color: "text.secondary" }}
          >
            درباره نقرینه
          </Typography>
          <Stack direction={"column"} gap={1.5}>
            {aboutLink.map((item) => (
              <Link href={item.link} key={item.title}>
                <Typography
                  variant="body1"
                  fontSize={14}
                  fontWeight={"bold"}
                  key={item.link}
                  sx={{ color: "text.secondary" }}
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack gap={2}>
          <Typography
            variant="body1"
            fontSize={14}
            fontWeight={"bold"}
            sx={{ color: "text.secondary" }}
          >
            دسترسی سریع
          </Typography>
          <Stack direction={"column"} gap={1.5}>
            {contentLink.map((item) => (
              <Link href={item.link} key={item.title}>
                <Typography
                  variant="body1"
                  fontSize={14}
                  fontWeight={"bold"}
                  key={item.link}
                  sx={{ color: "text.secondary" }}
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
