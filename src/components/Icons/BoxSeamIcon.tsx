import { useFela } from "react-fela";
import { StyleProps, Variant } from "../common";
import { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg"> & { variant: Variant };

const rule = ({ variant }: StyleProps<{ variant: Variant }>) => ({
  width: "1em",
  height: "1em",
  verticalAlign: "-.125em",
  fill: "currentcolor",
  color: variant === "secondary" ? "rgba(33, 37, 41, 0.75)" : "#212529",
  "@media (min-width: 1200px)": {
    fontSize: "2rem !important",
  },
});

export const BoxSeamIcon = ({
  variant = "default",
  className,
  ...props
}: IconProps) => {
  const { css } = useFela({ variant });
  const cx = `${css(rule)} box-seam-icon ${className ?? ""}`.trim();
  return (
    <svg
      width={16}
      height={16}
      className={cx}
      id="box-seam"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"></path>
    </svg>
  );
};
