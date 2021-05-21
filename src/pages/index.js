import React from "react";
import Gallery from "../components/gallery";
import CustomCursor from "../custom-cursor";
import CursorManager from "../custom-cursor/CursorManager";
import "../styles/home.scss";

const Index = () => {
  return (
    <CursorManager>
      <div className="main-container">
        <CustomCursor />
        <Gallery />
      </div>
    </CursorManager>
  );
};
export default Index;
