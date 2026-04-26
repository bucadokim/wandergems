import React from "react";
import Container from "./Container";
import Nav from "./Nav";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white border-muted  shadow-md">
      <div className="mx-10 flex flex-row h-auto items-center justify-between">
        <Nav />
        <Logo imgContainerStyles="w-[100px] items-center" />
        <Button>Plan Your Trip</Button>
      </div>
    </header>
  );
};

export default Header;
