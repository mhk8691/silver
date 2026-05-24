"use client";

import InputField from "@/app/Components/InputField/InputField";
import { Button, Stack } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  return (
    <Stack direction={"row"} gap={1} mt={3.5}>
      <InputField
      type="number"
        placeholder="کد مندرج روی کارت"
        setValue={setValue}
        value={value}
        style={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
          width: "75%",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: 16,
          width: {
            xs: "40%",
            sm: "25%",
          },
          borderRadius: 2,
          whiteSpace: "nowrap",
        }}
      >
        ثبت کد تایید
      </Button>
    </Stack>
  );
}
