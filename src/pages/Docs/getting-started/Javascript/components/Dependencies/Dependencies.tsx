import { Title } from "../../../../components/Title";
import * as links from "../utils";

const Jumpline = () => (
  <p>
    Our dropdowns, popovers, and tooltips also depend on <links.PopperJs />.
  </p>
);

const LeadContent = () => (
  <p>
    Some plugins and CSS components depend on other plugins. If you include
    plugins individually, make sure to check for these dependencies in the docs.
  </p>
);

export const Dependencies = () => (
  <>
    <Title id="dependencies" aria-label="Link to this section: Dependencies">
      Dependencies
    </Title>
    <LeadContent />
    <Jumpline />
  </>
);
