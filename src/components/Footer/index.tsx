import React from "react";

import styles from "./footer.module.scss";

import LogoText from "@assets/images/logo-text-white.svg";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram-icon.svg";
import { ReactComponent as LinkedinIcon } from "@assets/icons/linkedin-icon.svg";
import { ReactComponent as FacebookIcon } from "@assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "@assets/icons/twitter-icon.svg";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.block}>
          <div className={styles.footer_head}>
            <a
              href="/#"
              className={styles.footer__logo}
              style={{ backgroundImage: `url(${LogoText})` }}
              aria-label="Home page"
            ></a>

            <div className={styles.menu__socials}>
              <a href="/#" className={styles.instagram}>
                <InstagramIcon />
              </a>
              <a href="/#" className={styles.linkedin}>
                <LinkedinIcon />
              </a>
              <a href="/#" className={styles.facebook}>
                <FacebookIcon />
              </a>
              <a href="/#" className={styles.twitter}>
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className={styles.footer__menu}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__listItem}>
                <a href="/#">Privacy Policy</a>
              </li>
              <li className={styles.menu__listItem}>
                <a href="/#">Term & Conditions</a>
              </li>
              <li className={styles.menu__listItem}>
                <a href="/#">About us</a>
              </li>
              <li className={styles.menu__listItem}>
                <a href="/#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.line} />

        <div className={styles.block}>
          <span className={styles.copyright}>
            © 2023 EATLY All Rights Reserved.
          </span>

          <div className={styles.menu__socials}>
            <a href="/#" className={styles.instagram}>
              <InstagramIcon />
            </a>
            <a href="/#" className={styles.linkedin}>
              <LinkedinIcon />
            </a>
            <a href="/#" className={styles.facebook}>
              <FacebookIcon />
            </a>
            <a href="/#" className={styles.twitter}>
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
