
import styles from "./header.module.scss";
import ButtonHeaderCart from "../ButtonHeaderCart";

function Header() {
  
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>
      <div>
        <ButtonHeaderCart />
      </div>
    </header>
  );
}

export default Header;
