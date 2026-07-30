"use client";
import { MenuType } from "@/app/core/Types";
import {
  Box,
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
  { id: 3, title: "مجوز های نقرینه", link: "/license" },
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
    
      <Stack
  component={Link}
  href="/dashboard"
  prefetch={false}
  sx={(theme) => ({
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    perspective: '900px',

    // حلقه آبی چرخان
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: -4,
      borderRadius: '50%',
      background: `conic-gradient(
        from 0deg,
        transparent,
        ${theme.palette.primary.main},
        transparent 25%,
        transparent 60%,
        ${theme.palette.primary.dark},
        transparent 85%
      )`,
      opacity: 0,
      filter: 'blur(1px)',
      animation: 'ringSpin 6s linear infinite, ringFade 6s ease-in-out infinite',
    },

    // هاله پشت لوگو
    '&::after': {
      content: '""',
      position: 'absolute',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: `radial-gradient(
        circle,
        ${theme.palette.primary.main}66,
        ${theme.palette.primary.light}33 55%,
        transparent 75%
      )`,
      filter: 'blur(6px)',
      opacity: 0,
      animation: 'logoGlow 6s ease-in-out infinite',
    },

    '& .logo-wrap': {
      position: 'relative',
      width: 50,
      height: 50,
      borderRadius: '50%',
      overflow: 'hidden',
      zIndex: 2,
      transformStyle: 'preserve-3d',
      animation:
        'logoFlip 6s ease-in-out infinite, logoFloat 3s ease-in-out infinite',
    },

    '& .logo-wrap img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: `
        drop-shadow(0 0 4px ${theme.palette.primary.main}55)
        drop-shadow(0 0 10px ${theme.palette.primary.main}33)
      `,
    },

    // نور عبوری
    '& .shine': {
      position: 'absolute',
      inset: 0,
      zIndex: 3,
      background: `linear-gradient(
        120deg,
        transparent 35%,
        rgba(255,255,255,.95),
        ${theme.palette.primary.light},
        transparent 65%
      )`,
      transform: 'translateX(-170%) rotate(18deg)',
      animation: 'shine 6s ease-in-out infinite',
      pointerEvents: 'none',
    },

    // ذرات
    '& .sparkle': {
      position: 'absolute',
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: theme.palette.primary.light,
      boxShadow: `
        0 0 8px ${theme.palette.primary.main},
        0 0 18px ${theme.palette.primary.main}88
      `,
      opacity: 0,
    },

    '& .sparkle:nth-of-type(1)': {
      top: 2,
      left: 8,
      animation: 'sparkle1 6s ease-in-out infinite',
    },

    '& .sparkle:nth-of-type(2)': {
      top: 10,
      right: 0,
      animation: 'sparkle2 6s ease-in-out infinite',
    },

    '& .sparkle:nth-of-type(3)': {
      bottom: 4,
      left: 4,
      animation: 'sparkle3 6s ease-in-out infinite',
    },

    '@keyframes ringSpin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },

    '@keyframes ringFade': {
      '0%,70%,100%': {
        opacity: 0,
      },
      '80%,90%': {
        opacity: 1,
      },
    },

    '@keyframes logoGlow': {
      '0%,70%,100%': {
        opacity: 0,
        transform: 'scale(.85)',
      },
      '80%,90%': {
        opacity: 1,
        transform: 'scale(1.25)',
      },
    },

    '@keyframes logoFlip': {
      '0%,70%': {
        transform: 'rotateY(0deg)',
      },
      '80%': {
        transform: 'rotateY(180deg)',
      },
      '90%,100%': {
        transform: 'rotateY(360deg)',
      },
    },

    '@keyframes logoFloat': {
      '0%,100%': {
        transform: 'translateY(0) scale(1)',
      },
      '50%': {
        transform: 'translateY(-2px) scale(1.04)',
      },
    },

    '@keyframes shine': {
      '0%,70%': {
        transform: 'translateX(-170%) rotate(18deg)',
      },
      '85%': {
        transform: 'translateX(170%) rotate(18deg)',
      },
      '100%': {
        transform: 'translateX(170%) rotate(18deg)',
      },
    },

    '@keyframes sparkle1': {
      '0%,75%,100%': {
        opacity: 0,
        transform: 'scale(.5)',
      },
      '82%': {
        opacity: 1,
        transform: 'scale(1.4)',
      },
      '88%': {
        opacity: 0,
        transform: 'scale(.5)',
      },
    },

    '@keyframes sparkle2': {
      '0%,78%,100%': {
        opacity: 0,
        transform: 'scale(.5)',
      },
      '85%': {
        opacity: 1,
        transform: 'scale(1.3)',
      },
      '91%': {
        opacity: 0,
        transform: 'scale(.5)',
      },
    },

    '@keyframes sparkle3': {
      '0%,80%,100%': {
        opacity: 0,
        transform: 'scale(.5)',
      },
      '87%': {
        opacity: 1,
        transform: 'scale(1.4)',
      },
      '93%': {
        opacity: 0,
        transform: 'scale(.5)',
      },
    },
  })}
>
  <Box className="logo-wrap">
    <Image
      src="/images/logo.png"
      width={50}
      height={50}
      alt="Darineh"
    />
    <Box component="span" className="shine" />
  </Box>

  <Box component="span" className="sparkle" />
  <Box component="span" className="sparkle" />
  <Box component="span" className="sparkle" />
</Stack>
          </Stack>
          {isUpLg && (
            <Stack direction={"row"} gap={2.5} alignItems={"center"}>
              {menu.map((item) =>
                item.link ? (
                  <Link href={item.link} key={item.id} prefetch={false}>
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
