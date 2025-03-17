import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "@components/Header";
import Footer from "@components/Footer";

import styles from "./main-page.module.scss";

import WelcomeBannerContainer from './WelcomeBanner'
import NftCarouselContainer from './NftCarousel'
import CreateAndSellContainer from './CreateAndSell'

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <div className={styles.content}>
        <WelcomeBannerContainer />
        <NftCarouselContainer />
        <CreateAndSellContainer />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
