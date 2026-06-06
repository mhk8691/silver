"use client";
import { IconButton, Stack, SxProps, Typography } from "@mui/material";
import LineChart from "../LineChart/LineChart";
import BottomPrice from "./BottomPrice";
import TopPrice from "./TopPrice";
import FilterToggleButton from "../FilterToggleButton/FilterToggleButton";
import { useState } from "react";
import { ToggleItemsType } from "@/app/core/Types";
import Container from "../Containers/Container/Container";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SilverBubble from "./SilverBubble";
const pData = [
  432100, 433800, 434500, 433200, 435100,
  436700, 435900, 437300, 438000, 437100,
  438500, 439200, 438700, 440100, 439700,
  441300, 440800, 442000, 443100, 442500,
  443800, 444200, 443700, 445100, 444600,
  443900, 442800, 443500, 444100, 443700,
  442900, 441800, 442500, 443200, 444000,
  443500, 444800, 445500, 444900, 446200,
  445700, 444800, 443900, 444500, 445200,
  444700, 443800, 442900, 443600, 444300,
  445100, 444600, 445800, 446500, 445900,
  447100, 446600, 445800, 444900, 445500,
  444800, 443900, 443100, 442600, 443300,
  444000, 443500, 444700, 445400, 444900,
  446100, 446800, 446300, 447500, 448100,
  447600, 448800, 449500, 449000, 450200,
  449700, 448900, 448200, 447600, 446900,
  446300, 445700, 445000, 444400, 443800,
  443200, 442700, 442100, 441500, 440900,
  440300, 439900, 439700, 440100, 439700
];

const xLabels = Array.from({ length: 100 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (99 - i));

  return date.toLocaleDateString("fa-IR", {
    month: "short",
    day: "numeric",
  });
});
interface Props {
  positionPrice: "top" | "bottom" | "both";
  chartHeight?: string;
  cardStyle?: SxProps;
  priceStyle?: SxProps;
  dividerStyle?: SxProps;
}
const toggleItems: ToggleItemsType[] = [
  {
    id: 1,
    title: "۲۴ ساعت اخیر",
    value: "lastDay",
  },
  {
    id: 2,
    title: "هفتگی",
    value: "lastWeek",
  },
  {
    id: 3,
    title: "ماهانه",
    value: "lastMonth",
  },
];
export default function Chart({
  positionPrice,
  chartHeight,
  cardStyle,
  dividerStyle,
  priceStyle,
}: Props) {
  const [select, setSelect] = useState(toggleItems[0]?.value); 
  const [open,setOpen] = useState(false)
  return (
    <>
    <Container style={{ px: 2.5, ...cardStyle }}>
      <Typography
        variant="h2"
        fontSize={{
          xs: 14,
          sm: 22,
        }}
        fontWeight={"bold"}
        sx={{ color: "text.title" }}
      >
        نمودار لحظه ای قیمت نقره
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={{
          xs: "flex-start",
          sm: "flex-end",
        }}
        mb={positionPrice === "top" || positionPrice === "both" ? 0 : 2.5}
        mt={{
          xs: 2,
          sm: 1,
        }}
      >
        <Stack
          width={{
            md: "45%",
            lg: "37%",
          }}
        >
          <FilterToggleButton
            active={select}
            setActive={setSelect}
            items={toggleItems}
            style={{
              fontSize: {
                xs: 10,
                sm: 12,
              },
              py: 0.7,
            }}
          />
        </Stack>
      </Stack>
      {(positionPrice === "top" || positionPrice === "both") && <TopPrice />}
  <Stack direction={'row'}  alignItems={'center'} gap={0}>
              <Typography variant="body1" >
              (حباب -۴.۴۸ ٪)  
            </Typography>
            <IconButton onClick={()=>setOpen(true)}>
                <InfoOutlinedIcon  />
              </IconButton>
            </Stack>
      <LineChart
        width="100%"
        height={chartHeight || "180px"}
        isGradiant={true}
        color="#598BBA"
        data={pData}
        label={xLabels}
        noLabel={false}
      />
      {(positionPrice === "bottom" || positionPrice === "both") && (
        <BottomPrice priceStyle={priceStyle} dividerStyle={dividerStyle} />
      )}
    </Container>
    <SilverBubble open={open} setOpen={setOpen} />
    </>
  );
}
