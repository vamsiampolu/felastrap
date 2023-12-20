import { useFela } from "react-fela";
import type { LinkProps } from "../../../../../components/Link/Link";
import { Link } from "../../../../../components/Link/Link";

const iconLinkRule = () => ({
  fontWeight: "600",
  display: "inline-flex",
  gap: "0.375rem",
  alignItems: "center",
  textDecorationColor: "rgba(13, 110, 253, 0.5)",
  textUnderlineOffset: "0.25em",
  backfaceVisibility: "hidden",
  ":hover": {
    textDecorationColor: "rgba(10,88,202, 0.5)",
  },
});

export const IconLink = ({ className = "", children, ...props }: LinkProps) => {
  const { css } = useFela();
  const cx = `${css(iconLinkRule)} icon-link ${className}`;
  return (
    <Link className={cx} {...props}>
      {children}
    </Link>
  );
};
