import React, { useState, useEffect } from "react";
import { Box } from "src/components";
import Footer from "../footer";
import Header from "../header/header";
import SideNavBar from "./sidenav";
import { StyledMain } from "./home.styled";
import { Outlet } from "react-router-dom";
import videoService from "src/services/videoService";
import categoryService from "src/services/categoryService";

export default function Home() {
  const [categories, setCategories] = useState(null);
  const getAllCategories = () => {
    categoryService.getAllCategories().then((response) => {
      setCategories(response.categories);
      console.log({ response });
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <Header />
      <Box display="flex">
        <SideNavBar categories={categories} />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Box>
      <Footer />
    </div>
  );
}
