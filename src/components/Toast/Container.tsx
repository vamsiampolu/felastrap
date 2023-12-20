import { CSSProperties } from "fela";
import { ReactNode } from "react";
import { useFela } from "react-fela";

export type ToastPlacement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "middle-left"
  | "middle-center"
  | "middle-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type PlacementObj = {
  verical: "top" | "middle" | "bottom";
  horizontal: "left" | "center" | "right";
};

export type ToastContainerProps = {
  placement?: ToastPlacement;
  className?: string;
  style: CSSProperties;
  children: ReactNode;
};

const getPlacement = (str: ToastPlacement) => {
  const [vertical, horizontal] = str.split("-");
  return { vertical, horizontal };
};

const rule = ({ vertical = "bottom", horizontal = "right" }) => {
  const style: CSSProperties = {
    position: "absolute",
  };
  switch (vertical) {
    case "top": {
      style.top = 0;
      break;
    }
    case "middle": {
      style.top = "50%";
      break;
    }

    case "bottom": {
      style.bottom = 0;
      break;
    }
  }

  switch (horizontal) {
    case "left": {
      style.left = 0;
      break;
    }

    case "center": {
      style.left = "50%";
      break;
    }

    case "right": {
      style.right = 0;
      break;
    }
  }

  if (vertical === "middle" && horizontal !== "center") {
    style.transform = "translateY(-50%)";
  }

  if (horizontal === "center" && vertical !== "middle") {
    style.transform = "translateX(-50%)";
  }

  if (horizontal === "center" && vertical === "middle") {
    style.transform = "translate(-50%,-50%)";
  }

  return style;
};

export const ToastContainer = ({
  className = "",
  children,
  style,
  placement = "bottom-right",
}: ToastContainerProps) => {
  const { vertical, horizontal } = getPlacement(placement);
  const { css } = useFela({ vertical, horizontal });
  const cx = `${css(rule)} toast-container ${className}`.trim();
  return (
    <div data-testid="toast-container" style={style} className={cx}>
      {children}
    </div>
  );
};
