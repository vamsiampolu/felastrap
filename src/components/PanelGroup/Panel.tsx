import { PropsWithChildren } from "react";
import { useFela } from "react-fela";
import { CollapseContext } from "../Collapse/CollapseContext";
import { useCollapse } from "../Collapse/useCollapse";
import { StyleProps } from "../common";
import { BodyContainer } from "./Body";
import { ToggleHeaderContainer } from "./Header";

export type PanelProps = PropsWithChildren<{
  className?: string;
  first?: boolean;
  last?: boolean;
  isOpen: boolean;
  label: string;
  flush?: boolean;
  setActive: () => void;
}>;

const rule = () => ({
  color: "#212529",
  backgroundColor: "#fff",
  border: "1px solid #dee2e6",
});

const firstRule = ({ first = false }) => {
  return first
    ? {
        borderTopWidth: "1px",
        borderTopLeftRadius: "0.375rem",
        borderTopRightRadius: "0.375rem",
      }
    : {};
};

const flushFirstRule = ({ flush, first }: StyleProps<PanelProps>) => {
  if (flush && first) {
    return {
      borderRight: 0,
      borderLeft: 0,
      borderTop: 0,
      borderRadius: 0,
    };
  }

  return {};
};

const flushLastRule = ({ flush, last }: StyleProps<PanelProps>) => {
  if (flush && last) {
    return {
      borderRight: 0,
      borderLeft: 0,
      borderBottom: 0,
      borderRadius: 0,
    };
  }

  return {};
};

const lastBodyRule = ({ last = false }) =>
  last
    ? {
        borderBottomRightRadius: "0.375rem",
        borderBottomLeftRadius: "0.375rem",
      }
    : {};

const lastRule = ({ last = false }) =>
  last
    ? {
        borderTopLeftRadius: "0.375rem",
        borderTopRightRadius: "0.375rem",
      }
    : {};

export const Panel = ({
  className = "",
  first = false,
  last = false,
  flush = false,
  isOpen,
  setActive = () => undefined,
  label,
  children,
}: PanelProps) => {
  const value = useCollapse({
    collapsed: !isOpen,
  });

  const { css } = useFela({ first, last, isOpen, flush });
  const cx = `${css([rule, firstRule, lastRule])} panel ${className}`;
  const bodyClassName = css([lastBodyRule, flushFirstRule, flushLastRule]);

  return (
    <CollapseContext.Provider value={value}>
      <div data-testid="panel-group-panel" className={cx}>
        <ToggleHeaderContainer setActive={setActive} last={last} first={first}>
          {label}
        </ToggleHeaderContainer>
        <BodyContainer className={bodyClassName}>{children}</BodyContainer>
      </div>
    </CollapseContext.Provider>
  );
};
