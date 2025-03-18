import React from "react";
import { motion } from "framer-motion";

import Button from "@components/Button";
import AnimatedCounter from "@helpers/AnimatedCounter";

import styles from "./welcome-banner.module.scss";

import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import Image1Mobile from "./images/image1-mobile.png";
import Image2Mobile from "./images/image2-mobile.png";
import Image3Mobile from "./images/image3-mobile.png";
import ArrowLeft from "./images/arrow-left-animation.svg";

type WelcomeBannerProps = {};

const WelcomeBanner: React.FC<WelcomeBannerProps> = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__container}>
        <div className={styles.info}>
          <div className={styles.pretitle}>
            <span className={styles.text}>Over 1M creators</span>
          </div>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Discover And Create NFTs
          </motion.h1>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a <b>$20 bonus.</b>
          </motion.p>
          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
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
          </motion.div>
          <motion.div
            className={styles.statistics}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <div className={styles.item}>
              <span className={styles.value}>
                <AnimatedCounter from="0" to="430" />
                K+
              </span>
              <span className={styles.label}>Art Works</span>
            </div>
            <div className={styles.item}>
              <span className={styles.value}>
                <AnimatedCounter from="0" to="159" />
                K+
              </span>
              <span className={styles.label}>Creators</span>
            </div>
            <div className={styles.item}>
              <span className={styles.value}>
                <AnimatedCounter from="0" to="87" />
                K+
              </span>
              <span className={styles.label}>Collections</span>
            </div>
          </motion.div>
        </div>
        <div className={styles.welcome__images}>
          <motion.img
            className={styles.image1}
            src={Image1}
            alt="nft preview"
            initial={{ opacity: 0, x: 420 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
          />
          <motion.img
            className={styles.image2}
            src={Image2}
            alt="nft preview 2"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          />
          <img className={styles.image3} src={Image3} alt="background dots" />
          <motion.img
            className={styles.image4}
            src={ArrowLeft}
            alt="arrow transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
          />
        </div>
        <div className={styles.welcome__imagesMobile}>
          <motion.img
            className={styles.image1}
            src={Image1Mobile}
            alt="nft preview"
            initial={{ opacity: 0, x: 420 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
          />
          <motion.img
            className={styles.image2}
            src={Image2Mobile}
            alt="nft preview 2"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          />
          <img
            className={styles.image3}
            src={Image3Mobile}
            alt="background dots"
          />
          <motion.img
            className={styles.image4}
            src={ArrowLeft}
            alt="arrow transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
