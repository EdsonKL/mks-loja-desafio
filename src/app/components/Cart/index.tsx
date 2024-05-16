import React, { useContext } from "react";
import styles from "./cart.module.scss";
import CartItem from "../CartItem";
import { appContext } from "@/app/contexts/context";

function Cart() {
  const { cartItems, cartIsVisible, setCartIsVisible } = useContext(appContext);

  const closeCart = () => {
    setCartIsVisible(false);
  };

  return (
    <section
      className={`${styles.cart} ${cartIsVisible ? styles.open : styles.close}`}
    >
      <div className={styles.header}>
        <h1>Carrinho de compras</h1>
        <button onClick={() => closeCart()}>X</button>
      </div>
      {cartItems.map((cartItem: any) => (
        <CartItem
          key={cartItem.id}
          photo={cartItem.photo}
          title={cartItem.name}
          price={cartItem.price}
          quantity={4}
        />
      ))}
      <div>Resumo cart</div>
    </section>
  );
}

export default Cart;
