import { useFela } from "react-fela";
import { Column } from "../../../../../components/Flex";
import { IconWrapper } from "../../../../../components/Icons/IconWrapper";
import { PaletteIcon2 } from "../../../../../components/Icons/PaletteIcon2";
import { BodyParagraph } from "../components/Body";
import { Lead } from "../components/Lead";
import { SectionHeader } from "../components/SectionHeader";

export const CustomizeSection = () => {
  const { css } = useFela();

  return (
    <Column as="section" lg={7} className={css({ marginBottom: "3rem" })}>
      <IconWrapper>
        <PaletteIcon2 followUp />
      </IconWrapper>
      <SectionHeader as="h2">Customize everything with Sass</SectionHeader>
      <Lead>
        Bootstrap utilizes Sass for a modular and customizable architecture.
        Import only the components you need, enable global options like
        gradients and shadows, and write your own CSS with our variables, maps,
        functions, and mixins.
      </Lead>
      <BodyParagraph
        href="/docs/5.3/customize/overview/"
        linkText="Learn more about customizing"
      />
    </Column>
  );
};
