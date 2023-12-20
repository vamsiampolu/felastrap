import { CSSProperties } from "fela";
import { useContext } from "react";
import { useFela } from "react-fela";
import { Portal } from "../Portal";
import { StyleProps, type DivProps } from "../common";
import { CollapseContext, CollapseContextValue } from "./CollapseContext";

export type CollapseContentProps = DivProps & { detached?: boolean };
type Height = CSSProperties["height"];

const rule = ({ height }: StyleProps<CollapseContextValue>) => ({
  overflow: "hidden",
  width: "auto",
  height: height as Height,
  transition: "height 0.35s ease",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
});

export const Content = ({
  id = "",
  className = "",
  detached = false,
  children,
  style = {},
}: CollapseContentProps) => {
  const { contentRef, height } = useContext(CollapseContext);
  const { css } = useFela({ height });

  const cx = `${css([rule])} collapse ${className}`;
  if (detached) {
    return (
      <Portal
        wrapperId={`wrapper-collapse-content-${id}`}
        style={style as CSSStyleDeclaration}
      >
        <div data-testid="collapse" className={cx}>
          <div data-testid="collapse-content" ref={contentRef} id={id}>
            <div data-testid="collapse-container" className="content-container">
              {children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }

  return (
    <div data-testid="collapse" className={cx}>
      <div data-testid="collapse-content" ref={contentRef} id={id}>
        <div data-testid="collapse-container" className="content-container">
          {children}
        </div>
      </div>
    </div>
  );
};
