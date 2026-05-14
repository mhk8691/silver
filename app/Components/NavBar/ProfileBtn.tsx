"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
const options = [
  {
    title: "پروفایل",
    link: "/dashboard/profile",
    icon: (
      <SvgIcon>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1108 11.7151C11.0466 11.7059 10.9641 11.7059 10.8908 11.7151C9.27747 11.6601 7.99414 10.3401 7.99414 8.7176C7.99414 7.05844 9.33247 5.71094 11.0008 5.71094C12.66 5.71094 14.0075 7.05844 14.0075 8.7176C13.9983 10.3401 12.7241 11.6601 11.1108 11.7151Z"
            fill="#8ABAE7"
            stroke="currentColor"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17.1789 17.7652C15.5473 19.2593 13.3839 20.1668 11.0006 20.1668C8.61727 20.1668 6.45393 19.2593 4.82227 17.7652C4.91393 16.9035 5.46393 16.0602 6.44477 15.4002C8.95643 13.7318 13.0631 13.7318 15.5564 15.4002C16.5373 16.0602 17.0873 16.9035 17.1789 17.7652Z"
            fill="#8ABAE7"
            stroke="currentColor"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11.0007 20.1668C16.0633 20.1668 20.1673 16.0628 20.1673 11.0002C20.1673 5.93755 16.0633 1.8335 11.0007 1.8335C5.93804 1.8335 1.83398 5.93755 1.83398 11.0002C1.83398 16.0628 5.93804 20.1668 11.0007 20.1668Z"
            stroke="currentColor"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SvgIcon>
    ),
  },
  {
    title: "کارت های بانکی",
    link: "/dashboard/bank-card",
    icon: (
      <SvgIcon>
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13114_97258)">
            <path
              d="M21.2951 6.39941V14.2269C21.2951 17.8362 20.3773 18.7452 16.7239 18.7452H5.27823C1.6248 18.754 0.707031 17.8539 0.707031 14.2358V6.39941H21.2951Z"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.82812 14.6416H6.88428"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.46094 14.6416H13.5821"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21.2951 5.77313V6.39969H0.707031V5.77313C0.707031 2.16383 1.6248 1.25488 5.27823 1.25488H16.7151C20.3773 1.25488 21.2951 2.16383 21.2951 5.77313Z"
              fill="#8ABAE7"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_13114_97258">
              <rect
                width="22"
                height="18.9025"
                fill="white"
                transform="translate(0 0.548828)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
    ),
  },
  {
    title: "دعوت از دوستان",
    link: "/dashboard/invite",
    icon: (
      <SvgIcon>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7644 3.36461C19.7555 4.81419 18.6242 5.98092 17.2011 6.02511C17.1392 6.02511 17.0685 6.02511 17.0066 6.02511C15.5836 5.98092 14.4434 4.81419 14.4434 3.36461C14.4434 1.91503 15.6278 0.704102 17.1039 0.704102C18.58 0.704102 19.7644 1.90619 19.7644 3.36461Z"
            fill="#8ABAE7"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M16.1339 13.5406C17.5482 13.7792 19.1038 13.5317 20.1998 12.7981C21.6494 11.8258 21.6494 10.2437 20.1998 9.2714C19.095 8.53777 17.5216 8.29028 16.1074 8.53777"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.54953 3.36461C7.54953 4.81419 6.41815 5.98092 4.99509 6.02511C4.93322 6.02511 4.86251 6.02511 4.80063 6.02511C3.37757 5.98092 2.23735 4.81419 2.22852 3.36461C2.22852 1.90619 3.41293 0.704102 4.88902 0.704102C6.36512 0.704102 7.54953 1.89735 7.54953 3.36461Z"
            fill="#8ABAE7"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5.85892 13.5406C4.4447 13.7792 2.88905 13.5317 1.79303 12.7981C0.334614 11.8258 0.334614 10.2437 1.79303 9.2714C2.89789 8.53777 4.47122 8.29028 5.88544 8.53777"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.5769 11.0746C13.5592 12.5153 12.4278 13.6909 11.0048 13.7351C10.9429 13.7262 10.8722 13.7262 10.8103 13.7351C9.38724 13.682 8.25586 12.5153 8.25586 11.0746C8.25586 9.63383 9.44027 8.41406 10.9164 8.41406C12.3925 8.41406 13.5769 9.60731 13.5769 11.0746Z"
            fill="#8ABAE7"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.0068 20.5028C12.3539 21.6076 9.65803 21.6076 8.00515 20.5028C6.55557 19.5393 6.55557 17.9483 8.00515 16.976C9.65803 15.8888 12.3716 15.8888 14.0068 16.976C15.4652 17.9483 15.4652 19.5393 14.0068 20.5028Z"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SvgIcon>
    ),
  },
];

