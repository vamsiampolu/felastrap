import { useFela } from "react-fela";
import { Button, type ButtonProps } from "../Button";
import { Ref, forwardRef } from "react";

const rule = () => ({
  position: "relative",
  zIndex: 2,
  ":focus": {
    zIndex: 5,
  },
});

const toggleRule = () => ({
  whiteSpace: "nowrap",
});

const groupSegmentRule = () => ({
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  marginLeft: "-1px",
});

const afterRule = () => ({
  display: "inline-block",
  marginLeft: 0,
  verticalAlign: "0.255em",
  borderTop: "0.3em solid",
  borderRight: "0.3em solid transparent",
  borderBottom: 0,
  borderLeft: "0.3em solid transparent",
});

const visuallyHiddenRule = () => ({
  width: "1px !important",
  height: "1px !important",
  padding: "0 !important",
  margin: "-1px !important",
  overflow: "hidden !important",
  clip: "rect(0, 0, 0, 0) !important",
  whiteSpace: "nowrap !important",
  border: "0 !important",
  position: "absolute !important",
});

const splitRule = () => ({
  paddingRight: "0.5625rem",
  paddingLeft: "0..5625rem",
});

export type SegmentProps = Omit<
  ButtonProps<"button">,
  "outline" | "variant" | "children"
>;

export const SegmentComponent = (
  { className = "", ...props }: SegmentProps,
  ref: Ref<HTMLButtonElement>,
) => {
  const { css } = useFela();
  const cx = `${css([
    rule,
    toggleRule,
    groupSegmentRule,
    splitRule,
  ])} segment ${className}`.trim();
  const visuallyHiddenCx = `${css(visuallyHiddenRule)} visually-hidden`;
  const afterCx = `${css(afterRule)} segment-after`;
  return (
    <Button
      data-testid="segment"
      ref={ref}
      outline
      variant="secondary"
      className={cx}
      {...props}
    >
      <span data-testid="segment-visually-hidden" className={visuallyHiddenCx}>
        Toggle Dropdown
      </span>
      <span data-testid="segment-after" className={afterCx} />
    </Button>
  );
};

export const Segment = forwardRef(SegmentComponent);
