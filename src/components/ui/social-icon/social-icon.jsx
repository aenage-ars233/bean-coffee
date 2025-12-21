import React from "react";
import Icon from "../icon/icon";

export default function SocialIcon({ icon: IconComponent, href }) {
  return (
    <a href={href} target="_blank">
      <Icon component={IconComponent} width={24} height={24} />
    </a>
  );
}