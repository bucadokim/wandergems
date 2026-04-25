import React from "react";
import Container from "./Container";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b shadow-md">
      <div className="item-center mx-auto flex flex-row justify-center">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
