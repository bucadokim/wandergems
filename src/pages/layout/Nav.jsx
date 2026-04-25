import { Link } from "@tanstack/react-router";
import React from "react";

const menu = [
  { label: "Home", id: 1, link: "/" },
  { label: "Explore", id: 2, link: "/explore" },
];

export default function Nav() {
  return (
    <nav>
      <div className="flex">
        {menu.map((item, index) => (
          <Link to={item.link} key={index}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
