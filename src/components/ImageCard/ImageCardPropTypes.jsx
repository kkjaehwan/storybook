import { ImageProps } from "@constants/propTypes";
import PropTypes from "prop-types";

const ImageCardPropTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(ImageProps)),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ImageCardPropTypes;
