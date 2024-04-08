import React from "react";
import LazyLoadImage from "./LazyLoadImage";

export default {
  component: LazyLoadImage,
  title: "Design System/LazyLoadImage/LazyLoadImage",
  tags: ["autodocs"],
};

const Template = (args) => <LazyLoadImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: {
    src: "/images/pexels-antonio-batinić-4164418.jpg",
  }
};
