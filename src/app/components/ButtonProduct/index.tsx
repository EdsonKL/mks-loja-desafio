import React from "react";

import styles from "./button.module.scss";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

// Criação do botão "comprar" do card do item da loja
function ButtonProduct({ title, onClick }: any) {
  return (
    <button className={styles.buttonCard} onClick={onClick}>
      <ShoppingBagIcon />
      <p>{title}</p>
    </button>
  );
}

export default ButtonProduct;
