import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function SilverUnderline({ children }: { children: ReactNode }) {
  return (
    <Box component="span" position="relative" display="inline-block">
      <Box
        width="110%"
        position="absolute"
        height={12}
        bgcolor="#E2EEF9"
        borderRadius="999px"
        bottom={2}
        left={"50%"}
        sx={{ transform: "translateX(-50%)" }}
        zIndex={0}
      />

      <Box component="span" position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
