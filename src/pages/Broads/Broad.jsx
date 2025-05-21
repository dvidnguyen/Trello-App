// detail
import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar";
import Box from "@mui/material/Box";
import BroadBar from "./BroadBar/BroadBar";
import BroadContent from "./BroadContent/BroadContent";
import { mockData } from "~/apis/mock-data";
const Broad = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BroadBar board={mockData?.board} />
      <BroadContent board={mockData?.board} />
    </Container>
  );
};

export default Broad;
