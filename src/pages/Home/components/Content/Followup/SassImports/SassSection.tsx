import { useFela } from "react-fela";
import { Section } from "../../components/Section";
import { IncludeEverything } from "./IncludeSass";
import { IncludeWhatYouNeed } from "./IncludeWhatYouNeed";

const rule = () => ({ alignItems: "normal !important" });

export const SassImportsSection = () => {
  const { css } = useFela();
  return (
    <Section className={css(rule)}>
      <IncludeEverything />
      <IncludeWhatYouNeed />
    </Section>
  );
};
