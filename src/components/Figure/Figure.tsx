import { ReactNode } from "react";
import { useFela } from "react-fela";
import { Image, type ImageProps } from "../Image/Image";
import { Caption } from "./Caption";

export type FigureProps = Omit<ImageProps, "figure"> & { caption: ReactNode };
export const Figure = ({
  caption,
  className = "",
  center = false,
  fluid = false,
  rounded = false,
  thumbnail = false,
  ...props
}: FigureProps) => {
  const { css } = useFela();
  const cx = `${css({ display: "inline-block" })} figure ${className}`.trim();
  return (
    <figure data-testid="figure" className={cx}>
      <Image
        figure
        center={center}
        fluid={fluid}
        rounded={rounded}
        thumbnail={thumbnail}
        {...props}
      />
      <Caption>{caption}</Caption>
    </figure>
  );
};
