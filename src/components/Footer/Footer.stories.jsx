import React from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "@components/Logo/Logo";

export default {
  component: Footer,
  title: "Design System/Footer/Footer",
  tags: ["autodocs"],
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: <Logo logoText="<Logo/>" onClick={() => { alert() }} />,
  socialLinks: [
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
  ],
  copyright: '© Powered by Jaehwan Kim.'
};
