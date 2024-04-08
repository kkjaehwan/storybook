import buttonPropTypes from "@components/Button/ButtonPropTypes";
import PropTypes from "prop-types";

const CardPropTypes = {
  image: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonsProps: PropTypes.arrayOf(PropTypes.shape(buttonPropTypes)).isRequired
};

export default CardPropTypes;
