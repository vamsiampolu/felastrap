import { Title } from "../../../components/Title";
import { FrameworkLibraryList } from "./FrameworkLibraryList";

const LeadContent = () => (
  <p>
    While the Bootstrap CSS can be used with any framework,{" "}
    <strong>
      the Bootstrap JavaScript is not fully compatible with JavaScript
      frameworks like React, Vue, and Angular
    </strong>{" "}
    which assume full knowledge of the DOM. Both Bootstrap and the framework may
    attempt to mutate the same DOM element, resulting in bugs like dropdowns
    that are stuck in the “open” position.
  </p>
);

export const BodyContent = () => (
  <p>
    A better alternative for those using this type of frameworks is to use a
    framework-specific package <strong>instead of</strong> the Bootstrap
    JavaScript. Here are some of the most popular options:
  </p>
);

export const UsageWithFrameworks = () => (
  <>
    <Title
      id="usage-with-javascript-frameworks"
      aria-label="Link to this section: Usage with JavaScript frameworks"
    >
      Usage with JavaScript frameworks
    </Title>
    <LeadContent />
    <BodyContent />
    <FrameworkLibraryList />
  </>
);
