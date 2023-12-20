import { Title } from "../../../../components/Title";
import { DefaultSettingsSnippet } from "./DefaultSettingsSnippet";

export const DefaultSettings = () => {
  const defaultOptions = <code>Constructor{"."}Default</code>;
  return (
    <>
      <Title
        small
        id="default-settings"
        aria-label="Link to this section: Default settings"
      >
        Default settings
      </Title>
      <p>
        You can change the default settings for a plugin by modifying the plugin
        {"'"}s {defaultOptions} object{":"}
      </p>
      <DefaultSettingsSnippet />
    </>
  );
};
