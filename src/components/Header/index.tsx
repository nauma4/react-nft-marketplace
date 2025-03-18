import React from "react";
import clsx from "clsx";

import Button from "@components/Button";
import useWindowsScroll from "@helpers/useWindowScroll";

import styles from "./header.module.scss";

import Logo from "@assets/images/logo.svg";
import LogoText from "@assets/images/logo-text.svg";
import MenuIcon from "@assets/icons/menu-icon.svg";
import MenuCloseIcon from "@assets/icons/menu-close-icon.svg";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram-icon.svg";
import { ReactComponent as LinkedinIcon } from "@assets/icons/linkedin-icon.svg";
import { ReactComponent as FacebookIcon } from "@assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "@assets/icons/twitter-icon.svg";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { y } = useWindowsScroll();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleHeader = () => setIsOpen((value) => !value);

  return (
    <div
      className={clsx(styles.header, {
        [styles.isOpen]: isOpen,
        [styles.isScroll]: y > 30,
      })}
    >
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <a href="/#" className={styles.logo__link}>
            <img src={Logo} alt="logo" className={styles.logo__image} />
            <img
              src={LogoText}
              alt="logo"
              className={styles.logo__imageMobile}
            />
          </a>

          <button className={styles.header__switchMenu} onClick={toggleHeader}>
            <img alt="burger" src={!isOpen ? MenuIcon : MenuCloseIcon} />
          </button>
        </div>
        <div className={styles.header__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__listItem}>
              <a href="/#">Discover</a>
            </li>
            <li className={styles.menu__listItem}>
              <a href="/#">Creators</a>
            </li>
            <li className={styles.menu__listItem}>
              <a href="/#">Sell</a>
            </li>
            <li className={styles.menu__listItem}>
              <a href="/#">Stats</a>
            </li>
          </ul>

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
        <div className={styles.buttons}>
          <Button
            styleName="normal"
            className={styles.button__connectWallet}
            textClassName={styles.button__connectWalletText}
          >
            Connect wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
