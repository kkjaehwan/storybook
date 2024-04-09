import React from "react";
import HamburgerNav from "./HamburgerNav";
import { Pages } from "@constants/constants";
import Logo from "@components/Logo/Logo";

export default {
  component: HamburgerNav,
  title: "Design System/Menus/HamburgerNav",
  tags: ["autodocs"],
};

const Template = (args) => <HamburgerNav {...args} />;

export const Default = Template.bind({});


Default.args = {
  logo: <Logo logoText="<Logo/>" onClick={() => { alert() }} />,
  pages: Pages,
  mainButtonType: "1", subButtonType: "2"
};


export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  activePageKeys: ['play_your_visit', 'getting_here']
};