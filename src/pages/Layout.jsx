import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}
export default Layout;