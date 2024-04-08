import { PageProps } from "@constants/propTypes";
import PropTypes from "prop-types";

const navPropTypes = {
  logo: PropTypes.node,
  pages: PropTypes.arrayOf(
    PropTypes.shape(PageProps)
  ).isRequired,
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  widthHorizontal: PropTypes.string,
  heightHorizontal: PropTypes.string,
  widthVertical: PropTypes.string,
  heightVertical: PropTypes.string,
  mainButtonType: PropTypes.string,
  subButtonType: PropTypes.string,
  activePageKeys: PropTypes.string,
};

export default navPropTypes;
