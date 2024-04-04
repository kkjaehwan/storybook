import React from "react";
import Card from "./Card";

export default {
  component: Card,
  title: "Card",
  tags: ["autodocs"],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "/images/vite.svg",
  description: "Please click the button below if you would like to make a reservation."
  ,
  buttonProps: {
    type: "line",
    size: "large",
    isDisabled: false,
    label: "Parking Lot Application Form.",
    iconLeft: null,
    iconRight: null,
    onClickTask: () => { alert('hi'); },
  }
};
