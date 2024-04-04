import PropTypes from "prop-types";

const navPropTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      sub: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  mainButtonType: PropTypes.string,
  subButtonType: PropTypes.string,
  activePageKeys: PropTypes.string,
};

export default navPropTypes;
