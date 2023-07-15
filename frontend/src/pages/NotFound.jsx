import { BasicPage } from "../components/BasicPage";
import Home from "@mui/icons-material/Home";

export const NotFoundPage = () => {
  return (
    <BasicPage title="Error 404 - Not Found" icon={<Home />}>
      <h1>Page not found</h1>
    </BasicPage>
  )
};
