import React from "react";
import { Pages } from "@constants/constants";
import ResponsiveNav from "./ResponsiveNav";

export default {
  component: ResponsiveNav,
  title: "ResponsiveNav",
  tags: ["autodocs"],
};

const Template = (args) => <ResponsiveNav {...args} />;

export const Default = Template.bind({});


Default.args = {
  pages: Pages,
};


export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  activePageKeys: ['ministry_training', 'ddc_training']
};