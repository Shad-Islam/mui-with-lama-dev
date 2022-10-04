import { DeveloperMode, NoEncryption } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Shad Dev
        </Typography>
        <DeveloperMode sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
};
