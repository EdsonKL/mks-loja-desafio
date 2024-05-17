import React from "react";
import styles from "./productCardSkeleton.module.scss";

function ProductCardSkeleton() {
  // Skeleton para carregamento dos produtos
  return (
    <div className={styles.productCardSkeleton}>
      <div className={styles.productCardSkeletonImage}></div>
      <div className={styles.productCardSkeletonInfo}>
        <div className={styles.productCardSkeletonTitle}></div>
        <div className={styles.productCardSkeletonPrice}></div>
      </div>
      <div className={styles.productCardSkeletonDescription}></div>
    </div>
  );
}

export default ProductCardSkeleton;
