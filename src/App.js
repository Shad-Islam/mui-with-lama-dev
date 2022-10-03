import { Button, styled, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { Code } from "@mui/icons-material";

function App() {
  const OurButton = styled(Button)({
    background: "yellow",
    color: "#000",
    margin: 5,
    "&:hover": {
      background: "red",
      color: "#ffffff",
    },
    "&:disabled": {
      background: "gray",
      color: "#ffffff",
    },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<CodeIcon />} size="large" variant="outlined">
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="p">
        Shad
      </Typography>

      <OurButton variant="outlined">My Button</OurButton>

      <OurButton size="large">Mohsin Vai</OurButton>
    </div>
  );
}

export default App;
