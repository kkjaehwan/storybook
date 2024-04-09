import PropTypes from "prop-types";

const gridFlexContainerPropTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['default', 'inverse']),
  children: PropTypes.node.isRequired,
  containerType: PropTypes.oneOf(['grid', 'flex']),
  borderType: PropTypes.oneOf(['inner', 'full']),
  colCount: PropTypes.number,
  separatorGap: PropTypes.string,
  separatorThickness: PropTypes.string,
  separatorColor: PropTypes.string,
  childPadding: PropTypes.string
};

export default gridFlexContainerPropTypes;
