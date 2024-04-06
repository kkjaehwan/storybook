import React from "react";
import GridFlexContainer from "./GridFlexContainer";
import Card from "@components/Card/Card";

export default {
  component: GridFlexContainer,
  title: "Design System/Layouts/GridFlexContainer",
  tags: ["autodocs"],
};

const buttonPropsSample = {
  type: "3",
  size: "large",
  isDisabled: false,
  label: "Parking Lot Application Form.",
  iconLeft: null,
  iconRight: null,
  onClickTask: () => { alert('hi'); }
};

const createCard = () => (
  <Card
    image="images/vite.svg"
    description="Please click the button below if you would like to make a reservation."
    buttonProps={buttonPropsSample}
  />
);
const Template = (args) => (
  <GridFlexContainer {...args}>
    {Array.from({ length: 5 }, (_, index) => (
      <React.Fragment key={index}>
        {createCard()}
      </React.Fragment>
    ))}
  </GridFlexContainer>
);

export const Default = Template.bind({});
Default.args = {};
