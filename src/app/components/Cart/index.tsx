"use client";
import React, { useContext } from "react";
import styles from "./cart.module.scss";
import CartItem from "../CartItem";
import { appContext, AppContextType } from "@/app/contexts/context";

function Cart() {
  // Context para receber dados do carrinho e alterar status de exibição do carrinho
  const { setCartItems, cartItems, cartIsVisible, setCartIsVisible } = useContext<AppContextType>(appContext);

  // Função para fechar o carrinho
  const closeCart = (): void => {
    setCartIsVisible(false);
    console.log(cartItems);
  };

  const totalPrice = cartItems.reduce((acc, price) => {
    return parseInt(price.price) * price.quantity + acc;
  }, 0);

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
      <div className={styles.cartItems}>
        {/* Renderização dos items do carrinho */}
        {cartItems.length > 0 ? (
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
        ) : (
          <h2 className={styles.withoutItems}>Não há itens no carrinho...</h2>
        )}
      </div>
      {/* Resumo da compra */}
      <div className={styles.CartFooter}>
        <div className={styles.totalPrice}>
          <p>Total:</p>
          <span>R$ {totalPrice}</span>
        </div>
        <div className={styles.finishShop}>
          <button onClick={() => setCartItems([])}>Finalizar Compra</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
