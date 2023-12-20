import { Column } from "../../../../../../components/Flex";
import { Link } from "../../../../../../components/Link/Link";
import { DropletIcon } from "../../../../../../components/Icons/DropletIcon";
import { IconWrapper } from "../../../../../../components/Icons/IconWrapper";
import { BodyParagraph } from "../../components/Body";
import { DetailsLead } from "../../components/DetailsLead";
import { SectionHeader } from "../../components/SectionHeader";

export const LeadText = () => (
  <DetailsLead className="lead-marketplace">
    Take Bootstrap to the next level with premium themes from the{" "}
    <Link href="https://themes.getbootstrap.com/">
      official Bootstrap Themes marketplace
    </Link>
    . Themes are built on Bootstrap as their own extended frameworks, rich with
    new components and plugins, documentation, and powerful build tools.
  </DetailsLead>
);

export const Details = () => {
  return (
    <Column lg={6}>
      <IconWrapper>
        <DropletIcon />
      </IconWrapper>
      <SectionHeader as="h2" className="theme-header">
        Make it yours with official Bootstrap Themes
      </SectionHeader>
      <LeadText />
      <BodyParagraph
        className="lead-browse-themes"
        href="https://themes.getbootstrap.com/"
        linkText="Browse Bootstrap Themes"
      />
    </Column>
  );
};
