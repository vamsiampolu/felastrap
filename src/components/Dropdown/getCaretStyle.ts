import { CSSProperties } from "react";
import { DropdownDirection } from "../common";

const getBtnStyle = (direction: DropdownDirection): CSSProperties => {
  if (direction === "start" || direction === "end") {
    return { position: "relative" };
  }

  return {};
};

const getCaretStyle = (direction: DropdownDirection): CSSProperties => {
  if (direction === "start") {
    return {
      position: "absolute",
      top: "36%",
      left: "2%",
      marginLeft: "1px",
    };
  }

  if (direction === "end") {
    return {
      position: "absolute",
      top: "36%",
      right: "2%",
      marginRight: "1px",
    };
  }

  return {};
};

export { getCaretStyle, getBtnStyle };
