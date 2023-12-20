import { useFela } from "react-fela";

export const Divider = ({ divider = "/" }: { divider?: string }) => {
  const { css } = useFela();
  const className = css({
    float: "left",
    paddingRight: "0.5rem",
    color: "rgba(33, 37, 41, 0.75)",
  });
  return (
    <span
      data-testid="breadcrumb-divider"
      aria-hidden={true}
      className={className}
    >
      {divider}
    </span>
  );
};
