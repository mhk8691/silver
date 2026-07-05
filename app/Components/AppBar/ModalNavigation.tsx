import { ArrowForward, Close } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Chip,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import CustomModal from "../CustomModal/CustomModal";
import { AppbarItemsType } from "@/app/core/Types";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ItemsType {
  title: string;
  navigation: AppbarItemsType[];
}

// اضافه کردن فیلد comingSoon به نوع AppbarItemsType
// باید در فایل Types اضافه بشه:
// export interface AppbarItemsType {
//   name: string;
//   image: string;
//   link: string;
//   comingSoon?: boolean; // اضافه بشه
// }

const items: ItemsType[] = [
  {
    title: "سفارش",
    navigation: [
      {
        name: "خرید و فروش",
        image: "/trade-active.svg",
        link: "/trades",
        comingSoon: false, // فعال
      },
      {
        name: "سفارش با قیمت",
        image: "/limitOrder-active.svg",
        link: "/limit-order",
        comingSoon: false, 
      },
    ],
  },
  {
    title: "کیف پول",
    navigation: [
      {
        name: "دارایی ها",
        image: "/wallet-active.svg",
        link: "/wallet",
        comingSoon: false,
      },
      {
        name: "واریز و برداشت",
        image: "/irtTransaction-active.svg",
        link: "/irt-transaction",
        comingSoon: false,
      },
      {
        name: "کارت های بانکی",
        image: "/bankCard-active.svg",
        link: "/bank-card",
        comingSoon: false, 
      },
    ],
  },
  {
    title: "امکانات",
    navigation: [
      {
        name: "خرید اقساطی",
        image: "/credit-active.svg",
        link: "/credit-menu",
        comingSoon: true,
      },
      {
        name: "تحویل فیزیکی",
        image: "/shop-active.svg",
        link: "/silver-receive",
        comingSoon: false, 
      },
      {
        name: "کارت هدیه",
        image: "/giftCard-active.svg",
        link: "/gift-card-submit",
        comingSoon: true,
      },
    ],
  },
  {
    title: "سایر",
    navigation: [
      {
        name: "گزارش ها",
        image: "/reports-active.svg",
        link: "/reports",
        comingSoon: false,
      },
      {
        name: "نقره فروش شو",
        image: "/invite-active.svg",
        link: "/invite",
        comingSoon: false, 
      },
      {
        name: "پروفایل",
        image: "/profile-active.svg",
        link: "/profile",
        comingSoon: false,
      },
    ],
  },
];

const Content = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={{
          xs: 1,
          sm: 0,
        }}
      >
        <IconButton onClick={() => setOpen(false)} disableRipple>
          <Close
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
          <ArrowForward
            sx={{
              display: {
                sm: "none",
              },
            }}
          />
        </IconButton>
        <Typography
          variant="body2"
          fontSize={{
            xs: 16,
            sm: 18,
          }}
        >
          منو
        </Typography>
        <Stack></Stack>
      </Stack>

      <Stack direction={"column"} gap={1.5}>
        {items.map((item, index) => (
          <Stack key={item.title}>
            <Stack
              direction={"column"}
              gap={{
                xs: 1.5,
                sm: 1,
              }}
            >
              <Typography
                variant="body1"
                fontSize={{
                  xs: 16,
                  sm: 18,
                }}
              >
                {item.title}
              </Typography>
              <Grid
                container
                spacing={{
                  xs: 1,
                  sm: 2,
                }}
              >
                {item.navigation.map((navigate) => (
                  <Grid
                    size={4}
                    bgcolor={"background.paper"}
                    borderRadius={2}
                    key={navigate.name}
                    py={1}
                    px={1.5}
                    component={"div"}
                    onClick={() => {
                      // فقط اگر به زودی نباشه، کلیک کار کنه
                      if (!navigate.comingSoon) {
                        router.push(`/dashboard${navigate.link}`);
                        setOpen(false);
                      }
                    }}
                    sx={{
                      cursor: navigate.comingSoon ? "default" : "pointer",
                      position: "relative",
                      opacity: navigate.comingSoon ? 0.6 : 1,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        opacity: navigate.comingSoon ? 0.6 : 0.8,
                        transform: navigate.comingSoon ? "none" : "scale(1.02)",
                      },
                    }}
                  >
                    <Stack direction={"column"} alignItems={"center"} gap={1.5}>
                      <Image
                        src={`/images/appbar${navigate.image}`}
                        alt=""
                        width={30}
                        height={30}
                      />
                      <Typography
                        variant="body1"
                        fontSize={{
                          xs: 12,
                          sm: 14,
                        }}
                        fontWeight={500}
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {navigate.name}
                      </Typography>
                      
                      {/* نشانگر به زودی */}
                      {navigate.comingSoon && (
                        <Chip
                          label="به زودی"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: -8,
                            right: -8,
                            backgroundColor: "#FF6B6B",
                            color: "white",
                            fontSize: "10px",
                            height: "20px",
                            fontWeight: "bold",
                            "& .MuiChip-label": {
                              px: 1,
                            },
                          }}
                        />
                      )}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            {index !== items.length - 1 && <Divider sx={{ mt: 1.5 }} />}
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default function ModalNavigation({ open, setOpen }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={{ enter: 300, exit: 300 }}
        PaperProps={{
          sx: {
            width: "100vw",
            p: 2,
            bgcolor:'background.default'
          },
        }}
      >
        <Content setOpen={setOpen} />
      </Drawer>
    );
  }

  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      modalStyle={{
        overflow: "auto",
        px: 5,
        py: 3,
      }}
    >
      <Content setOpen={setOpen} />
    </CustomModal>
  );
}