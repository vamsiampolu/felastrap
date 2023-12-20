import { useFela } from "react-fela";
import { Link, LinkProps } from "../../../components/Link/Link";

const anchorLinkRule = () => ({
  padding: "0 .175rem",
  fontWeight: "400",
  color: "rgba(13,110,253,0.5)",
  textDecoration: "none",
  opacity: "0",
  transition: "color 0.15s ease-in-out,opacity 0.15s ease-in-out",
  ":hover": {
    color: "#0d6efd",
    textDecoration: "none",
    opacity: 1,
  },
});

export const AnchorLink = ({
  className = "",
  href,
  ...props
}: Omit<LinkProps, "children">) => {
  const { css } = useFela();
  const cx = `${css(anchorLinkRule)} anchor-link ${className}`.trim();
  return (
    <Link
      className={cx}
      href={href}
      aria-label={props["aria-label"]}
      {...props}
    >
      #
    </Link>
  );
};
