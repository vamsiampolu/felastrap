import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import { StyleProps, Theme } from "../common";

export type CustomProps = Partial<{
  center: boolean;
  figure: boolean;
  fluid: boolean;
  rounded: boolean;
  thumbnail: boolean;
}>;

export type ImageProps = ComponentPropsWithoutRef<"img"> & CustomProps;

const figureRule = ({ figure }: StyleProps<ImageProps>) =>
  figure
    ? {
        marginBottom: "0.5rem",
        lineHeight: 1,
      }
    : {};

const fluidRule = ({ fluid }: StyleProps<ImageProps>) =>
  fluid
    ? {
        maxWidth: "100%",
        height: "auto",
      }
    : {};

const thumbnailRule = ({ thumbnail }: StyleProps<ImageProps>) =>
  thumbnail
    ? {
        padding: "0.25rem",
        backgroundColor: "#fff",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#dee2e6",
        borderRadius: "0.375rem",
        maxWidth: "100%",
        height: "auto",
      }
    : {};

const centerRule = ({ center }: StyleProps<ImageProps>) => {
  if (center) {
    return {
      display: "block",
      marginRight: "auto",
      marginLeft: "auto",
    };
  }

  return {};
};

const roundedRule = ({ rounded }: StyleProps<ImageProps>) => {
  return rounded ? { borderRadius: "0.375rem" } : {};
};

export const Image = ({
  className = "",
  center = false,
  fluid = false,
  figure = false,
  rounded = false,
  thumbnail = false,
  ...other
}: ImageProps) => {
  const { css } = useFela<Theme, ImageProps>({
    center,
    thumbnail,
    fluid,
    figure,
    rounded,
  });
  const cx = `${css([
    fluidRule,
    thumbnailRule,
    centerRule,
    roundedRule,
    figureRule,
  ])} ${className || ""}`.trim();

  return <img data-testid="image" className={cx} {...other} />;
};
