import React from "react";
import GridFlexContainer from "./GridFlexContainer";
import Card from "@components/Card/Card";

export default {
  component: GridFlexContainer,
  title: "GridFlexContainer",
  tags: ["autodocs"],
};

const Template = (args) => (
  <GridFlexContainer {...args}>
    <Card
      image="images/vite.svg"
      description="Please click the button below if you would like to make a reservation."
      buttonProps={{
        type: "line",
        size: "large",
        isDisabled: false,
        label: "Parking Lot Application Form.",
        iconLeft: null,
        iconRight: null,
        onClickTask: () => { alert('hi'); }
      }}
    />
    <Card
      image="images/vite.svg"
      description="Please click the button below if you would like to make a reservation."
      buttonProps={{
        type: "line",
        size: "large",
        isDisabled: false,
        label: "Parking Lot Application Form.",
        iconLeft: null,
        iconRight: null,
        onClickTask: () => { alert('hi'); }
      }}
    />
    <Card
      image="images/vite.svg"
      description="Please click the button below if you would like to make a reservation."
      buttonProps={{
        type: "line",
        size: "large",
        isDisabled: false,
        label: "Parking Lot Application Form.",
        iconLeft: null,
        iconRight: null,
        onClickTask: () => { alert('hi'); }
      }}
    />
    <Card
      image="images/vite.svg"
      description="Please click the button below if you would like to make a reservation."
      buttonProps={{
        type: "line",
        size: "large",
        isDisabled: false,
        label: "Parking Lot Application Form.",
        iconLeft: null,
        iconRight: null,
        onClickTask: () => { alert('hi'); }
      }}
    />
    <Card
      image="images/vite.svg"
      description="Please click the button below if you would like to make a reservation."
      buttonProps={{
        type: "line",
        size: "large",
        isDisabled: false,
        label: "Parking Lot Application Form.",
        iconLeft: null,
        iconRight: null,
        onClickTask: () => { alert('hi'); }
      }}
    />
  </GridFlexContainer>
);

export const Default = Template.bind({});
Default.args = {};
