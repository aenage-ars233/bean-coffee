import React from "react";
import Hero from "../../blocks/hero/hero";
import Discover from "../../blocks/discover/discover";
import Products from "../../blocks/products/products";
import Features from "../../blocks/features/features";
import Benefits from "../../blocks/benefits/benefits";
import Community from "../../blocks/community/community";
import CTA from "../../blocks/cta/cta";

export default function HomePage({ products, features, community }) {
  return (
    <>
      <Hero />
      <Discover />
      <Products products={products} />
      <Features features={features} />
      <Benefits />
      <Community community={community} />
      <CTA />
    </>
  );
}