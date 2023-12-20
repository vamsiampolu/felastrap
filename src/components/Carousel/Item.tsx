import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import { Caption } from "./Caption";
import { IStyle } from "fela";
import { StyleProps } from "../common";

export type ItemProps = ComponentPropsWithoutRef<"img"> & {
  active?: boolean;
  title?: string;
  description?: string;
  crossFade?: boolean;
};

const itemRule = ({ active }: StyleProps<ItemProps>) => ({
  position: "relative",
  display: active ? "block" : "none",
  float: "left",
  width: "100%",
  marginRight: "-100%",
  backfaceVisibility: "hidden",
  transition: "transform 0.6s ease-in-out",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
});

const crossFadeRule = ({ active, crossFade }: StyleProps<ItemProps>) => {
  const style: IStyle = {
    opacity: 0,
    transitionProperty: "opacity",
    transition: "opacity 0s 0.6s",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  };

  if (active) {
    style.zIndex = 1;
    style.opacity = 1;
  }

  return crossFade ? style : {};
};

export const Item = ({
  className = "",
  active = false,
  crossFade = false,
  src,
  alt,
  title,
  description,
  ...props
}: ItemProps) => {
  const { css } = useFela({ active, crossFade });
  const cx = `${css([itemRule, crossFadeRule])} ${className}`.trim();
  return (
    <div data-testid="carousel-item" className={cx}>
      <img
        data-testid="carousel-item-image"
        style={{ width: "100%", display: "block" }}
        src={src}
        alt={alt}
        {...props}
      />
      {title && description && (
        <Caption title={title} description={description} />
      )}
    </div>
  );
};
