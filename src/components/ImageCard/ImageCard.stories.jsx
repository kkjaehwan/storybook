import React from "react";
import ImageCard from "./ImageCard";

export default {
  component: ImageCard,
  title: "Design System/Cards/ImageCard",
  tags: ["autodocs"],
};

const Template = (args) => <ImageCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [{ src: "/images/pexels-antonio-batinić-4164418.jpg", alt: '1', title: '2' }, { src: "/images/pexels-antonio-batinić-4164418.jpg", alt: '1', title: '2' }],
  title: "Parking Permit Application Form",
  description: "Please click the button below if you would like to make a reservation."
};
