import BeansIcon from "../assets/icons/beans.svg?react";
import BadgeIcon from "../assets/icons/badge.svg?react";
import CoffeeCupIcon from "../assets/icons/coffee-cup.svg?react";
import BestPriceIcon from "../assets/icons/best-price.svg?react";

const features = [
  {
    id: "beans",
    title: "Supreme Beans",
    description: "Beans that provides great taste",
    icon: BeansIcon,
    highlighted: true,
  },
  {
    id: "quality",
    title: "High Quality",
    description: "We provide the highest quality",
    icon: BadgeIcon,
    highlighted: false,
  },
  {
    id: "extraordinary",
    title: "Extraordinary",
    description: "Coffee like you have never tasted",
    icon: CoffeeCupIcon,
    highlighted: false,
  },
  {
    id: "affordable",
    title: "Affordable Price",
    description: "Our Coffee prices are easy to afford",
    icon: BestPriceIcon,
    highlighted: false,
  },
];

export default features;