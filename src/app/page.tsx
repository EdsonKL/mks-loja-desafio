import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./page.module.scss";
import Cart from "./components/Cart";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Cart />
      <Footer />
    </div>
  );
}
