import { useFela } from "react-fela";
import { Row } from "../../../../../../components/Flex";
import { Section } from "../../components/Section";
import { CustomizeComponents } from "./CustomizeComponents";
import { Details } from "./Details";
import { ExtendUtilities } from "./ExtendUtilities";

export const UtilityApiSection = () => {
  const { css } = useFela();
  return (
    <Section>
      <Details />
      <Row gutter={5} className={css({ marginTop: 0 })}>
        <CustomizeComponents />
        <ExtendUtilities />
      </Row>
    </Section>
  );
};
