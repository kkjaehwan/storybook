import React from "react";
import SocialLinks from "./SocialLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

export default {
  component: SocialLinks,
  title: "Design System/SocialLinks/SocialLinks",
  tags: ["autodocs"],
};

const Template = (args) => <SocialLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  socials: [
    {
      title: 'abc',
      type: 'callFunc',
      onClick: () => { alert() },
      icon: <FontAwesomeIcon
        icon={faSquareFacebook}
      />,
    },
    {
      title: 'abc',
      type: 'callFunc',
      onClick: () => { alert() },
      icon: <FontAwesomeIcon
        icon={faSquareInstagram}
      />,
    },
    {
      title: 'abc',
      type: 'callFunc',
      onClick: () => { alert() },
      icon: <FontAwesomeIcon
        icon={faLinkedin}
      />,
    }
  ]
};
