import React from "react";
import Navlink from "../../ui/navlink/navlink";
import { StyledNav, StyledUl } from "./styles";

export default function Navigation() {
  const links = [
    {to: "/", text: "Home"},
    {to: "#", text: "Menu"},
    {to: "#", text: "About Us"},
    {to: "#", text: "Contact Us"},
  ];

  return (
    <StyledNav>
      <StyledUl>
        {links.map((link) => (
          <li key={link.text}>
            <Navlink href={link.to}>{link.text}</Navlink>
          </li>
        ))}
      </StyledUl>
    </StyledNav>
  );
}