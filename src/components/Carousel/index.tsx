import React from "react";
import Slider from "react-slick";

import styles from "./carousel.module.scss";

import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left-icon.svg";
import { ReactComponent as ArrowRight } from "@assets/icons/arrow-right-icon.svg";

type CarouselProps = {
  children: Array<React.ReactNode>;
};

interface CustomArrowsProps {
  sliderRef: React.RefObject<Slider>;
}

const NftCarouselArrows: React.FC<CustomArrowsProps> = ({ sliderRef }) => {
  return (
    <div className={styles.nftCarousel__arrows}>
      <div className={styles.arrowsBlock}>
        <button
          className={styles.button}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ArrowLeft />
        </button>
        <button
          className={styles.button}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const sliderRef = React.useRef<Slider>(null);

  const sliderSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3.4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={sliderRef} {...sliderSettings}>
        {children}
      </Slider>
      <NftCarouselArrows sliderRef={sliderRef} />
    </>
  );
};

export default Carousel;
