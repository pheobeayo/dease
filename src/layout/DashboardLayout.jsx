import React, { useCallback, useEffect } from 'react'
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAccount } from "@starknet-react/core";

import MobileSidebar from "../components/MobileSidebar";

const DashboardLayout = () => {
  const { address, status } = useAccount()

  const navigate = useNavigate();

  const handleRedirect = useCallback(async () => {
    if (status === "connected") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate, status]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect, status, address]);


  return (
    <div>
      <div className="flex bg-[#02071D]">
        <Sidebar />
        <div className="px-6 w-[100%] lg:w-[77%] md:w-[77%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll">
          <MobileSidebar />
          <div className="lg:flex md:flex justify-end my-6 hidden ml-auto">
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
