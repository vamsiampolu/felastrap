import { useFela } from "react-fela";
import { Divider } from "./Divider";

const rule = () => ({
  color: "rgba(33, 37, 41, 0.75)",
  paddingLeft: "0.5rem",
});

export type ActiveItemProps = { label: string; divider?: string };

export const ActiveItem = ({ label, divider = "/" }: ActiveItemProps) => {
  const { css } = useFela();
  const className = `${css(rule)} breadcrumb-active-item`;
  return (
    <li
      className={className}
      data-testid="breadcrumb-active-item"
      aria-current="page"
    >
      <Divider divider={divider} />
      {label}
    </li>
  );
};
