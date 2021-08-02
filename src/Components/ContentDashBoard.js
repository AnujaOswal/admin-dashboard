import React from "react";
import Projects from "./ContentData/Projects";
import Development from "./ContentData/Development";
import Shades from "./ContentData/Shades";
import Illustrations from "./ContentData/Illustrations";

export default function ContentDashBoard() {
    return(
        <div className="Contents">
        <div className="l-content">
          {/* Projects component */}
          <Projects />
  
          {/* Shades Component */}
          <Shades />
        </div>
  
        <div className="r-content">
          {/* Illustrations component */}
          <Illustrations />
  
          {/* Development component */}
          <Development />
        </div>
      </div>
    );
}