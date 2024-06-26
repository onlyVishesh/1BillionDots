import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainContainer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainContainer;