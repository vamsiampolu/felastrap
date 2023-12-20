import { CSSCustomPrimitive, CSSProperties, IStyle } from "fela";
import { ElementType, forwardRef } from "react";
import { useFela } from "react-fela";
import {
  PolymorphicComponentPropsWithoutRef,
  PolymorphicRef,
} from "../../polymorphicComponentProps";
import { StyleProps, Theme } from "../common";

export type OffcanvasPlacement = "start" | "top" | "end" | "bottom";
export type CustomWrapperProps = {
  id: string;
  titleId: string;
  width?: CSSProperties["width"];
  isOpen?: boolean;
  placement?: OffcanvasPlacement;
};

type RuleProps = Omit<CustomWrapperProps, "id" | "titleId">;

export type WrapperProps<T extends ElementType> =
  PolymorphicComponentPropsWithoutRef<T, CustomWrapperProps>;

export type RuleResult = IStyle | CSSCustomPrimitive;

const rule = (): RuleResult => ({
  position: "fixed",
  bottom: 0,
  zIndex: 1045,
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  color: "#212529",
  visibility: "hidden",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  outline: 0,
  transition: "transform 0.3s ease-in-out",
});

const startRule = ({ placement, width }: StyleProps<RuleProps>) =>
  placement === "start"
    ? {
        top: 0,
        left: 0,
        width: width ? width : "400px",
        borderRight: "1px solid rgba(0, 0, 0, 0.175)",
        transform: "translateX(-100%)",
      }
    : {};

const endRule = ({ placement, width }: StyleProps<RuleProps>): RuleResult =>
  placement === "end"
    ? {
        top: 0,
        right: 0,
        width: width ? width : "400px",
        borderLeft: "1px solid rgba(0, 0, 0, 0.175)",
        transform: "translateX(100%)",
      }
    : {};

const topRule = ({ placement }: StyleProps<RuleProps>): RuleResult =>
  placement === "top"
    ? {
        top: 0,
        right: 0,
        left: 0,
        height: "auto",
        maxHeight: "100%",
        borderBottom: "1px solid rgba(0, 0, 0, 0.175)",
        transform: "translateY(-100%)",
      }
    : {};

const bottomRule = ({ placement }: StyleProps<RuleProps>): RuleResult =>
  placement === "bottom"
    ? {
        right: 0,
        left: 0,
        height: "auto",
        maxHeight: "100%",
        borderTop: "1px solid rgba(0, 0, 0, 0.175)",
        transform: "translateY(100%)",
      }
    : {};

const showStartRule = ({
  placement,
  isOpen,
}: StyleProps<RuleProps>): RuleResult =>
  isOpen && placement === "start"
    ? {
        transform: "none",
        visibility: "visible",
      }
    : {
        transform: "translateX(-100%)",
        visibility: "hidden",
      };

const showEndRule = ({
  placement,
  isOpen,
}: StyleProps<RuleProps>): RuleResult =>
  isOpen && placement === "end"
    ? {
        transform: "none",
        visibility: "visible",
      }
    : {
        transform: "translateX(100%)",
        visibility: "hidden",
      };

const showTopRule = ({
  isOpen,
  placement,
}: StyleProps<RuleProps>): RuleResult =>
  isOpen && placement === "top"
    ? {
        transform: "none",
        visibility: "visible",
      }
    : {
        transform: "translateY(-100%)",
        visibility: "hidden",
      };

const showBottomRule = ({
  isOpen,
  placement,
}: StyleProps<RuleProps>): RuleResult =>
  isOpen && placement === "bottom"
    ? {
        transform: "none",
        visibility: "visible",
      }
    : {
        transform: "translateY(100%)",
        visibility: "hidden",
      };

const showPlacementRule = ({
  isOpen,
  placement,
}: StyleProps<RuleProps>): RuleResult => {
  switch (placement) {
    case "bottom": {
      return showBottomRule({
        isOpen,
        placement,
      } as StyleProps<RuleProps>);
    }

    case "end": {
      return showEndRule({
        isOpen,
        placement,
      } as StyleProps<RuleProps>);
    }

    case "top": {
      return showTopRule({ isOpen, placement } as StyleProps<RuleProps>);
    }

    case "start": {
      return showStartRule({
        isOpen,
        placement,
      } as StyleProps<RuleProps>);
    }
  }

  return {};
};

export const WrapperComponent = <T extends ElementType = "div">(
  {
    as,
    id,
    className,
    isOpen = false,
    titleId,
    children,
    placement = "start",
    width = undefined,
    ...props
  }: WrapperProps<T>,
  ref: PolymorphicRef<T>,
) => {
  const { css } = useFela<Theme, RuleProps>({ isOpen, placement, width });
  const cx = `${css([
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rule as any,
    startRule,
    endRule,
    topRule,
    bottomRule,
    showPlacementRule,
  ])} offcanvas offcanvas-${placement} ${className || ""}`;
  const Component = as || "div";
  return (
    <Component
      data-testid="offcanvas-wrapper"
      ref={ref}
      className={cx}
      tabIndex={-1}
      id={id}
      aria-labelledby={titleId}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Wrapper = forwardRef(WrapperComponent);
Wrapper.displayName = "Wrapper";
