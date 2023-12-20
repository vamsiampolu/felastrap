import { useState, ReactNode } from "react";
import { Panel } from "./Panel";
import { DivProps } from "../common";

export type PanelGroupItem = {
  label: string;
  content: ReactNode;
};
export type PanelGroupProps = DivProps & {
  flush?: boolean;
  items: PanelGroupItem[];
};

export const PanelGroup = ({
  className = "",
  flush = false,
  items = [],
}: PanelGroupProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      data-testid="panel-group"
      className={`panel-group ${className}`.trim()}
    >
      {items.map((item, index) => {
        const { label, content } = item;
        return (
          <Panel
            flush={flush}
            setActive={() => setActiveIndex(index)}
            isOpen={activeIndex === index}
            first={index === 0}
            last={index === items.length - 1}
            label={label}
            key={`panel-item-${index}`}
          >
            {content}
          </Panel>
        );
      })}
    </div>
  );
};
