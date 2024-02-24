import { useMemo } from "react";
import "./Button.scss";

export enum ButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}

type ButtonProps = {
  size: ButtonSize;
  outlined?: boolean;
  title: string;
  link?: string;
};

const Button = ({ size, outlined = false, title, link }: ButtonProps) => {

  const sizeClass = useMemo(() => {
    if (size === ButtonSize.LARGE) {
      return "xl-button-large";
    } else if (size === ButtonSize.MEDIUM) {
      return "xl-button-medium"
    } else {
      return "xl-button-small";
    }
  }, [size]);

  const outlinedClass = useMemo(() => {
    return outlined ? "xl-button-outlined" : "";
  }, [outlined]);

  return (
    (link && link.length > 0) ? (
      <a href={link} className={`xl-button ${sizeClass} ${outlinedClass}`}>
        {title}
      </a>
    ) : (
      <button className={`xl-button ${sizeClass} ${outlinedClass}`}>
        {title}
      </button>
    )
  )
};

export default Button;
