"use client"
import { appContext } from "@/app/contexts/context";
import { ShoppingCartRounded } from "@mui/icons-material";
import React, { useContext } from "react";

import styles from "./buttonHeaderCart.module.scss";

function ButtonHeaderCart() {
  // Context para receber dados do carrinho e alterar status de exibição do carrinho
  const { cartItems, setCartIsVisible } = useContext(appContext);

  // Função para fechar o carrinho
  const openCart = () => {
    setCartIsVisible(true);
  };
  return (
    <button className={styles.buttonCart} onClick={() => openCart()}>
      <ShoppingCartRounded />
      <span>{cartItems.length}</span>{" "}
      {/* Exibição do volume de itens no carrinho  */}
    </button>
  );
}

export default ButtonHeaderCart;
