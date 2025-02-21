import { Outlet } from "react-router";
import Header from "./header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="pt-28 px-10 ">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
