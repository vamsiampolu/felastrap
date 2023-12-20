import { useFela } from "react-fela";
import { DivProps } from "../common";

const rule = () => ({
  backgroundColor: "rgba(112.520718,44.062154,249.437846, 0.15)",
  border: "1px solid rgba(112.520718,44.062154,249.437846, 0.3)",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  height: "4rem",
});

export const Box = ({ className = "", children, ...props }: DivProps) => {
  const { css } = useFela();
  return (
    <div
      data-testid="box"
      className={`${css(rule)} box ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
