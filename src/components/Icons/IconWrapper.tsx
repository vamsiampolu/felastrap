import { useFela } from "react-fela";
import { DivProps } from "../common";

const iconWrapperRule = () => ({
  padding: "1rem",
  color: "rgba(112.520718,44.062154,249.437846, 1)",
  backgroundColor: "rgba(112.520718, 44.062154,249.437846, 0.1)",
  backgroundBlendMode: "multiple",
  borderRadius: "1rem",
  mixBlendMode: "darken",
  marginBottom: "1rem",
  display: "inline-block",
});

export const IconWrapper = ({ children }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(iconWrapperRule)} masthead-followup-icon`;
  return (
    <div data-testid="icon-wrapper" className={cx}>
      {children}
    </div>
  );
};
