import { ImageProps } from "@constants/propTypes";
import PropTypes from "prop-types";

const LazyLoadImagePropTypes = {
  image: PropTypes.shape(ImageProps)
}

export default LazyLoadImagePropTypes;
