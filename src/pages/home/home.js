import React from "react";
import Footer from "../footer";
import Header from "../header/header";
import { StyledMain } from "./home.styled";

export default function Home() {
  return (
    <div>
      <Header />
      <StyledMain>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        inventore tenetur praesentium consequatur suscipit corrupti!
      </StyledMain>
      <Footer />
    </div>
  );
}
