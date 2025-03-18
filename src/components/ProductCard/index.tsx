import React from "react";

import Button from "@components/Button";

import styles from "./product-card.module.scss";

import EthereumIcon from "@assets/icons/ethereum-icon.svg";

type ProductCardProps = {
  title: string;
  image: string;
  bid: number;
  endAuction: number;
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
        <ProductCardTimer value={endAuction} />
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

const ProductCardTimer = ({ value }: { value: number }): React.ReactNode => {
  const calculateTimeLeft = () => {
    const difference = new Date(value).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timer}>
      <div className={styles.data}>
        <span className={styles.datetime}>{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

export default ProductCard;