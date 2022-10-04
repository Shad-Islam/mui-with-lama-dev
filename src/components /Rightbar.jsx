import { Box } from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box
      sx={{
        background: "green",
        p: 2,
        display: { xs: "none", sm: "block" },
      }}
      flex={2}
    >
      Rightbar
    </Box>
  );
};
