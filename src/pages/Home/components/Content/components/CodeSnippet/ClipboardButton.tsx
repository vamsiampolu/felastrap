import { useFela } from "react-fela";
import { DivProps } from "../../../../../../components/common";
import { ComponentPropsWithoutRef } from "react";

const wrapperRule = () => ({
  display: "block",
  position: "relative",
  float: "right",
  color: "#212529",
});

const btnRule = () => ({
  backgroundColor: "transparent",
  border: 0,
  borderRadius: "0.25rem",
  cursor: "pointer",
  display: "block",
  lineHeight: 1,
  marginRight: "0.75rem",
  marginTop: "1.25rem",
  padding: "0.5em",
  position: "absolute",
  right: "0",
  top: "-.625rem",
  zIndex: 2,
});

const svgRule = () => ({
  width: "1em",
  height: "1em",
  verticalAlign: "-0.125em",
  fill: "currentcolor",
});

const Wrapper = ({ className = "", children }: DivProps) => {
  const { css } = useFela();
  const wrapperClassName = `${css(
    wrapperRule,
  )} bd-clipboard ${className}`.trim();
  return <div className={wrapperClassName}>{children}</div>;
};

const Button = ({
  className = "",
  children,
}: ComponentPropsWithoutRef<"button">) => {
  const { css } = useFela();
  const btnClassName = `${css(btnRule)} btn-clipboard ${className}`.trim();
  return (
    <button type="button" className={btnClassName}>
      {children}
    </button>
  );
};

const Icon = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const svgClassName = `${css(svgRule)} btn-clipboard-icon ${className}`.trim();
  return (
    <svg className={svgClassName} role="img" id="clipboard" viewBox="0 0 16 16">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
    </svg>
  );
};

export const ClipboardButton = ({ className = "" }: { className?: string }) => {
  return (
    <Wrapper className={className}>
      {" "}
      <Button>
        {" "}
        <Icon />{" "}
      </Button>{" "}
    </Wrapper>
  );
};
