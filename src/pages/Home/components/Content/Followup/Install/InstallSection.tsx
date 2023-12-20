import { useFela } from "react-fela";
import { Section } from "../../components/Section";
import { Guides } from "./Guides";
import { UseCdn } from "./UseCdn";
import { UsePackageManagers } from "./UsePackageManager";

const installSectionRule = () => ({
  paddingBottom: "3rem !important",
  justifyContent: "center",
  marginTop: "-3rem !important",
  marginRight: "-1.5rem !important",
  marginLeft: "-1.5rem !important",
});

export const InstallSection = () => {
  const { css } = useFela();
  return (
    <Section gutter={3} className={css(installSectionRule)}>
      <UsePackageManagers />
      <UseCdn />
      <Guides />
    </Section>
  );
};
