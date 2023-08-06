/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <div className="text-center">
        {navigation.state === "loading" ? <Loader /> : ""}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
