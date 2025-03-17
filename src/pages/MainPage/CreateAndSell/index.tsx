import React from "react";

import Button from "@components/Button";

import styles from "./create-and-sell.module.scss";

import Image from "./images/nft-image.png";
import ImageMobile from "./images/nft-image-mobile.png";

type CreateAndSellProps = {};

const CreateAndSell: React.FC<CreateAndSellProps> = () => {
  return (
    <div className={styles.cas}>
      <div className={styles.cas__container}>
        <div className={styles.info}>
          <h3 className={styles.title}>Create and Sell NFTs</h3>
          <p className={styles.description}>World's Largest NFT Place</p>
          <div className={styles.buttons}>
            <Button
              styleName="normal"
              styleColor="white"
              className={styles.explore}
              textClassName={styles.exploreText}
            >
              Explore More
            </Button>
            <Button
              styleName="outline"
              className={styles.sell}
              textClassName={styles.sellText}
            >
              Sell Artwork
            </Button>
          </div>
        </div>
        <img className={styles.image} src={Image} alt="nft preview" />
        <img className={styles.imageMobile} src={ImageMobile} alt="nft mobile preview" />
      </div>
    </div>
  );
};

export default CreateAndSell;
