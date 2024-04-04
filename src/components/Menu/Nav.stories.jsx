import React from "react";
import Nav from "./Nav";

export default {
  component: Nav,
  title: "Nav",
  tags: ["autodocs"],
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({}); const Pages = [
  {
    key: 'main',
    name: 'Main',
    path: '/',
    sub: [],
  },
  {
    key: 'church_intro',
    name: 'Church Introduction',
    path: '/church-introduction',
    sub: [
      {
        key: 'individual_ministry',
        name: 'Individual Ministry',
        path: '/individual-ministry',
      },
      {
        key: 'ddc_training',
        name: 'DDC Training',
        path: '/ddc-training',
      },
      {
        key: 'application_form',
        name: 'Application Form',
        path: '/application-form',
      },
    ],
  },
  {
    key: 'ministry_training',
    name: 'Ministry Training',
    path: '/ministry-training',
    sub: [
      {
        key: 'individual_ministry',
        name: 'Individual Ministry',
        path: '/individual-ministry',
      },
      {
        key: 'ddc_training',
        name: 'DDC Training',
        path: '/ddc-training',
      },
      {
        key: 'application_form',
        name: 'Application Form',
        path: '/application-form',
      },
    ],
  },
  {
    key: 'bulletin_sermon',
    name: 'Bulletin/Sermon',
    path: '/bulletin-sermon',
    sub: [
    ],
  },
  {
    key: 'online_donation',
    name: 'Online Donation',
    path: '/online-donation',
    sub: [],
  },
];

Default.args = {
  pages: Pages,
};


export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  activePageKeys: ['ministry_training', 'ddc_training']
};