import React from "react";

export default function Icon({ component: Component, width = 88, height = 88, color = "#000", ...props }) {
  return <Component width={width} height={height} fill={color} {...props} />;
}