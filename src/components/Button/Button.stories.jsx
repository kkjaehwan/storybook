import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconLeft: <FontAwesomeIcon
    icon={faPlayCircle}
  />,
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  type: "1"
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  ...Primary.args,
  iconLeft: < FontAwesomeIcon
    icon={faArrowAltCircleDown}
  />
  , label: ''
};


export const PrimaryIconRight = Template.bind({});
PrimaryIconRight.args = {
  ...Primary.args,
  label: 'download',
  iconLeft: null,
  iconRight: < FontAwesomeIcon
    icon={faArrowAltCircleDown}
  />
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  isDisabled: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  type: "2"
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  isDisabled: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Default.args,
  type: "3"
};

export const TertiaryIcon = Template.bind({});
TertiaryIcon.args = {
  ...Tertiary.args,
  iconLeft: < FontAwesomeIcon
    icon={faArrowAltCircleDown}
  />
  , label: ''
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  ...Tertiary.args,
  isDisabled: true
};

export const Quarternary = Template.bind({});
Quarternary.args = {
  ...Default.args,
  type: "4"
};

export const QuarternaryIcon = Template.bind({});
QuarternaryIcon.args = {
  ...Quarternary.args,
  iconLeft: < FontAwesomeIcon
    icon={faArrowAltCircleDown}
  />
  , label: ''
};

export const QuarternaryDisabled = Template.bind({});
QuarternaryDisabled.args = {
  ...Quarternary.args,
  isDisabled: true
};

export const Quinary = Template.bind({});
Quinary.args = {
  ...Default.args,
  type: "5"
};

export const QuinaryIcon = Template.bind({});
QuinaryIcon.args = {
  ...Quinary.args,
  iconLeft: < FontAwesomeIcon
    icon={faArrowAltCircleDown}
  />
  , label: ''
};

export const QuinaryDisabled = Template.bind({});
QuinaryDisabled.args = {
  ...Quinary.args,
  isDisabled: true
};


