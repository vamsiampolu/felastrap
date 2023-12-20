import { HeaderRow } from "./HeaderRow";
import { LeadContent } from "./LeadContent";
import { ReactNode } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  gridArea: "intro",
  paddingTop: "0.5rem!important",
  "@media (min-width: 992px)": {
    paddingLeft: ".5rem!important",
  },
});

export const Intro = ({
  className = "",
  title,
  description,
}: {
  className?: string;
  title: ReactNode;
  description?: ReactNode;
}) => {
  const { css } = useFela();
  const cx = `${css(rule)} bd-intro ${className}`.trim();

  return (
    <div className={cx}>
      <HeaderRow>{title}</HeaderRow>
      <LeadContent>{description}</LeadContent>
    </div>
  );
};
