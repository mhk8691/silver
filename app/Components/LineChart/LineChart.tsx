import Box from "@mui/material/Box";
import { LineChart as SilverChart } from "@mui/x-charts/LineChart";

const margin = { top: 0, bottom: 0, left: 10 };

interface Props {
  data: Array<number>;
  label: string[];
  width: string;
  height: string;
  color: string;
  noLabel: boolean;
  isGradiant: boolean;
}
export default function LineChart({
  data,
  label,
  width,
  height,
  color,
  noLabel,
  isGradiant,
}: Props) {
  return (
    <Box
      sx={{
        width: { width },
        height: { height },
        "& .MuiAreaElement-root": {
          fill: isGradiant ? "url(#silverGradiant)" : "transparent",
        },

        "& .MuiChartsAxis-tick": {
          display: "none",
        },
        "& .MuiChartsAxis-line": {
          display: "none",
        },
      }}
    >
      <SilverChart
        slotProps={{
          tooltip: {
            trigger: "axis",
          },
        }}
        series={[
          {
            data: data,
            showMark: false,
            curve: "bumpX",
            area: true,
            color: color,
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: label,
            height: 30,
            position: noLabel ? "none" : "bottom",
          },
        ]}
        yAxis={[{ width: 40, position: noLabel ? "none" : "left" }]}
        margin={margin}
      >
        {isGradiant && (
          <defs>
            <linearGradient id="silverGradiant" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F7FAFD" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#1F1E1B" stopOpacity={0} />
            </linearGradient>
          </defs>
        )}
      </SilverChart>
    </Box>
  );
}
