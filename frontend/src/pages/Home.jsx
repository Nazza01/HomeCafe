import { BasicPage } from "../components/BasicPage";
import Home from "@mui/icons-material/Home";

export const HomePage = () => {
  return (
    <BasicPage title="Home Page" icon={<Home />}>
      <h1>This is the Home Page</h1>
    </BasicPage>
  )
};

export default Home;