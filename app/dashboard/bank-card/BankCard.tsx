"use client";
import Card from "@/app/Components/Containers/Container/Container";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { BankCardDataType } from "@/app/core/Types";
import RemoveCard from "./RemoveCard";
import { getBankInfoWithSheba } from "ir-banks-info";

export default function BankCard({
  bankCardData,
  setBankCardData,
}: {
  bankCardData: BankCardDataType[];
  setBankCardData: Dispatch<SetStateAction<BankCardDataType[]>>;
}) {
  const [cardId, setCardId] = useState<number>(0);

  const [open, setOpen] = useState(false);
  return (
    <>
      {bankCardData.map((item) => (
        <Grid
          key={item.id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <Card style={{ px: 2, py: 3 }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
           {
            item.shaba_number &&    <Stack direction={"row"} gap={1} alignItems={"center"}>
                <Image
                  src={getBankInfoWithSheba(item?.shaba_number)?.logo || ''}
                  alt={""}
                  width={36}
                  height={36}
                />
                <Typography
                  variant="body2"
                  fontSize={16}
                  sx={{ color: "text.muted" }}
                >
                  {getBankInfoWithSheba(item?.shaba_number)?.persianName} 
                </Typography>
              </Stack>
           }
              <Stack>
                <IconButton
                  disableRipple
                  onClick={() => {
                    setOpen(true);
                    setCardId(item.id);
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
                      stroke="currentColor"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                      stroke="currentColor"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M14.1344 6.85547L13.6469 14.408C13.5644 15.5855 13.4969 16.5005 11.4044 16.5005H6.58937C4.49687 16.5005 4.42938 15.5855 4.34688 14.408L3.85938 6.85547"
                      stroke="currentColor"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.75 12.375H10.2475"
                      stroke="currentColor"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.125 9.375H10.875"
                      stroke="currentColor"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </IconButton>
              </Stack>
            </Stack>
            <Stack mt={2}>
              <Typography
                variant="body2"
                fontSize={18}
                sx={{
                  color: "text.title",
                  direction: "rtl",
                  textAlign: "left",
                }}
              >
               {item.owner_full_name}
              </Typography>
              <Typography
                variant="body2"
                fontSize={18}
                sx={{ color: "text.title",mt:1.5 }}
              >
                {item.shaba_number}
              </Typography>
            </Stack>
          </Card>
        </Grid>
      ))}
      <RemoveCard
        open={open}
        setOpen={setOpen}
        cardId={cardId}
        setBankCardData={setBankCardData}
        setCardId={setCardId}
        bankCardData={bankCardData}
      />
    </>
  );
}
