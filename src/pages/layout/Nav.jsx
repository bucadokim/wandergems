import { Link } from "@tanstack/react-router";
import React from "react";

const menu = [
  { label: "Home", id: 1, link: "/" },
  { label: "Explore", id: 2, link: "/explore" },
  { label: "Discover", id: 3, link: "/discover" },
];

export default function Nav() {
  return (
    <nav>
      <div className="flex items-center justify-center gap-x-6">
        {menu.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex items-center rounded-md"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
