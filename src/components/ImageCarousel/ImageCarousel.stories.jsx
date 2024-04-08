import React from "react";
import ImageCarousel from "./ImageCarousel";

export default {
  component: ImageCarousel,
  title: "Design System/ImageCarousel/ImageCarousel",
  tags: ["autodocs"],
};

const Template = (args) => <ImageCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [{
    src: "/images/pexels-antonio-batinić-4164418.jpg",
  }, {
    src: "/images/pexels-mikael-blomkvist-6476595.jpg",
  }, {
    src: "/images/pexels-photomix-company-230544.jpg",
  }]
};
