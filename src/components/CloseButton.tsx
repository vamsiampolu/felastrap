import type { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import closeIcon from "/close-button.svg";
import { StyleProps, Theme } from "./common";

const close = () => {
  const borderRadius = {
    borderTopLeftRadius: "0.375rem",
    borderTopRightRadius: "0.375rem",
    borderBottomRightRadius: "0.375rem",
    borderBottomLeftRadius: "0.375rem",
  };

  return {
    ...borderRadius,
    borderColor: "rgb(0,0,0)",
    backgroundColor: "transparent",
    backgroundImage: `url(${closeIcon})`,
    backgroundPositionX: "center",
    backgroundOrigin: "padding-box",
    backgroundClip: "border-box",
    backgroundPositionY: "1em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    boxSizing: "content-box",
    border: 0,
    color: "#000",
    height: "1em",
    opacity: 0.5,
    paddingTop: "0.25em",
    paddingBottom: "0.25em",
    paddingLeft: "0.25em",
    paddingRight: "0.25em",
    width: "1em",
    ":focus": {
      boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
      opacity: 1,
      outline: 0,
    },
    ":disabled": {
      opacity: 0.25,
      pointerEvents: "none",
      userSelect: "none",
    },
  };
};

const alertRule = ({ alert }: StyleProps<CloseButtonProps>) => {
  return alert
    ? {
        paddingTop: "1.25rem",
        paddingBottom: "1.25rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 2,
      }
    : {};
};

const modalRule = ({ modal }: StyleProps<CloseButtonProps>) =>
  modal
    ? {
        padding: "0.5rem 0.5rem",
        margin: "-0.5rem -0.5rem -0.5rem auto",
      }
    : {};

export type CloseButtonProps = ComponentPropsWithoutRef<"button"> &
  Partial<{ alert?: boolean; modal?: boolean }>;

export const CloseButton = ({
  alert = false,
  modal = false,
  className = "",
  ...other
}: CloseButtonProps) => {
  const { css } = useFela<Theme, CloseButtonProps>({ alert, modal });
  const cx = `${css([
    close,
    alertRule,
    modalRule,
  ])} close-button ${className}`.trim();
  return (
    <button
      data-testid="close-button"
      className={cx}
      aria-label="Close"
      {...other}
    />
  );
};
