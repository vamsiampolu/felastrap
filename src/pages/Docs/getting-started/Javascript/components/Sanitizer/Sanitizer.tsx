import { Title } from "../../../../components/Title";
import { SanitizerSnippet } from "./SanitizerSnippet";

const LeadContent = () => (
  <p>
    Tooltips and Popovers use our built-in sanitizer to sanitize options which
    accept HTML.
  </p>
);

const BodyContent = () => (
  <p>
    The default <code>allowList</code> value is the following:
  </p>
);

export const Sanitizer = () => {
  return (
    <>
      <Title id="sanitizer" aria-label="Link to this section: Sanitizer">
        Sanitizer
      </Title>
      <LeadContent />
      <BodyContent />
      <SanitizerSnippet />
    </>
  );
};
