import { useFela } from "react-fela";
import { StyleProps } from "../common";

const backgroundImages = {
  next: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`,
  prev: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")`,
};

export type IconName = "next" | "prev";

const rule = ({ name }: StyleProps<{ name: IconName }>) => {
  return {
    display: "inline-block",
    width: "2rem",
    height: "2rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "100% 100%",
    backgroundImage: backgroundImages[name as IconName],
  };
};

export const Icon = ({
  className = "",
  label,
  name,
}: {
  name: IconName;
  label: string;
  className?: string;
}) => {
  const { css } = useFela({ name });
  const cx = `${css(rule)} ${className} carousel-control-${name}-icon`.trim();

  return (
    <>
      <span
        data-testid="carousel-icon"
        className={cx}
        aria-hidden="true"
      ></span>
      <span style={{ visibility: "hidden" }} className="visually-hidden">
        {label}
      </span>
    </>
  );
};
