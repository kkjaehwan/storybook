import buttonPropTypes from "@components/Button/ButtonPropTypes";
import PropTypes from "prop-types";

const footerPropTypes = {
  image: PropTypes.string,
  imgAlt: PropTypes.string,
  description: PropTypes.string.isRequired,
  buttonProps: PropTypes.shape(buttonPropTypes).isRequired
};

export default footerPropTypes;