export default function ProfileBtn() {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleToggle = () => setOpen((prev) => !prev);

  const handleClose = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node;

    if (wrapperRef.current?.contains(target)) return;

    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        {!isMobile && (
          <>
            {isDownMd ? (
              <IconButton onClick={handleToggle}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1385 14.9097C14.0569 14.8981 13.9519 14.8981 13.8585 14.9097C11.8052 14.8397 10.1719 13.1597 10.1719 11.0947C10.1719 8.98307 11.8752 7.26807 13.9985 7.26807C16.1102 7.26807 17.8252 8.98307 17.8252 11.0947C17.8135 13.1597 16.1919 14.8397 14.1385 14.9097Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21.8595 22.6103C19.7828 24.512 17.0295 25.667 13.9961 25.667C10.9628 25.667 8.20948 24.512 6.13281 22.6103C6.24948 21.5136 6.94948 20.4403 8.19781 19.6003C11.3945 17.477 16.6211 17.477 19.7945 19.6003C21.0428 20.4403 21.7428 21.5136 21.8595 22.6103Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14.0026 25.6668C20.4459 25.6668 25.6693 20.4435 25.6693 14.0002C25.6693 7.55684 20.4459 2.3335 14.0026 2.3335C7.55928 2.3335 2.33594 7.55684 2.33594 14.0002C2.33594 20.4435 7.55928 25.6668 14.0026 25.6668Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </IconButton>
            ) : (
              <Button
                onClick={handleToggle}
                endIcon={
                  open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                }
                variant="outlined"
                color="inherit"
                disableRipple
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  borderRadius: 2,
                  px: 2.5,
                  py: 1.2,
                  "&:hover": {
                    bgcolor: "background.default",
                  },
                  whiteSpace: "nowrap",
                }}
                startIcon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0026 9.99935C12.3038 9.99935 14.1693 8.13387 14.1693 5.83268C14.1693 3.5315 12.3038 1.66602 10.0026 1.66602C7.70142 1.66602 5.83594 3.5315 5.83594 5.83268C5.83594 8.13387 7.70142 9.99935 10.0026 9.99935Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17.1604 18.3333C17.1604 15.1083 13.9521 12.5 10.0021 12.5C6.05208 12.5 2.84375 15.1083 2.84375 18.3333"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                }
              >
                محمد محمدی
              </Button>
            )}
          </>
        )}

        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: {
              xs: "-175%",
              md: "0%",
            },
            minWidth: {
              xs: "13rem",
              md: "100%",
            },
            overflow: "hidden",
            bgcolor: "background.default",
            boxShadow: "none",
            opacity: open ? 1 : 0,
            transform: open
              ? "translateY(0) scale(1)"
              : "translateY(-48px) scale(0.98)",
            pointerEvents: open ? "auto" : "none",
            transition: "all .25s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "top center",
            py: 1,
          }}
        >
          <Stack px={1}>
            <Stack
              bgcolor={"background.secondary"}
              borderRadius={1}
              border={1}
              borderColor={"background.paper"}
            >
              <Stack direction={"column"} gap={1} p={1}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary" }}
                  fontSize={12}
                >
                  موجودی تومان:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  0 تومان
                </Typography>
              </Stack>
              <Divider />
              <Stack direction={"column"} gap={1} p={1}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary" }}
                  fontSize={12}
                >
                  موجودی طلا:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  0 گرم
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <MenuList>
            {options.map((option) => (
              <Box component={Link} href={option.link} key={option.title}>
                <MenuItem
                  onClick={() => setOpen(false)}
                  sx={{
                    px: 1.5,
                    "&:hover": {
                      background: "background.default",
                    },
                  }}
                >
                  <Stack direction={"row"} gap={1} alignItems={"center"}>
                    <Stack>{option.icon}</Stack>
                    <Typography variant="body2" fontWeight={600}>
                      {option.title}
                    </Typography>
                  </Stack>
                </MenuItem>
                <Divider />
              </Box>
            ))}
          </MenuList>
          <Stack px={1.5} direction={"column"} gap={1.5}>
            <Button
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href="/dashboard/irt-transaction"
              disableRipple
              onClick={() => setOpen(false)}
              sx={{
                "&:hover": {
                  bgcolor: "primary.main",
                },
              }}
            >
              افزایش اعتبار
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpen(false)}
              sx={{ borderColor: "red", color: "red" }}
            >
              خروج
            </Button>
          </Stack>
        </Paper>
      </div>
    </ClickAwayListener>
  );
}
