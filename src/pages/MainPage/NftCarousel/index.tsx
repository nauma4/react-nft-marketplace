import React from "react";

import Carousel from "@components/Carousel";
import ProductCard from "@components/ProductCard";
import { randInt, randFloat } from "@helpers/randNumber";

import styles from "./nft-carousel.module.scss";

type NftItem = {
  title: string;
  image: string;
  price: number;
  endAuction: number;
};

type NftCarouselProps = {};

const generateNftList = (): NftItem[] => {
  let result: Array<NftItem> = [];

  const nftMaxRange = randInt(13, 20);

  for (let i = 0; i < nftMaxRange; i++) {
    const title = `Nft title ${i}`;
    const image =
      randInt(0, 1) === 0
        ? "/assets/images/nft-image-test.jpg"
        : "/assets/images/nft-image2-test.jpg";
    const price: number = randFloat(1.1, 2.3);
    const endAuction: number =
      +new Date() + randInt(
        1000 * 60 * 60 * 24, // 1 day
        1000 * 60 * 60 * 24 * 10 // 10 days
      );
    const item: NftItem = {
      title,
      image,
      price,
      endAuction,
    };
    result.push(item);
  }

  return result;
};

const NftCarousel: React.FC<NftCarouselProps> = () => {
  const [nfts, setNftList] = React.useState<Array<NftItem>>([]);

  React.useEffect(() => {
    setNftList(generateNftList());
  }, []);

  return (
    <div className={styles.nftCarousel}>
      <h2 className={styles.nftCarousel__title}>Weekly - Top NFT</h2>
      <div className={styles.nftCarousel__slider}>
        <Carousel>
          {nfts.map((item) => (
            <ProductCard
              key={item}
              image={item.image}
              title={item.title}
              bid={item.price}
              endAuction={item.endAuction}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NftCarousel;
