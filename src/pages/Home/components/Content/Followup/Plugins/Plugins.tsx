import { useFela } from "react-fela";
import { Column, Row } from "../../../../../../components/Flex";
import { IconWrapper } from "../../../../../../components/Icons/IconWrapper";
import { PluginIcon } from "../../../../../../components/Icons/PluginIcon";
import { BodyParagraph } from "../../components/Body";
import { SectionHeader } from "../../components/SectionHeader";
import { DataAttributeApi } from "./DataAttributeApi/DataAttributeApi";
import { PluginCards } from "./PluginCards/PluginCards";
import { Section } from "../../components/Section";
import { InlineCodeHighlight as Code } from "../../components/InlineCodeHighlight";
import { DetailsLead } from "../../components/DetailsLead";

const LeadText = () => (
  <DetailsLead className="lead-plugin-info">
    Add toggleable hidden elements, modals and offcanvas menus, popovers and
    tooltips, and so much more—all without jQuery. Bootstrap&apos;s JavaScript
    is HTML-first, meaning most plugins are added with <Code>data</Code>{" "}
    attributes in your HTML. Need more control? Include individual plugins
    programmatically.
  </DetailsLead>
);

export const Introduction = () => {
  const { css } = useFela();
  return (
    <Column lg={8} className={`${css({ marginBottom: "3rem" })} plugin-column`}>
      <IconWrapper>
        <PluginIcon />
      </IconWrapper>
      <SectionHeader as="h2" className="plugin-header">
        Powerful JavaScript plugins without jQuery
      </SectionHeader>
      <LeadText />
      <BodyParagraph
        className="browse-plugins"
        href="/docs/5.3/getting-started/javascript/"
        linkText="Learn more about Bootstrap JavaScript"
      />
    </Column>
  );
};

export const PluginSection = () => {
  const { css } = useFela();
  return (
    <Section className="plugin-section">
      <Introduction />
      <Row
        gutter={5}
        className={`${css({ marginTop: 0 })} data-attributes-row`}
      >
        <DataAttributeApi />
        <PluginCards />
      </Row>
    </Section>
  );
};
