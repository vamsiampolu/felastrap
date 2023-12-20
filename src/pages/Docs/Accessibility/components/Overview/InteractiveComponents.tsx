import { Title } from "../../../components/Title";
import * as links from "../utils";
import * as abbreviations from "../abbreviations";

const LeadContent = () => (
  <p>
    Bootstrap{"'"}s interactive components{"—"}such as modal dialogs, dropdown
    menus, and custom tooltips{"—"}are designed to work for touch, mouse, and
    keyboard users. Through the use of relevant <links.WaiARIAGuidelines />{" "}
    roles and attributes, these components should also be understandable and
    operable using assistive technologies {"("}such as screen readers{")"}
    {"."}
  </p>
);

const BodyContent = () => (
  <p>
    Because Bootstrap{"'"}s components are purposely designed to be fairly
    generic, authors may need to include further{" "}
    <abbreviations.abbreviations.ARIA /> roles and attributes, as well as
    JavaScript behavior, to more accurately convey the precise nature and
    functionality of their component. This is usually noted in the
    documentation.
  </p>
);

export const InteractiveComponents = () => (
  <>
    <Title
      small
      id="interactive-components"
      aria-label="Link to this section: Interactive components"
    >
      Interactive components
    </Title>
    <LeadContent />
    <BodyContent />
  </>
);
