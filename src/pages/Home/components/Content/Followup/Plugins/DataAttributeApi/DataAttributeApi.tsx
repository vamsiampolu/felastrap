import { useFela } from "react-fela";
import { Column } from "../../../../../../../components/Flex";
import { PluginHeader } from "./PluginHeader";
import { PluginDescription } from "./PluginDescription";
import { DropdownExample } from "./DropdownExample";
import { DropdownCodeSnippet } from "./DropdownCodeSnippet";
import { LearnMore } from "./LearnMore";

export const DataAttributeApi = () => {
  const { css } = useFela();
  return (
    <Column
      lg={6}
      className={`${css({ marginBottom: "1rem" })} data-attributes-col`}
    >
      <PluginHeader />
      <PluginDescription />
      <DropdownExample />
      <DropdownCodeSnippet />
      <LearnMore />
    </Column>
  );
};
