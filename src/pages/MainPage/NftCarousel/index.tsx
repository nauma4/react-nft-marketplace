import React from "react";

import Carousel from "@components/Carousel";
import ProductCard from "@components/ProductCard";

import styles from "./nft-carousel.module.scss";


type NftCarouselProps = {};


const NftCarousel: React.FC<NftCarouselProps> = ({}) => {

  return (
    <div className={styles.nftCarousel}>
      <h2 className={styles.nftCarousel__title}>Weekly - Top NFT</h2>
      <div className={styles.nftCarousel__slider}>
        <Carousel>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16].map((item) => (
            <ProductCard key={item} image={'/assets/images/nft-image2-test.jpg'} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};


export default NftCarousel;
