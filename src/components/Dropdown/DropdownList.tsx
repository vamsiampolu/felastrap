import {
  FloatingFocusManager,
  FloatingList,
  useInteractions,
  type FloatingContext,
  type ExtendedRefs,
} from "@floating-ui/react";
import { DropdownContext, type DropdownContextValue } from "./DropdownContext";
import { type DivProps } from "../common";
import {
  ForwardedRef,
  MutableRefObject,
  PropsWithChildren,
  forwardRef,
} from "react";
import { DropdownDirection } from "../common";
import { useFela } from "react-fela";
import { transformByDirection } from "./mappings";

export type Element = HTMLElement | null;
export type Elements = Element[];

export type Label = string | null;
export type Labels = Label[];
export type Refs = ExtendedRefs<Elements>;

export type GetFloatingProps = ReturnType<
  typeof useInteractions
>["getFloatingProps"];
export type DropdownListProps = PropsWithChildren<{
  context: FloatingContext;
  elementsRef: MutableRefObject<Elements>;
  getFloatingProps: GetFloatingProps;
  isOpen: boolean;
  labelsRef: MutableRefObject<Labels>;
  nav: boolean;
  direction: DropdownDirection;
  style: DivProps["style"];
  selectedContext: DropdownContextValue;
}>;

const base = () => {
  return {
    backgroundClip: "padding-box",
    backgroundColor: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.175)",
    borderRadius: "0.375rem",
    color: "#212529",
    display: "block",
    fontSize: "1rem",
    left: 0,
    listStyle: "none",
    margin: 0,
    marginTop: "0.125rem",
    minWidth: "10rem",
    padding: "0.5rem 0.125rem",
    position: "absolute",
    textAlign: "left",
    top: "-2.5rem",
    width: "auto",
    zIndex: 1000,
  };
};

const navRule = ({ nav = false }) => {
  if (!nav) {
    return {};
  }

  return {
    marginTop: `calc(-1 * 1px)`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  };
};

const positioning = ({ direction = "down" }) => {
  return {
    position: "absolute",
    inset: "0px auto auto 0px",
    margin: "0px",
    transform: transformByDirection[direction as DropdownDirection],
  };
};

export const DropdownListComponent = (
  {
    children,
    context,
    elementsRef,
    getFloatingProps,
    isOpen,
    labelsRef,
    direction,
    nav = false,
    style,
    selectedContext,
  }: DropdownListProps,
  ref: ForwardedRef<HTMLUListElement>,
) => {
  const { css } = useFela({ nav, direction });
  const floatingRule = () => style!;
  const className = `${css([base, positioning, navRule, floatingRule])}`;

  return (
    <DropdownContext.Provider value={selectedContext}>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <ul
            data-testid="dropdown-list"
            className={className}
            ref={ref}
            {...getFloatingProps()}
          >
            <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
              {children}
            </FloatingList>
          </ul>
        </FloatingFocusManager>
      )}
    </DropdownContext.Provider>
  );
};

export const DropdownList = forwardRef(DropdownListComponent);
