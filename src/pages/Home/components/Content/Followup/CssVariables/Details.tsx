import { useFela } from "react-fela";
import { Column } from "../../../../../../components/Flex";
import { IconWrapper } from "../../../../../../components/Icons/IconWrapper";
import { BracesIcon } from "../../../../../../components/Icons/BracesIcon";
import { SectionHeader } from "../../components/SectionHeader";
import { BodyParagraph } from "../../components/Body";
import { InlineCodeHighlight as Code } from "../../components/InlineCodeHighlight";
import { DetailsLead } from "../../components/DetailsLead";

const textWrap = () => ({ textWrap: "wrap !important" });
const w67 = () => ({ width: "66.667% !important" });

const LeadText = () => {
  const start = `Bootstrap 5 is evolving with each release to better utilize CSS
  variables for global theme styles, individual components, and even
  utilities. We provide dozens of variables for colors, font styles, and
  more at a `;

  const snippet = <Code>{":root"}</Code>;
  const end = ` level for use anywhere. On components and
  utilities, CSS variables are scoped to the relevant class and can easily
  be modified.`;

  return (
    <DetailsLead className="variables-details-lead">
      {start}
      {snippet}
      {end}
    </DetailsLead>
  );
};

export const Details = () => {
  const { css } = useFela();
  return (
    <Column lg={8} className={css({ marginBottom: "3rem" })}>
      <IconWrapper>
        <BracesIcon followUp />
      </IconWrapper>
      <SectionHeader
        as="h2"
        className={`${css([textWrap, w67])} variables-section-header`}
      >
        Build and extend in real-time with CSS&nbsp;variables
      </SectionHeader>
      <LeadText />
      <BodyParagraph
        className="variables-section-body"
        href="/docs/5.3/customize/css-variables/"
        linkText="Learn more about CSS variables"
      />
    </Column>
  );
};
