import { Title } from "../../../../../../components/Title";
import * as CodeSnippets from "../../CodeSnippets";

export const Description = () => (
  <p>
    Bootstrap requires the use of the HTML5 doctype. Without it, you{"'"}ll see
    some funky and incomplete styling.
  </p>
);

export const UseDoctype = () => (
  <>
    <Title
      small
      id="html5-doctype"
      aria-label="Link to this section: HTML5 doctype"
    >
      HTML5 doctype
    </Title>
    <Description />
    <CodeSnippets.DoctypeExample />
  </>
);
