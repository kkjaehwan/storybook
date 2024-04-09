import React from "react";
import LayoutContainer from "./LayoutContainer";

export default {
  component: LayoutContainer,
  title: "Design System/Layouts/LayoutContainer",
  tags: ["autodocs"],
};

const Template = (args) => <LayoutContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
};
