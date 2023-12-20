import { useFela } from "react-fela";
import icons from "../../../../../assets/bootstrap-icons.png";
import icons2x from "../../../../../assets/bootstrap-icons@2x.png";
import { Column } from "../../../../../components/Flex";
import { Image } from "../../../../../components/Image/Image";
import { Link } from "../../../../../components/Link/Link";
import { CirclePopIcon } from "../../../../../components/Icons/CirclePopIcon";
import { IconWrapper } from "../../../../../components/Icons/IconWrapper";
import { BodyParagraph } from "../components/Body";
import { DetailsLead } from "../components/DetailsLead";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";

export const IconDetails = () => {
  return (
    <Column lg={6}>
      <IconWrapper>
        <CirclePopIcon />
      </IconWrapper>
      <SectionHeader as="h2" className="icon-section-header">
        Personalize it with Bootstrap Icons
      </SectionHeader>
      <DetailsLead className="icon-section-lead">
        <Link href="https://icons.getbootstrap.com/">Bootstrap Icons</Link> is
        an open source SVG icon library featuring over 1,800 glyphs, with more
        added every release. They&apos;re designed to work in any project,
        whether you use Bootstrap itself or not. Use them as SVGs or icon
        fonts—both options give you vector scaling and easy customization via
        CSS.
      </DetailsLead>
      <BodyParagraph
        className="icon-details-body"
        href="https://icons.getbootstrap.com/"
        linkText="Get Bootstrap Icons"
      />
    </Column>
  );
};

export const IconImage = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const cx = `${css({
    marginTop: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  })} icon-section-image ${className}`.trim();
  return (
    <Column lg={6}>
      <Image
        fluid
        className={cx}
        srcSet={`${icons2x}, ${icons}`}
        src={icons}
        alt="Bootstrap Icons"
        width={700}
        height={425}
        loading="lazy"
      />
    </Column>
  );
};

export const IconSection = () => {
  return (
    <Section className="icon-section">
      <IconDetails />
      <IconImage />
    </Section>
  );
};
