type DirectionProps = { dir?: "top" | "left" | "right" | "bottom" | "" };
// const margin = <code>margin</code>;
export const Margin = ({ dir = "" }: DirectionProps) => {
  const suffix = dir ? `-${dir}` : "";
  return <code>margin{suffix}</code>;
};
export const Padding = ({ dir = "" }: DirectionProps) => {
  const suffix = dir ? `-${dir}` : "";
  return <code>padding{suffix}</code>;
};
