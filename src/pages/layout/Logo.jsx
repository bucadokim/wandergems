import { Link } from "@tanstack/react-router";
import PropTypes from "prop-types";

import logoSrc from "../../images/page-layout/wandergems-logo.png";

export default function Logo({
  containerStyles = "",
  imgContainerStyles = "",
  textContainerStyles = "",
}) {
  return (
    <Link to="/" className={`relative ${containerStyles}`}>
      <div className={imgContainerStyles}>
        <img
          src={logoSrc}
          alt="Description of the image"
          className="object-fit w-28"
        />
      </div>
    </Link>
  );
}

Logo.propTypes = {
  containerStyles: PropTypes.string,
  imgContainerStyles: PropTypes.string,
  textContainerStyles: PropTypes.string,
};
