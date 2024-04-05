import React from "react";
import Nav from "./Nav";
import { Pages } from "@constants/constants";

export default {
  component: Nav,
  title: "Nav",
  tags: ["autodocs"],
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});


Default.args = {
  pages: Pages,
};


export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  activePageKeys: ['ministry_training', 'ddc_training']
};