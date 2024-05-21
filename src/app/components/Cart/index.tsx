"use client";
import React, { useContext } from "react";
import styles from "./cart.module.scss";
import CartItem from "../CartItem";
import { appContext, AppContextType } from "@/app/contexts/context";

function Cart() {
  // Context para receber dados do carrinho e alterar status de exibição do carrinho
  const { cartItems, cartIsVisible, setCartIsVisible } =
    useContext<AppContextType>(appContext);

  // Função para fechar o carrinho
  const closeCart = (): void => {
    setCartIsVisible(false);
    console.log(cartItems);
  };

  return (
    <section
      className={`${styles.cart} ${cartIsVisible ? styles.open : styles.close}`} // condição de classe para exibição do carrinho com css
    >
      <div className={styles.header}>
        {" "}
        {/* Parte Superior(header) do carrinho de compras */}
        <h1>Carrinho de compras</h1>
        <button onClick={() => closeCart()}>X</button>
      </div>
      {/* Renderização dos items do carrinho */}
      {cartItems ? 
        cartItems.map((cartItem: any) => (
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            photo={cartItem.photo}
            title={cartItem.name}
            price={cartItem.price * cartItem.quantity}
            quantity={cartItem.quantity}
          />
        ))
        : (
        <h2>não há itens...</h2>
      )}
      {/* Resumo da compra */}
      <div>.</div>
    </section>
  );
}

export default Cart;
