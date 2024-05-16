import { Product } from "@/app/page";
import Image from "next/image";
import styles from "./productCard.module.scss";
import Button from "../Button";
import { Suspense, useContext } from "react";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { appContext } from "@/app/contexts/context";

function ProductCard({
  id,
  name,
  description,
  photo,
  price,
  quantity,
}: Product) {
  let priceNumber: string = parseInt(price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

  const { cartItems, setCartItems } = useContext(appContext);

  const handleAddCart = () =>
    setCartItems([
      ...cartItems,
      { id, name, description, photo, price, quantity },
    ]);

  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <div className={styles.card} key={id}>
        <div className={styles.contentCard}>
          <Image src={photo} alt="photo" width={130} height={130} />
          <div className={styles.titlePrice}>
            <h2>{name}</h2>
            <span>{priceNumber}</span>
          </div>
          <p>{description}</p>
        </div>
        <Button title="Comprar" onClick={() => handleAddCart()} />
      </div>
    </Suspense>
  );
}

export default ProductCard;
