"use client";
import React, { useState, createContext, ReactNode } from "react";

export interface CartItemsType {
  id: number;
  name: string;
  description: string;
  price: any;
  photo: string;
  quantity: number;
}

// Definindo o tipo para os valores do contexto
export interface AppContextType {
  addItemsInCart: (id: number) => CartItemsType;
  removeItemsInCart: (id: number) => CartItemsType;
  deleteItemInCart: (id: number) => CartItemsType;
  cartItems: CartItemsType[]; // Defina o tipo apropriado para os itens do carrinho
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
  cartIsVisible: boolean;
  setCartIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criação do contexto
export const appContext = createContext<AppContextType | any>(null);

function ContextProvider({ children }: { children: ReactNode }) {
  const [cartIsVisible, setCartIsVisible] = useState(false); // State para gerenciar visibilidade do carrinho

  const [cartItems, setCartItems] = useState<CartItemsType[]>([]); // State para gerenciar items no carrinho

  // Função responsável por adicionar mais itens nos itens do carrinho

  function addItemsInCart(id: number) {
    const newCart: CartItemsType[] = cartItems.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return setCartItems(newCart);
  }

  function deleteItemInCart(id: number) {
    const newCardProduct = cartItems.filter((product) => product.id !== id);
    setCartItems(newCardProduct);
  }

  // Função responsável por diminuir a quantidade de determinado item no carrinho
  function removeItemsInCart(id: number) {
    const newCart: any[] = cartItems.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return setCartItems(newCart);
  }

  // Criação e exportação de provider do contexto
  return (
    <appContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartIsVisible,
        setCartIsVisible,
        addItemsInCart,
        removeItemsInCart,
        deleteItemInCart,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export default ContextProvider;
