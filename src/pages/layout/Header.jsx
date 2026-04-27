import React from "react";
import Container from "./Container";
import Nav from "./Nav";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import SearchInputComponent from "@/ui components/FormElements/SearchInputComponent";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white border-muted  shadow-md">
      <div className="mx-10 flex flex-row h-auto items-center justify-between">
        <Nav />
        <Logo imgContainerStyles="w-[100px] items-center" />
        <div className="flex flex-row  gap-x-2">
          <SearchInputComponent />
          <Button>Plan Your Trip</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
