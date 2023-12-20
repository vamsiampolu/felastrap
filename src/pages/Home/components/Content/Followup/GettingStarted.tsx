import { useFela } from "react-fela";
import { Column } from "../../../../../components/Flex";
import { CodeIcon } from "../../../../../components/Icons/CodeIcon";
import { IconWrapper } from "../../../../../components/Icons/IconWrapper";
import { BodyParagraph } from "../components/Body";
import { Lead } from "../components/Lead";
import { SectionHeader } from "../components/SectionHeader";

const colRule = () => ({
  marginRight: "auto",
  marginLeft: "auto",
  paddingBottom: "1rem",
  "@media (min-width: 768px)": {
    marginBottom: "3rem !important",
    textAlign: "center !important",
  },
});

export const GettingStarted = () => {
  const { css } = useFela();
  return (
    <Column lg={7} className={`${css(colRule)} followup-column`}>
      <IconWrapper>
        <CodeIcon followUp />
      </IconWrapper>
      <SectionHeader as="h2"> Get started any way you want</SectionHeader>
      <Lead>
        Jump right into building with Bootstrap—use the CDN, install it via
        package manager, or download the source code.
      </Lead>
      <BodyParagraph
        className={css({ justifyContent: "center !important" })}
        href="/docs/5.3/getting-started/download/"
        linkText="Read installation docs"
      />
    </Column>
  );
};
