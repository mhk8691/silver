import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function layout({ children }: Props) {
  return (
    <Container maxWidth={"lg"} sx={{ my: 2 }}>
      <Grid container>
        <Grid
          order={{
            xs: 2,
            md: 1,
          }}
          size={{
            xs: 12,
            md: 7,
            lg: 6,
          }}
          sx={{
           
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            border: {
              xs: 0,
              md: 1,
            },
            borderColor: {
              md: "primary.light",
            },
            p: {
              xs: 0,
              md: 8,
            },
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Stack
            maxWidth={{
              xs: "468px",
              md: "100%",
            }}
            width={{
              xs: "468px",
              md: "100%",
            }}
          >
            <Stack
              mb={4}
              display={{
                xs: "none",
                md: "flex",
              }}
              direction={"row"}
              justifyContent={"center"}
            >
              <Image
                src={"/images/logo.png"}
                width={120}
                height={120}
                alt=""
                style={{
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Stack>
            {children}
          </Stack>
        </Grid>
        <Grid
          order={{
            xs: 1,
            md: 2,
          }}
          size={{
            xs: 12,
            md: 5,
            lg: 6,
          }}
          p={{
            xs: 0,
            md: 8,
          }}
          sx={{
            background: {
              xs: "bakcground.default",
              md: `linear-gradient(
120deg,
 #C8CED1 0%,
  #C7D6E3 50%,
  #C5DDF3 100%
)`,
            },
            borderTopRightRadius: {
              xs: 0,
              md: 20,
            },
            borderBottomRightRadius: {
              xs: 0,
              md: 20,
            },
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              width={{
                xs: 220,
                md: 365,
              }}
              height={{
                xs: 220,
                md: 290,
              }}
            >
              <Image
                src={"/images/login2.webp"}
                width={365}
                height={290}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"center"}
              gap={2.5}
              mt={10}
              display={{
                xs: "none",
                md: "flex",
              }}
            >
              <Typography
                variant="h6"
                fontSize={20}
                sx={{ color: "#10100F" }}
                fontWeight={600}
              >
                دارینه پلتفرم خرید و فروش نقره بدون اجرت
              </Typography>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ color: "text.secondary" }}
              >
                دارینه بستر آنلاین خرید و فروش نقره
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
