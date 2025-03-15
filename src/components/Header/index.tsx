import React from "react";
import clsx from "clsx";

import Button from "@components/Button";

import styles from "./header.module.scss";

import Logo from "@assets/images/logo.svg";
import LogoText from "@assets/images/logo-text.svg";
import MenuIcon from "@assets/icons/menu-icon.svg";
import MenuCloseIcon from "@assets/icons/menu-close-icon.svg";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram-icon.svg";
import { ReactComponent as LinkedinIcon} from "@assets/icons/linkedin-icon.svg";
import { ReactComponent as FacebookIcon} from "@assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon} from "@assets/icons/twitter-icon.svg";


type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const toggleHeader = () => setIsOpen((value) => !value);

  return (
    <div className={clsx(styles.header, { [styles.isOpen]: isOpen })}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <a href="#" className={styles.logo__link}>
            <img src={Logo} className={styles.logo__image} />
            <img src={LogoText} className={styles.logo__imageMobile} />
          </a>

          <button className={styles.header__switchMenu} onClick={toggleHeader}>
            <img src={!isOpen ? MenuIcon : MenuCloseIcon} />
          </button>
        </div>
        <div className={styles.header__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__listItem}>
              <a href="#">Discover</a>
            </li>
            <li className={styles.menu__listItem}>
              <a href="#">Creators</a>
            </li>
            <li className={styles.menu__listItem}>
              <a href="#">Sell</a>
            </li>
            <li className={styles.menu__listItem}>
              <a href="#">Stats</a>
            </li>
          </ul>

          <ul className={styles.menu__socials}>
            <li className={styles.instagram}>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li className={styles.linkedin}>
              <a href="#">
                <LinkedinIcon />
              </a>
            </li>
            <li className={styles.facebook}>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li className={styles.twitter}>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
          </ul>
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
