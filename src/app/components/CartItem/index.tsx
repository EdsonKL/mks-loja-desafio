"use client";
import React, { useContext } from "react";
import styles from "./cartItem.module.scss";
import Image from "next/image";
import HandleQuantity from "../HandleQuantity";
import { AppContextType, appContext } from "@/app/contexts/context";

// Definindo os tipos das props
export interface CartItemProps {
  id: number;
  photo: string;
  title: string;
  price: string | number;
  quantity: number;
}

// Criação de componente para exibição de items do carrinho
function CartItem({ photo, title, price, quantity, id }: CartItemProps) {
  const { deleteItemInCart } = useContext<AppContextType>(appContext);

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
      <HandleQuantity id={id} quantity={quantity} />
      <h2>R$ {price}</h2>
      <button onClick={() => deleteItemInCart(id)} className={styles.buttonClose}>
        x
      </button>
    </section>
  );
}

export default CartItem;
