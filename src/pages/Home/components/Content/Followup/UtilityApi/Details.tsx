import { useFela } from "react-fela";
import { Column } from "../../../../../../components/Flex";
import { Link } from "../../../../../../components/Link/Link";
import { IconWrapper } from "../../../../../../components/Icons/IconWrapper";
import { MenuButtonWideFill } from "../../../../../../components/Icons/MenuButtonWideFill";
import { PlusAsteriskIcon } from "../../../../../../components/Icons/PlusAsteriskIcon";
import { PlusIcon } from "../../../../../../components/Icons/PlusIcon";
import { DetailsLead } from "../../components/DetailsLead";
import { SectionHeader } from "../../components/SectionHeader";

const LeadText = () => {
  const { css } = useFela();
  return (
    <Column span={6}>
      <DetailsLead
        className={`${css({
          textAlign: "justify",
          width: "50% !important",
        })} utility-api-details-lead`}
      >
        New in Bootstrap 5, our utilities are now generated by our{" "}
        <Link href="/docs/5.3/utilities/api/">Utility API</Link>. We built it as
        a feature-packed Sass map that can be quickly and easily customized.
        It&apos;s never been easier to add, remove, or modify any utility
        classes. Make utilities responsive, add pseudo-class variants, and give
        them custom names.
      </DetailsLead>
    </Column>
  );
};

export const Details = () => {
  const { css } = useFela();
  const cx = `${css({ marginBottom: "3rem" })} utility-api-details`;
  return (
    <Column className={cx}>
      <IconWrapper>
        <MenuButtonWideFill />
      </IconWrapper>

      <PlusIcon />
      <IconWrapper>
        <PlusAsteriskIcon />
      </IconWrapper>

      <SectionHeader as="h2" className="utility-api-section-header">
        Components, meet the Utility API
      </SectionHeader>
      <LeadText />
    </Column>
  );
};
