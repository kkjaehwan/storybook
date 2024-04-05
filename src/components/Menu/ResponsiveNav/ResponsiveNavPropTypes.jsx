import PropTypes from "prop-types";

const responsiveNavPropTypes = {
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
  widthHorizontal: PropTypes.string,
  heightHorizontal: PropTypes.string,
  widthVertical: PropTypes.string,
  heightVertical: PropTypes.string,
  mainButtonType: PropTypes.string,
  subButtonType: PropTypes.string,
  activePageKeys: PropTypes.string,
};

export default responsiveNavPropTypes;
