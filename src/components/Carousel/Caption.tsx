import { useFela } from "react-fela";
import { Breakpoints, mediaQueryByName } from "../Flex/mediaQuery";

const rule = () => ({
  position: "absolute",
  right: "15%",
  bottom: "1.25rem",
  left: "15%",
  paddingTop: "1.25rem",
  paddingBottom: "1.25rem",
  color: "#fff",
  textAlign: "center",
  [mediaQueryByName["sm" as Breakpoints]]: {
    display: "none",
  },
  [mediaQueryByName["md" as Breakpoints]]: {
    display: "block",
  },
});

export type CaptionProps = {
  className?: string;
  title: string;
  description: string;
};

export const Caption = ({
  className = "",
  title,
  description,
}: CaptionProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} carousel-caption ${className}`.trim();
  return (
    <div data-testid="carousel-caption" className={cx}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
