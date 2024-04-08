import React from "react";
import { Pages } from "@constants/constants";
import ResponsiveNav from "./ResponsiveNav";
import Logo from "@components/Logo/Logo";

export default {
  component: ResponsiveNav,
  title: "Design System/Menus/ResponsiveNav",
  tags: ["autodocs"],
};

const Template = (args) => <ResponsiveNav {...args} />;

export const Default = Template.bind({});


Default.args = {
  logo: <Logo logoText="<Logo/>" onClick={() => { alert() }} />,
  pages: Pages,
};


export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  activePageKeys: ['ministry_training', 'ddc_training']
};