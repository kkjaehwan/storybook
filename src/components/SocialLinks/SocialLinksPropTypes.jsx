import { SocialLinkPropTypes } from "@constants/propTypes";
import PropTypes from "prop-types";


const socialLinksPropTypes = {
  socials: PropTypes.arrayOf(PropTypes.shape(SocialLinkPropTypes)),
  gap: PropTypes.string,
  colorType: PropTypes.oneOf(['default', 'inverse']),
  iconSize: PropTypes.oneOf(['small', 'medium', 'large'])
};


export default socialLinksPropTypes;
