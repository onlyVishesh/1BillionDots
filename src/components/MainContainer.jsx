import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScroolToTop";

const MainContainer = () => {
  return (
    
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainContainer;
