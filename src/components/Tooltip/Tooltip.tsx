import { PropsWithChildren } from "react";
import { Trigger } from "./Trigger";
import { Content } from "./Content";
import { useTooltip, type UseTooltipOptions } from "./useTooltip";
import { Arrow } from "./Arrow";

export type TooltipProps = PropsWithChildren<
  Partial<UseTooltipOptions> & { tooltipText: string }
>;

export const Tooltip = ({
  initialOpen = false,
  placement = "top",
  tooltipText = "",
  children,
}: TooltipProps) => {
  const tooltip = useTooltip({ initialOpen, placement });
  return (
    <>
      <Trigger ref={tooltip.refs.setReference} {...tooltip.getReferenceProps()}>
        {children}
      </Trigger>
      <Content
        open={tooltip.open ?? true}
        ref={tooltip.refs.setFloating}
        style={tooltip.floatingStyles}
        transitionStyles={tooltip.styles}
        tooltip={tooltipText}
        {...tooltip.getFloatingProps()}
      >
        <Arrow
          context={tooltip.context}
          ref={tooltip.arrowRef}
          width={tooltip.arrowWidth}
          height={tooltip.arrowHeight}
        />
      </Content>
    </>
  );
};
