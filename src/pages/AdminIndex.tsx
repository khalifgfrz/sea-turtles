import { Outlet, useLocation } from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import ProductAdmin from "./ProductAdmin";

function AdminIndex() {
  const location = useLocation();
  return (
    <div className="h-screen w-full flex flex-col">
      <HeaderAdmin />
      <div className="md:flex">
        <SidebarAdmin />
        {location.pathname === "/admin" ? <ProductAdmin /> : <Outlet />}
      </div>
    </div>
  );
}

export default AdminIndex;
