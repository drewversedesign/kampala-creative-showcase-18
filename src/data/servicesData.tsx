
import React from 'react';
import { CreditCard, Layout, Smartphone, Palette, Film, Code } from "lucide-react";

export const servicesData = [
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences that keep your customers coming back for more.",
    icon: <Palette className="w-8 h-8 text-white" />,
    bgColor: "bg-gray-800",
    buttonColor: "bg-gray-700"
  },
  {
    title: "Web Design",
    description: "Fast, responsive, and secure websites that drive conversions and grow your business.",
    icon: <Layout className="w-8 h-8 text-white" />,
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    buttonColor: "bg-white"
  },
  {
    title: "Landing Page",
    description: "High-converting landing pages that capture leads and help you achieve your business goals.",
    icon: <Code className="w-8 h-8 text-white" />,
    bgColor: "bg-gray-800",
    buttonColor: "bg-gray-700"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    buttonColor: "bg-white"
  },
  {
    title: "Brand Identity",
    description: "Memorable and cohesive visual identities that make your brand stand out from the competition.",
    icon: <Palette className="w-8 h-8 text-white" />,
    bgColor: "bg-gray-800",
    buttonColor: "bg-gray-700"
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching animations and video content that tell your story in a dynamic way.",
    icon: <Film className="w-8 h-8 text-white" />,
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    buttonColor: "bg-white"
  }
];
