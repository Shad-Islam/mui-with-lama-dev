import { Box } from "@mui/material";
import React from "react";

export const Sidebar = () => {
  return (
    <Box
      sx={{
        background: "red",
        p: 2,
        display: { xs: "none", sm: "block" },
      }}
      flex={1}
    >
      Sidebar
    </Box>
  );
};
