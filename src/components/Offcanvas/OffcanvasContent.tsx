import { CSSProperties, ForwardedRef, ReactNode, forwardRef } from "react";
import { DivProps, DynamicElement } from "../common";
import { OffcanvasPlacement, Wrapper } from "./Wrapper";
import { OffcanvasHeader } from "./Header";
import { OffcanvasBody } from "./Body";

export type OffcanvasContentProps = Omit<
  DivProps,
  "id" | "children" | "style"
> & {
  isOpen: boolean;
  style?: CSSProperties;
  titleId: string;
  title: ReactNode;
  id: string;
  onClose: () => void;
  body: ReactNode;
  placement?: OffcanvasPlacement;
  as?: DynamicElement;
  showCloseButton?: boolean;
  width?: CSSProperties["width"];
};

export const OffcanvasContentComponent = (
  {
    style = {},
    titleId,
    isOpen,
    id,
    onClose,
    title,
    body,
    placement = "start",
    as = "div",
    showCloseButton = true,
    ...props
  }: OffcanvasContentProps,
  ref: ForwardedRef<DynamicElement>,
) => {
  return (
    <Wrapper
      as={as}
      placement={placement}
      ref={ref}
      style={style}
      titleId={titleId}
      isOpen={isOpen}
      id={id}
      {...props}
    >
      <OffcanvasHeader
        style={style}
        showCloseButton={showCloseButton}
        onClose={onClose}
        isOpen={isOpen}
        title={title}
        titleId={titleId}
      />
      <OffcanvasBody style={style}>{body}</OffcanvasBody>
    </Wrapper>
  );
};

export const OffcanvasContent = forwardRef(OffcanvasContentComponent);
OffcanvasContent.displayName = "OffcanvasContent";
