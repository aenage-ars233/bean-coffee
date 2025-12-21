import React from "react";
import Decorations from "./decorations/decorations";
import Header from "./header/header";
import Footer from "./footer/footer";
import HomePage from "../pages/home-page/home-page";

export default function PageWrapper({ socialLinks, footerLinks, children, ...props }) {
  return (
    <>
      <Decorations />
      <Header />
      <main>
        {children}
      </main>
      <Footer socialLinks={socialLinks} footerLinks={footerLinks} />
    </>
  );
}