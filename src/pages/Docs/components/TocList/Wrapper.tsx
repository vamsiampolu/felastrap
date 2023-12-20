import { useFela } from "react-fela";
import { DivProps } from "../../../../components/common";

const collapseRule = ({ isOpen = false }) =>
  isOpen
    ? {
        display: isOpen ? "block" : "none",
      }
    : {};

export const Wrapper = ({
  className = "",
  isOpen = false,
  children,
}: DivProps & { isOpen?: boolean }) => {
  const { css } = useFela({ isOpen });
  return (
    <div
      className={`${css(collapseRule)} bd-toc-collapse ${className}`.trim()}
      id="tocContents"
    >
      <nav className={css({ fontSize: "0.875em" })} id="TableOfContents">
        {children}
      </nav>
    </div>
  );
};
