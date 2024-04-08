import buttonPropTypes from "@components/Button/ButtonPropTypes";
import { ImageProps } from "@constants/propTypes";
import PropTypes from "prop-types";

const ImageCarouselPropTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(ImageProps))
}

export default ImageCarouselPropTypes;
