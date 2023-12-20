import { Link } from "../../../../../../components/Link/Link";
import { Title } from "../../../../components/Title";

export const Description = () => (
  <p>
    Curious which components explicitly require our JavaScript and Popper? If
    you{"'"}re at all unsure about the general page structure, keep reading for
    an example page template.
  </p>
);

export const ComponentsList = () => (
  <ul>
    <li>Alerts for dismissing</li>
    <li>Buttons for toggling states and checkbox/radio functionality</li>
    <li>Carousel for all slide behaviors, controls, and indicators</li>
    <li>Collapse for toggling visibility of content</li>
    <li>
      Dropdowns for displaying and positioning (also requires{" "}
      <Link href="https://popper.js.org/">Popper</Link>)
    </li>
    <li>Modals for displaying, positioning, and scroll behavior</li>
    <li>
      Navbar for extending our Collapse and Offcanvas plugins to implement
      responsive behaviors
    </li>
    <li>Navs with the Tab plugin for toggling content panes</li>
    <li>Offcanvases for displaying, positioning, and scroll behavior</li>
    <li>Scrollspy for scroll behavior and navigation updates</li>
    <li>Toasts for displaying and dismissing</li>
    <li>
      Tooltips and popovers for displaying and positioning (also requires{" "}
      <Link href="https://popper.js.org/">Popper</Link>)
    </li>
  </ul>
);

export const JsComponents = () => (
  <>
    <Title id="js-components" aria-label="Link to this section: JS components">
      JS Components
    </Title>
    <Description />
    <ComponentsList />
  </>
);
