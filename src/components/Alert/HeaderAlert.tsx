import { Alert, type AlertProps } from "./Alert";
import { useFela } from "react-fela";
import { Portal } from "../Portal";
import { Sticky } from "./Sticky";

export const HeaderAlert = ({
  className = "",
  children,
  dismissable = false,
  onDismiss = () => undefined,
  isOpen = false,
  variant = "default",
  ...other
}: AlertProps) => {
  const style = {
    width: "90%",
    maxWidth: "90%",
    display: "block",
    position: "absolute",
    top: "4px",
    paddingTop: "0.4rem",
    marginTop: "-0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  } as CSSStyleDeclaration;
  if (!isOpen) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { css } = useFela();
  const cx = css({ left: 0, top: 0, right: "94%" });

  return (
    <Portal wrapperId="header-alert" style={style}>
      <Sticky data-testid="sticky-wrapper" className={className} {...other}>
        <Alert
          data-testid="header-alert"
          className={cx}
          onDismiss={onDismiss}
          isOpen={isOpen}
          dismissable={dismissable}
          variant={variant}
        >
          {children}
        </Alert>
      </Sticky>
    </Portal>
  );
};
