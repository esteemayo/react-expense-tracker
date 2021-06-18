import PropTypes from "prop-types";

const Button = ({ icon, text, type, onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text} {icon}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  className: "btn",
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
