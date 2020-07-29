import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <div className="header">
      <h1>
        {" "}
        <HighlightIcon /> ToDo List{" "}
      </h1>
    </div>
  );
}

export default Header;
