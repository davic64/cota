import { RouterProvider } from "react-router";
import { routes } from "./routes";
import TitleBar from "./components/custom/titleBar";

const App = () => {
  return (
    <>
      <TitleBar />
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
