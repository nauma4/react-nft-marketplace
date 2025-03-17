import React from "react";

import Button from "@components/Button";

import styles from "./product-card.module.scss";

import EthereumIcon from "@assets/icons/ethereum-icon.svg";

type ProductCardProps = {
  title?: string;
  image?: string;
  bid?: number;
  endAuction?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  bid,
  endAuction,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <img src={image} alt={title} />
        <div className={styles.timer}>
          <div className={styles.data}>
            <span className={styles.datetime}>07h 09m 12s</span>
          </div>
        </div>
      </div>
      <a href={"/#"} className={styles.product__title}>
        {title || "???"}
      </a>
      <div className={styles.product__footer}>
        <div className={styles.info}>
          <span className={styles.title}>Current bid</span>
          <div className={styles.coin}>
            <img src={EthereumIcon} alt={"eth"} />
            <span className={styles.value}>{bid || "1.75"}</span>
          </div>
        </div>
        <Button textClassName={styles.submitText} className={styles.submit}>
          Place bid
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
