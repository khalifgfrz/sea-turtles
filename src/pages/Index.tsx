import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Index() {
  const location = useLocation();

  return (
    <div className="container-fluid h-full w-full">
      <Header />
      {location.pathname === "/" ? <Home /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default Index;
