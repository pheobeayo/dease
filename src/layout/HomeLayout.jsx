import React, { useCallback, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, Navigate } from "react-router-dom";
import { useAccount } from "@starknet-react/core";
import { useNavigate } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigate();

  const { address, status } = useAccount();

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
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
