import PropTypes from "prop-types";


const GoogleMapPropTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  type: PropTypes.oneOf(['default', 'inverse']),
  height: PropTypes.string,
  location: PropTypes.string,
};


export default GoogleMapPropTypes;
