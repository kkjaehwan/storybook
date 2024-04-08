import React from "react";
import Logo from "./Logo";

export default {
  component: Logo,
  title: "Design System/Logo/Logo",
  tags: ["autodocs"],
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoText: '<JaehwanKim/>',

};
