import React from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

type ButtonStyleType = "normal" | "outline";
type ButtonProps = {
  className?: string;
  textClassName?: string;
  styleName?: ButtonStyleType;
  children: React.JSX.Element;
};

const Button: React.FC<ButtonProps> = ({
  className,
  textClassName,
  styleName = "normal",
  children,
}) => {
  return (
    <button className={clsx(styles.button, {
      [styles.buttonOutline]: styleName === 'outline',
    }, className)}>
      <span className={clsx(styles.button__text, textClassName)}>
        {children}
      </span>
    </button>
  );
};

export default Button;
