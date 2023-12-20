import type { IStyle } from "fela";
import { useFela } from "react-fela";

const iconRule = ({ isOpen = false }) => {
  const style: IStyle = {
    flexShrink: 0,
    width: "1.25rem",
    height: "1.25rem",
    marginLeft: "auto",
    backgroundImage: 'url("/chevron-down.svg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.25rem",
    transition: "transform 0.2s ease-in-out",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  };

  if (isOpen) {
    style.transform = "rotate(-180deg)";
  }

  return style;
};

export const ToggleIcon = ({ isOpen = false }: { isOpen?: boolean }) => {
  const { css } = useFela({ isOpen });
  const cx = `${css(iconRule)} accordion-toggle-icon`;
  return <div data-testid="accordion-toggle-icon" className={cx} />;
};
