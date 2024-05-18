"use client";
import React, { useState, createContext, ReactNode } from "react";


export interface CartItemsType{
  id: number,
  name: string,
  description: string,
  price: number,
  photo: string,
  quantity: any
}

// Definindo o tipo para os valores do contexto
export interface AppContextType {
  cartItems: CartItemsType[]; // Defina o tipo apropriado para os itens do carrinho
  setCartItems: React.Dispatch<React.SetStateAction<any[]> | any>;
  cartIsVisible: boolean;
  setCartIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criação do contexto
export const appContext = createContext<AppContextType | any>(null);
let variavel = 0;

function ContextProvider({ children }: { children: ReactNode }) {
  const [cartIsVisible, setCartIsVisible] = useState(false); // State para gerenciar visibilidade do carrinho
  const [cartItems, setCartItems] = useState([]); // State para gerenciar items no carrinho

  // Criação e exportação de provider do contexto
  return (
    <appContext.Provider
      value={{ cartItems, setCartItems, cartIsVisible, setCartIsVisible }}
    >
      {children}
    </appContext.Provider>
  );
}

export default ContextProvider;
