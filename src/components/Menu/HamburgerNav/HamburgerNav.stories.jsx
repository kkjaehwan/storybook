import React from "react";
import HamburgerNav from "./HamburgerNav";
import { Pages } from "@constants/constants";

export default {
  component: HamburgerNav,
  title: "Design System/Menus/HamburgerNav",
  tags: ["autodocs"],
};

const Template = (args) => <HamburgerNav {...args} />;

export const Default = Template.bind({});


Default.args = {
  pages: Pages,
};


export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  activePageKeys: ['ministry_training', 'ddc_training']
};