import { StyleProps } from "../common";
import { CardImageProps } from "./Image";

const padding = {
  paddingleft: "1rem",
  paddingRight: "1rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const getBorderRadius = ({
  top,
  bottom,
  overlay,
}: CardImageProps & { overlay?: boolean }) => {
  if (top) {
    return {
      borderTopLeftRadius: "calc(0.375rem - 1px)",
      borderTopRightRadius: "calc(0.375rem - 1px)",
    };
  }

  if (bottom) {
    return {
      borderBottomRightRadius: "calc(0.375rem - 1px)",
      borderBottomLeftRadius: "calc(0.375rem - 1px)",
    };
  }

  if (overlay) {
    return {
      borderTopLeftRadius: "calc(0.375rem - 1px)",
      borderTopRightRadius: "calc(0.375rem - 1px)",
      borderBottomRightRadius: "calc(0.375rem - 1px)",
      borderBottomLeftRadius: "calc(0.375rem - 1px)",
    };
  }

  return {};
};

const overlayBase = ({ overlay }: StyleProps<{ overlay: boolean }>) =>
  overlay
    ? {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
    : {};

const overlayLayoutRule = ({ overlay }: StyleProps<{ overlay: boolean }>) =>
  overlay
    ? {
        ...getBorderRadius({ overlay }),
        ...padding,
      }
    : {};

export { getBorderRadius, overlayBase, overlayLayoutRule };
