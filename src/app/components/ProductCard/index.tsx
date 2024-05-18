import { Product } from "@/app/components/Main/index";
import Image from "next/image";
import styles from "./productCard.module.scss";
import ButtonProduct from "../ButtonProduct";
import { useContext } from "react";
import { appContext, AppContextType } from "@/app/contexts/context";

function ProductCard({
  id,
  name,
  description,
  photo,
  price,
  quantity,
}: Product) {
  // Formatação do valor do produto para BRL
  let priceNumber: string = parseInt(price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

  // Context para receber e alterar dados do carrinho
  const { cartItems, setCartItems } = useContext<AppContextType>(appContext);

  // Função responsável por adicionar novos itens ao carrinho
  const handleAddCart = (): void => {
    // if (!cartItems.filter((product) => product.id == id)) {
    // return console.log("já tem");
    // }
    const itemIsInCart = cartItems.some((product) => product.id == id)
    if(itemIsInCart){

     return console.log("já tem")
     // setCartItems([
      //   ...cartItems,
      //   { id, name, description, photo, price, quantity },
      // ]); 
    }
    setCartItems([
      ...cartItems,
      { id, name, description, photo, price, quantity },
    ]); 
    return console.log("n tem")    // const filtro = cartItems.filter((product) => product.id == id);
    
    // console.log(filtro);

    // return console.log("n tem");
  };

  return (
    <div className={styles.card} key={id}>
      <div className={styles.contentCard}>
        <Image src={photo} alt="photo" width={130} height={130} />
        <div className={styles.titlePrice}>
          <h2>{name}</h2>
          <span>{priceNumber}</span>
        </div>
        <p>{description}</p>
      </div>
      <ButtonProduct title="Comprar" onClick={() => handleAddCart()} />
    </div>
  );
}

export default ProductCard;
