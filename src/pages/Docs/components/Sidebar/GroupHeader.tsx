import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type GroupHeaderProps = ComponentPropsWithoutRef<"strong">;

const groupHeaderRule = () => ({
  alignItems: "center",
  color: "#000",
  display: "flex",
  fontWeight: 600,
  width: "100%",
});

export const GroupHeader = ({ className = "", children }: GroupHeaderProps) => {
  const { css } = useFela();
  const cx = `${css(groupHeaderRule)} bd-links-heading ${className}`.trim();
  return <strong className={cx}>{children}</strong>;
};
