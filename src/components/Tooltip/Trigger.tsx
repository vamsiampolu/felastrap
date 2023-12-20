import { ForwardedRef, forwardRef } from "react";
import type { DivProps } from "../common";

export type TriggerComponentProps = DivProps;
export const TriggerComponent = (
  { children, ...props }: TriggerComponentProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div data-testid="tooltip-trigger" ref={ref} {...props}>
      {children}
    </div>
  );
};

export const Trigger = forwardRef(TriggerComponent);
