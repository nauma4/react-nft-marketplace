import React from "react";

import Button from "@components/Button";

import styles from "./welcome-banner.module.scss";

import Image1 from './images/image1.png'
import Image2 from './images/image2.png'
import Image3 from './images/image3.png'
import Image1Mobile from './images/image1-mobile.png'
import Image2Mobile from './images/image2-mobile.png'
import Image3Mobile from './images/image3-mobile.png'
import ArrowLeft from './images/arrow-left-animation.svg'

type WelcomeBannerProps = {};

const WelcomeBanner: React.FC<WelcomeBannerProps> = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__container}>
        <div className={styles.info}>
          <div className={styles.pretitle}>
            <span className={styles.text}>Over 1M creators</span>
          </div>
          <h1 className={styles.title}>Discover And Create NFTs</h1>
          <p className={styles.description}>Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <b>$20 bonus.</b></p>
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
              className={styles.create}
              textClassName={styles.createText}
            >
              Create nft
            </Button>
          </div>
          <div className={styles.statistics}>
            <div className={styles.item}>
              <span className={styles.value}>430K+</span>
              <span className={styles.label}>Art Works</span>
            </div>
            <div className={styles.item}>
              <span className={styles.value}>159K+</span>
              <span className={styles.label}>Creators</span>
            </div>
            <div className={styles.item}>
              <span className={styles.value}>87K+</span>
              <span className={styles.label}>Collections</span>
            </div>
          </div>
        </div>
        <div className={styles.welcome__images}>
          <img className={styles.image1} src={Image1} alt="nft preview" />
          <img className={styles.image2} src={Image2} alt="nft preview 2" />
          <img className={styles.image3} src={Image3} alt="background dots" />
          <img className={styles.image4} src={ArrowLeft} alt="arrow transform" />
        </div>
        <div className={styles.welcome__imagesMobile}>
          <img className={styles.image1} src={Image1Mobile} alt="nft preview" />
          <img className={styles.image2} src={Image2Mobile} alt="nft preview 2" />
          <img className={styles.image3} src={Image3Mobile} alt="background dots" />
          <img className={styles.image4} src={ArrowLeft} alt="arrow transform" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
