"use client";
import React from "react";
import ProductCardSkeleton from "../ProductCardSkeleton";
import ProductCard from "../ProductCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import styles from "./main.module.scss";

interface ApiResponse {
  products: Product[];
}

// Interface para receber os produtos
export interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}

function Main() {
  // Função para buscar os produtos na API
  async function getData() {
    const response = await axios
      .get<ApiResponse>(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      )
      .then((resp) => resp.data.products);
    return response;
  }

  // Gerenciador de Query para usar a função de busca na API
  const { data, isLoading } = useQuery<Product[] | any>({
    queryKey: ["products"],
    queryFn: getData,
  });
  return (
    <main className={styles.main}>
      <div className={styles.productsContainer}>
        {isLoading ? (
          <div className={styles.productSkeletonContainer}>
            {[...Array(8)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          data.map((product: Product) => (
            // Renderização dos produtos da loja
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              photo={product.photo}
              price={product.price}
              quantity={1}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Main;
