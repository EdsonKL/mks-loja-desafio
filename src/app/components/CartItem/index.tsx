import React from "react";
import styles from "./cartItem.module.scss";
import Image from "next/image";

function CartItem({ photo, title, price, quantity }: any) {
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
