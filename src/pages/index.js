import React from "react";
import Gallery from "../components/gallery";
import CustomCursor from "../custom-cursor";
import "../styles/home.scss";

const Index = () => {
  return (
    <div className="main-container">
      <CustomCursor />
      <Gallery />
    </div>
  );
};
export default Index;
