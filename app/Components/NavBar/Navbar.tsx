"use client";
import { MenuType } from "@/app/core/Types";
import {
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ButtonGroupe from "./ButtonGroupe";
import SubMenu from "./SubMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ModalNavigation from "../AppBar/ModalNavigation";
import DrawerLink from "./DrawerLink";
import { usePathname } from "next/navigation";

const menu: MenuType[] = [
  {
    id: 1,
    title: "خرید قسطی نقره",
    link: "/dashboard/credit-menu",
  },
  {
    id: 2,
    title: "قیمت نقره",
    subMenu: [
      {
        title: "قیمت نقره امروز",
        link: "/silver",
      },
      {
        title: "انس جهانی نقره",
        link: "/ons",
      },
      {
        title: "محاسبه قیمت نقره",
        link: "/calculator",
      },
    ],
  },
  { id: 3, title: "مجوز های دارینه", link: "/license" },
];
export default function Navbar() {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.split("/")[1] === "dashboard";
  const isLoginPage = pathname?.startsWith("/login");
  if (isLoginPage) return null;
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        position="fixed"
        zIndex={"1000"}
        justifyContent="space-between"
        sx={{
          py: {
            xs: 1,
            md: 2,
          },
          px: {
            xs: isDashboard ? 2.5 : 0,
            md: 3,
            lg: 5,
          },
          bgcolor: "background.default",
          width: "100%",
          boxShadow: "none",
        }}
      >
        <Stack direction={"row"} gap={3} alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: {
                  md: "none",
                },
              }}
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              />
            </IconButton>
            <Stack component={Link} href={"/dashboard"}>
              <Image src={"/images/logo.png"} width={56} height={56} alt="" />
            </Stack>
          </Stack>
          {isUpLg && (
            <Stack direction={"row"} gap={2.5} alignItems={"center"}>
              {menu.map((item) =>
                item.link ? (
                  <Link href={item.link} key={item.id}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ) : (
                  <SubMenu key={item.id} item={item} />
                ),
              )}
            </Stack>
          )}
        </Stack>
        <ButtonGroupe />
      </Stack>
      {pathname.split("/")[1] === "dashboard" ? (
        <ModalNavigation open={open} setOpen={setOpen} />
      ) : (
        <DrawerLink open={open} setOpen={setOpen} />
      )}
    </>
  );
}
