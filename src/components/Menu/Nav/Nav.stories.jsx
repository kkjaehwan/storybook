import React from "react";
import Nav from "./Nav";
import { Pages } from "@constants/constants";
import Logo from "@components/Logo/Logo";

export default {
  component: Nav,
  title: "Design System/Menus/Nav",
  tags: ["autodocs"],
};

const Template = (args) => <Nav {...args} />;

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