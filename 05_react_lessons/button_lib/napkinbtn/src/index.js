import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Napkinbtn = ({ type = "default", children, ...props }) => {
  const className = `${styles.napkinbtn} ${styles[`napkinbtn-${type}`]}`;   

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

Napkinbtn.propTypes = {
  type: PropTypes.oneOf(["primary", "dashed", "text", "link", "default"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Napkinbtn;
