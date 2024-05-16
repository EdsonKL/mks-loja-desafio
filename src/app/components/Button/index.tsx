import React from "react";

import styles from "./button.module.scss";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Button({title, onClick}: any) {
  return (
    <button className={styles.buttonCard} onClick={onClick}>
      <ShoppingBagIcon />
      <span>{title}</span>
    </button>
  );
}

export default Button;
