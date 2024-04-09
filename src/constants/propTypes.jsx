import PropTypes from "prop-types";
export const ImageProps = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string
}
export const PageProps = {
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
}
export const SocialLinkPropTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['callFunc', 'email']),
  onClick: PropTypes.func,
  email: PropTypes.string,
  icon: PropTypes.node,
}