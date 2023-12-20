import { Title } from "../../../components/Title";
import * as links from "./utils";

const LeadContent = () => {
  const querySelector = <code>querySelector</code>;
  const querySelectorAll = <code>querySelectorAll</code>;
  const collapseExample = <code>collapse{":"}Example</code>;

  return (
    <p>
      We use the native {querySelector} and {querySelectorAll} methods to query
      DOM elements for performance reasons{", "}
      so you must use <links.ValidSelectors />
      {". "}If you use special selectors like {collapseExample}
      {", "}be sure to escape them.
    </p>
  );
};

export const Selectors = () => (
  <>
    <Title id="selectors" aria-label="Link to this section: Selectors">
      Selectors
    </Title>
    <LeadContent />
  </>
);
