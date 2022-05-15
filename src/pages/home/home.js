import React, { useState, useEffect } from "react";
import { Box } from "src/components";
import Footer from "../footer";
import Header from "../header/header";
import SideNavBar from "./sidenav";
import { StyledMain, Wrapper } from "./home.styled";
import { Outlet } from "react-router-dom";
import categoryService from "src/services/categoryService";
import { useAuth } from "src/contexts";

export default function Home() {
  const [categories, setCategories] = useState(null);
  const { authState } = useAuth();

  const getAllCategories = () => {
    categoryService.getAllCategories().then((response) => {
      setCategories(response.categories);
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Box display="flex">
        {authState.isLoggedIn && <SideNavBar categories={categories} />}
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Box>
      <Footer />
    </Wrapper>
  );
}
