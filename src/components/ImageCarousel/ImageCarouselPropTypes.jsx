import buttonPropTypes from "@components/Button/ButtonPropTypes";
import { ImageProps } from "@constants/propTypes";
import PropTypes from "prop-types";

const ImageCarouselPropTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape(ImageProps)),
  containerHeight: PropTypes.string,
  type: PropTypes.string
}

export default ImageCarouselPropTypes;
