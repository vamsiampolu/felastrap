import { useFela } from "react-fela";
import type { ImageProps, StyleProps, Theme } from "../common";
import { getBorderRadius } from "./imageStyle";

export type CardImageProps = ImageProps &
  Partial<{
    top: boolean;
    bottom: boolean;
  }>;

const base = () => ({ width: "100%" });
const topRule = ({ top }: StyleProps<CardImageProps>) =>
  top ? getBorderRadius({ top }) : {};
const bottomRule = ({ bottom }: StyleProps<CardImageProps>) =>
  bottom ? getBorderRadius({ bottom }) : {};

export const CardImage = ({
  className = "",
  top,
  bottom,
  ...other
}: CardImageProps) => {
  const { css } = useFela<Theme, CardImageProps>({ top, bottom });
  const cx = `${css([base, topRule, bottomRule])} ${className || ""}`.trim();
  return <img data-testid="card-image" className={cx} {...other} />;
};
