import React from "react";
import styles from "./cartItem.module.scss";
import Image from "next/image";

// Definindo os tipos das props
interface CartItemProps {
  photo: string;
  title: string;
  price: number;
  quantity: number;
}

// Criação de componente para exibição de items do carrinho
function CartItem({ photo, title, price, quantity }: CartItemProps) {
  return (
    <section className={styles.cardItem}>
      <Image
        className={styles.imageCardItem}
        src={photo}
        alt="img"
        width={70}
        height={70}
      />
      <h3>{title}</h3>
      <p>|- {quantity} +|</p>
      <h2>R$ {price}</h2>
      <button className={styles.buttonClose}>x</button>
    </section>
  );
}

export default CartItem;
