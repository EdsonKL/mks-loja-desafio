"use client";
import React, { useContext } from "react";
import { CartItemProps } from "../CartItem";
import styles from "./handleQuatity.module.scss";

import { AppContextType, appContext } from "@/app/contexts/context";

type Quantity = Partial<CartItemProps>;

function HandleQuantity({ quantity, id }: any) {
  const { addItemsInCart, removeItemsInCart, deleteItemInCart } =
    useContext<AppContextType>(appContext);

  const handleNewItem = (id: number) => {
    return addItemsInCart(id);
  };

  const handleRemoveItem = (id: number) => {
    if (quantity == 1) return deleteItemInCart(id);
    removeItemsInCart(id);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleRemoveItem(id)}>-</button>
      <span>|</span>
      <p>{quantity}</p>
      <span>|</span>

      <button onClick={() => handleNewItem(id)}>+</button>
    </div>
  );
}

export default HandleQuantity;
