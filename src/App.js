import { Box, Stack } from "@mui/material";
import { Feed } from "./components /Feed";
import { Navbar } from "./components /Navbar";
import { Sidebar } from "./components /Sidebar";
import { Rightbar } from "./components /Rightbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
