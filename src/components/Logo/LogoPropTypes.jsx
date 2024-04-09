import PropTypes from "prop-types";

const logoPropTypes = {
  logoText: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'inverse'])
};

export default logoPropTypes;
