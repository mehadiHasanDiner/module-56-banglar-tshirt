import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Header />
      <Toaster />

      <div className="min-h-[calc(100vh-136px)] md:mx-16 font-serif my-2  p-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
