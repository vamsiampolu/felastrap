import { useFela } from "react-fela";
import { Row } from "../../../../../../components/Flex";
import { Section } from "../../components/Section";
import { CustomizeUsingVariables } from "./CustomizeUsingVariables";
import { UsingVariables } from "./UsingVariables";
import { Details } from "./Details";

export const VariablesSection = () => {
  const { css } = useFela();
  return (
    <Section className="variables-section">
      <Details />
      <Row gutter={5} className={css({ marginTop: 0 })}>
        <UsingVariables />
        <CustomizeUsingVariables />
      </Row>
    </Section>
  );
};
