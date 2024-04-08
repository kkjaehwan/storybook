import React from "react";
import Layout from "./Layout";
import { Pages } from "@constants/constants";
import ResponsiveNav from "@components/Menu/ResponsiveNav/ResponsiveNav";
import Logo from "@components/Logo/Logo";
import Footer from "@components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

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
  header: <>
    <ResponsiveNav logo={<Logo logoText="<Logo/>" onClick={() => { alert() }} />} pages={Pages} />
  </>,
  footer: <Footer logo={<Logo logoText="<Logo/>" onClick={() => { alert() }} />}
    socialLinks={[
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
    ]}
    copyright={'© Powered by Jaehwan Kim.'} />
};