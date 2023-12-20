import { useFela } from "react-fela";
import { StyleProps } from "../common";

const rule = () => ({
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
});

const openRule = ({ isOpen }: StyleProps<{ isOpen: boolean }>) =>
  isOpen ? { transform: "rotate(-180deg)" } : {};

export const ToggleIcon = ({ isOpen = false }: { isOpen?: boolean }) => {
  const { css } = useFela({ isOpen });
  const cx = css([rule, openRule]);
  return <div data-testid="panel-group-toggle-icon" className={cx} />;
};
