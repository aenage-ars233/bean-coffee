import React from "react";
import { Routes, Route } from "react-router-dom";
import PageWrapper from "/src/components/layout/page-wrapper";
import GlobalStyles from "./styles";
import { defaultTheme } from "../../data/theme/default-theme";
import { ThemeProvider } from "styled-components";
import HomePage from "../pages/home-page/home-page";

import products from "../../data/products";
import features from "../../data/features";
import community from "../../data/community";
import { socialLinks, footerLinks } from "../../data/footer";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" index element={
          <PageWrapper socialLinks={socialLinks} footerLinks={footerLinks}>
             <HomePage products={products} features={features} community={community} />
          </PageWrapper>
        } />
      </Routes>
    </ThemeProvider>
  );
}


