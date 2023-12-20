import { Title } from "../../../components/Title";
import * as links from "../utils";
import { ColorContrast } from "./ColorContrast";
import { InteractiveComponents } from "./InteractiveComponents";
import { ReducedMotion } from "./ReducedMotion";
import { StructuralMarkup } from "./StructuralMarkup";
import { VisuallyHidden } from "./VisuallyHidden";

const LeadContent = () => (
  <p>
    The overall accessibility of any project built with Bootstrap depends in
    large part on the author{"'"}s markup, additional styling, and scripting
    they{"'"}ve included. However, provided that these have been implemented
    correctly, it should be perfectly possible to create websites and
    applications with Bootstrap that fulfill <links.WCAG2pt1 /> {"("}A/AA/AAA
    {")"}, <links.Section508 /> and similar accessibility standards and
    requirements.
  </p>
);

export const Overview = () => (
  <>
    <Title
      id="overview-and-limitations"
      aria-label="Link to this section: Overview and limitations"
    >
      Overview and limitations
    </Title>
    <LeadContent />
    <StructuralMarkup />
    <ColorContrast />
    <InteractiveComponents />
    <VisuallyHidden />
    <ReducedMotion />
  </>
);
