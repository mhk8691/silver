import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
const rowStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  py: 1.5,
  alignItems: "center",
  justifyContent: "space-between",
};
const titleStyle: SxProps = {
  color: "text.secondary",
  fontWeight: 500,
};
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function OrderConfirmation({ setOpen }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChangeBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack direction={"column"}>
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          مجموع سفارش
        </Typography>
        <Typography variant="body1" fontSize={18}>
          73,778,453 تومان
        </Typography>
      </Stack>
      <Divider />
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          موجودی کیف پول
        </Typography>
        <Typography variant="body1" fontSize={18}>
          0 تومان
        </Typography>
      </Stack>
      <Divider />
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          کمبود موجودی
        </Typography>
        <Typography variant="body1" fontSize={18}>
          73,778,453 تومان
        </Typography>
      </Stack>

      <FormControlLabel
        label="تحویل فیزیکی شمش تنها با ارائه کارت ملی هوشمند و یا شناسنامه جدید امکان‌پذیر می‌باشد."
        sx={{ mt: 2 }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChangeBox}
            disableRipple
            sx={{
              "&.Mui-checked": {
                color: "primary.main",
              },
            }}
            slotProps={{
              input: { "aria-label": "controlled" },
            }}
          />
        }
      />
      <Stack mt={3} direction={"row"} gap={2}>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          sx={{
            fontSize: 20,
            py: 1.3,
            borderRadius: 2,
            width: "70%",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
          disabled={!checked}
        >
          تایید سفارش
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          disableRipple
          sx={{
            fontSize: 16,
            py: 1.3,
            borderRadius: 2,
            width: "30%",
            "&:hover": {
              bgcolor: "background.default",
            },
          }}
          onClick={() => setOpen(false)}
        >
          انصراف
        </Button>
      </Stack>
    </Stack>
  );
}
