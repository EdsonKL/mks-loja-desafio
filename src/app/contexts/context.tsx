"use client"
import React, { useState, createContext} from 'react'


// Criação do contexto
export const appContext = createContext<any| null>(null)


function ContextProvider({children}: any) {
  
  const [cartIsVisible, setCartIsVisible] = useState(false); // State para gerenciar visibilidade do carrinho
  const [cartItems, setCartItems] = useState([]) // State para gerenciar items no carrinho

  // Criação e exportação de provider do contexto
  return (
    <appContext.Provider
      value={{ cartItems, setCartItems, cartIsVisible, setCartIsVisible }}
    >
      {children}
    </appContext.Provider>
  );
}


export default ContextProvider