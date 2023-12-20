import { FloatingArrow, FloatingArrowProps } from "@floating-ui/react";
import { Ref, forwardRef } from "react";

export const ArrowComponent = (
  { context, width, height }: FloatingArrowProps,
  ref: Ref<SVGSVGElement>,
) => {
  return (
    <FloatingArrow
      data-testid="tooltip-arrow"
      ref={ref}
      context={context}
      width={width}
      height={height}
    />
  );
};

export const Arrow = forwardRef(ArrowComponent);
