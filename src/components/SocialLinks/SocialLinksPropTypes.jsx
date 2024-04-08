import PropTypes from "prop-types";

const socialLinkPropTypes = PropTypes.shape({
  title: PropTypes.string,
  type: PropTypes.oneOf(['callFunc', 'email']),
  onClick: PropTypes.func,
  email: PropTypes.string,
  icon: PropTypes.node,
});

const socialLinksPropTypes = {
  socials: PropTypes.arrayOf(socialLinkPropTypes),
  gap: PropTypes.string,
  colorType: PropTypes.oneOf(['default', 'inverse']),
  iconSize: PropTypes.oneOf(['small', 'medium', 'large'])
};

export { socialLinkPropTypes };

export default socialLinksPropTypes;
