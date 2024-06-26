import React from "react";
import Layout from "./Layout";
import { Pages } from "@constants/constants";
import ResponsiveNav from "@components/Menu/ResponsiveNav/ResponsiveNav";
import Logo from "@components/Logo/Logo";
import Footer from "@components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import Card from "@components/Card/Card";
import ImageCard from "@components/ImageCard/ImageCard";
import GoogleMap from "@components/GoogleMap/GoogleMap";
import GridFlexContainer from "@components/GridFlexContainer/GridFlexContainer";
import ImageCarousel from "@components/ImageCarousel/ImageCarousel";

export default {
  component: Layout,
  title: "Design System/Layouts/Layout",
  tags: ["autodocs"],
};

const Template = (args) => <Layout {...args} />;

const buttonPropsSample = [{
  type: "2",
  size: "large",
  isDisabled: false,
  label: "Parking Lot Application Form.",
  iconLeft: null,
  iconRight: null,
  onClickTask: () => { alert('hi'); }
}];

export const Default = Template.bind({});
Default.args = {
};
export const Example = Template.bind({});
Example.args = {
  ...Default.args,
  header:
    <>
      <ResponsiveNav logo={<Logo logoText="<CNTower/>" onClick={() => { alert() }} type='inverse' />} pages={Pages} />
    </>,
  children:
    <>

      <Card
        title="CN Tower"
        description="The CN Tower is a symbol of Toronto, Ontario, and Canada. Standing at a height of 553.3 meters, it is one of the tallest structures in the world. Visitors can enjoy panoramic views of the city from its observation decks and experience thrilling attractions like the EdgeWalk."
        buttonsProps={[{
          type: "2",
          size: "large",
          isDisabled: false,
          label: "Bulletin Link",
          iconLeft: null,
          iconRight: null,
          onClickTask: () => { alert('hi'); },
        }, {
          type: "2",
          size: "large",
          isDisabled: false,
          label: "Newcomer Registration",
          iconLeft: null,
          iconRight: null,
          onClickTask: () => { alert('hi'); },
        }]}
        type='inverse'
      />
      <ImageCard images={[{ src: "../../public/images/CNTower.jpg", alt: 'CN Tower', title: 'CN Tower' }, { src: "/images/Totonto.jpg", alt: 'Totonto', title: 'Totonto' }]}
        title="CN Tower Introduction"
        description="The CN Tower, located in downtown Toronto, is an iconic landmark that attracts millions of visitors each year. Its observation decks offer breathtaking views of the city and Lake Ontario. Whether you're a tourist or a local, a visit to the CN Tower is a must-do experience."
      />
      <GridFlexContainer title="Test" type="inverse" colCount="4">
        {Array.from({ length: 4 }, (_, index) => (
          <React.Fragment key={index}>
            <Card
              image="images/vite.svg"
              description="Please click the button below if you would like to make a reservation."
              buttonsProps={buttonPropsSample}
            />
          </React.Fragment>
        ))}
      </GridFlexContainer >
      <GoogleMap />
      <ImageCarousel
        images={[{
          src: "/images/CNTower.jpg",
        }, {
          src: "/images/toronto_background.jpg",
        }, {
          src: "/images/Totonto.jpg",
        }]}
        containerHeight="30vh" type="inverse" />
    </>,
  footer: <Footer logo={<Logo logoText="<CNTower/>" onClick={() => { alert() }} />}
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
    copyright={'© Powered by Jaehwan Kim.'} />,
  backgroundImage: 'images/toronto_background.jpg'
};
