import PropTypes from "prop-types";

const buttonPropTypes = {
  type: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
  size: PropTypes.oneOf(["medium", "large"]),
  width: PropTypes.string,
  height: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isHovered: PropTypes.bool,
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClickTask: PropTypes.func,
};

export default buttonPropTypes;
