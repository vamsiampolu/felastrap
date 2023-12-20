import type { NavVariant } from "../common";

export type Opts = { variant: NavVariant };

const isTabs = ({ variant = "default" }: Opts) => variant === "tabs";
const isPills = ({ variant = "default" }: Opts) => variant === "pills";
const isUnderline = ({ variant = "default" }: Opts) => variant === "underline";
const isVertical = ({ variant = "vertical" }: Opts) => variant === "vertical";

export { isTabs, isPills, isUnderline, isVertical };
