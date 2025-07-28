import React from "react";
import PropTypes from "prop-types";

const Card = ({
  children,
  title,
  subtitle,
  header,
  footer,
  padding = "medium",
  shadow = "medium",
  hover = false,
  className = "",
  ...props
}) => {
  const paddingClasses = {
    none: "",
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  const shadowClasses = {
    none: "",
    small: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg",
    xl: "shadow-xl",
  };

  const hoverClasses = hover
    ? "hover:shadow-lg transition-shadow duration-200"
    : "";

  const classes = [
    "bg-white rounded-lg border border-gray-200",
    paddingClasses[padding],
    shadowClasses[shadow],
    hoverClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {header && (
        <div className="border-b border-gray-200 pb-4 mb-4">{header}</div>
      )}

      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="flex-1">{children}</div>

      {footer && (
        <div className="border-t border-gray-200 pt-4 mt-4">{footer}</div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  padding: PropTypes.oneOf(["none", "small", "medium", "large"]),
  shadow: PropTypes.oneOf(["none", "small", "medium", "large", "xl"]),
  hover: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
