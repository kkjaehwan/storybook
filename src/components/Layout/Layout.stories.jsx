import React from "react";
import Layout from "./Layout";
import { Pages } from "@constants/constants";
import ResponsiveNav from "@components/Menu/ResponsiveNav/ResponsiveNav";

export default {
  component: Layout,
  title: "Design System/Layouts/Layout",
  tags: ["autodocs"],
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
};
export const Example = Template.bind({});
Example.args = {
  ...Default.args,
  header: <><div>Logo</div><ResponsiveNav
    pages={Pages} /></>
};