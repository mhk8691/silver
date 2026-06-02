import DetailTable from "@/app/Components/Tables/DetailTable/DetailTable";
import { Grid, Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import BackLink from "../BackLink";
import Form from "./Form";
import { statuses } from "../wallet/page";
export const metadata: Metadata = {
  title: "دریافت کارت هدیه | نقرینه",
  description: "",
};

export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 4,
        sm: 1,
        lg: 3,
      }}
    >
      {" "}
      <BackLink title="دریافت هدیه" />
      <Grid
        size={12}
        bgcolor={"background.default"}
        border={{
          xs: 0,
          sm: 1,
        }}
        borderColor={{
          sm: "background.paper",
        }}
        borderRadius={2.5}
        direction={"row"}
        alignItems={"center"}
        px={{
          xs: 0,
          sm: 7,
        }}
        py={{
          xs: 0,
          sm: 3,
        }}
        container
        spacing={3}
      >
        <Typography
          variant="h6"
          fontSize={{
            xs: 16,
            sm: 22,
          }}
          sx={{
            color: "text.title",
            display: {
              xs: "none",
              sm: "block",
              md: "none",
            },
          }}
        >
          دریافت هدیه
        </Typography>
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
            sx={{
              color: "text.title",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            دریافت هدیه
          </Typography>
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
            sx={{
              color: "text.secondary",
              mt: {
                xs: 2,
                sm: 1,
                md: 4.5,
              },
            }}
          >
            با ثبت کد هدیه، هدیه نقره خود را دریافت کنید. در صورت تطابق با حداقل
            میزان قابل برداشت، می‌توانید هدیه نقره خود را در قالب شمش به صورت
            فیزیکی تحویل بگیرید، در غیر این صورت معادل ریالی قابل برداشت خواهد
            بود.
          </Typography>
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
            sx={{
              mt: {
                xs: 3,
                md: 6,
              },
            }}
          >
            لطفا شماره سریال کارت هدیه را وارد کنید.
          </Typography>
          <Form />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
          order={{
            xs: 1,
            md: 2,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
          >
            <Stack
              width={{
                xs: "100%",
                sm: "66%",
                md: "100%",
              }}
            >
              <Image
                alt=""
                width={417}
                height={185}
                src={"/images/submitGiftCard.webp"}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid size={12}>
        <DetailTable
        statuses={statuses}
          title="کارت هدیه های شما"
          toggleItems={[]}
          type="chip"
          emptyMessage="کارت هدیه‌ای برای شما به ثبت نرسیده است"
          listLength={0}
          tableBody={<></>}
          tableHead={[]}
        />
      </Grid>
    </Grid>
  );
}
