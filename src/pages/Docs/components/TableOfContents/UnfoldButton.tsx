import { ElementType } from "react";
import { useFela } from "react-fela";
import { UnfoldIcon } from "../../../../components/Icons/UnfoldIcon";
import { ButtonLink, ButtonLinkProps } from "../ButtonLink";

const displayMdNone = () => ({
  "@media (min-width: 768px)": {
    display: "none",
  },
});

const tocToggleRule = () => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  marginBottom: "0.5rem",
  "@media (min-width: 768px)": {
    display: "block",
    marginBottom: 0,
    padding: 0,
  },
});

export const UnfoldButton = <T extends ElementType>(
  props: ButtonLinkProps<T>,
) => {
  const { css } = useFela();
  const { as = "a", className } = props;
  const cx = `${css(tocToggleRule)} unfold-button ${className}`.trim();
  return (
    <ButtonLink
      as={as}
      className={cx}
      data-bs-toggle="collapse"
      data-bs-target="#tocContents"
      aria-expanded="false"
      aria-controls="tocContents"
      {...props}
    >
      On this page
      <UnfoldIcon className={css(displayMdNone)} />
    </ButtonLink>
  );
};
