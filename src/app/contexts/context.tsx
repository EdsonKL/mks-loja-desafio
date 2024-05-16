"use client"
import React, { useState, createContext, type Dispatch} from 'react'

export const appContext = createContext<any| null>(null)


function ContextProvider({children}: any) {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const [cartItems, setCartItems] = useState([])

  return (
    <appContext.Provider
      value={{ cartItems, setCartItems, cartIsVisible, setCartIsVisible }}
    >
      {children}
    </appContext.Provider>
  );
}


export default ContextProvider