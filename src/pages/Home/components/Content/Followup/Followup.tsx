import { useFela } from "react-fela";
import { Container } from "../../../../../components/Flex";
import { VariablesSection } from "./CssVariables/VariablesSection";
import { CustomizeSection } from "./CustomizeSection";
import { GettingStarted } from "./GettingStarted";
import { IconSection } from "./IconsSection";
import { InstallSection } from "./Install/InstallSection";
import { PluginSection } from "./Plugins/Plugins";
import { ThemingSection } from "./Theming/ThemingSection";
import { UtilityApiSection } from "./UtilityApi/UtilityApiSection";
import { SassImportsSection } from "./SassImports/SassSection";

const containerRule = () => ({
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  maxWidth: "1320px",
});

export const Followup = () => {
  const { css } = useFela();
  const containerClassName = `${css(containerRule)} masthead-followup`;
  return (
    <Container className={containerClassName}>
      <GettingStarted />
      <InstallSection />
      <CustomizeSection />
      <SassImportsSection />
      <VariablesSection />
      <UtilityApiSection />
      <PluginSection />
      <IconSection />
      <ThemingSection />
    </Container>
  );
};
