"use client";
import { ShoppingCartRounded } from "@mui/icons-material";
import styles from "./header.module.scss";
import { useContext } from "react";
import { appContext } from "@/app/contexts/context";

function Header() {
  const { cartItems, setCartIsVisible } = useContext(appContext);

  const openCart = () => {
    setCartIsVisible(true);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>
      <div>
        <button className={styles.buttonCart} onClick={() => openCart()}>
          <ShoppingCartRounded />
          <span>{cartItems.length}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
