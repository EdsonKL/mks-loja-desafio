"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./page.module.scss";
import ProductCard from "./components/ProductCard";
import ProductCardSkeleton from "./components/ProductCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cart from "./components/Cart";
import { useContext, useState } from "react";
import { appContext } from "./contexts/context";

export interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}

async function getData() {
  const response = await axios
    .get(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
    )
    .then((resp) => resp.data.products);
  return response;
}

export default function Home() {
  const { data, isLoading } = useQuery<Product[] | any>({
    queryKey: ["products"],
    queryFn: getData,
  });

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.productsContainer}>
          {isLoading ? (
            <div className={styles.productSkeletonContainer}>
              {[...Array(8)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            data.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                photo={product.photo}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          )}
        </div>
      </main>
      <Cart />
      <Footer />
    </div>
  );
}
