import * as CodeSnippets from "../CodeSnippets";

export const InstallBootstrap = () => (
  <li>
    <p>
      <strong>Install Bootstrap.</strong> Now we can install Bootstrap. We{"'"}
      ll also install Popper since our dropdowns, popovers, and tooltips depend
      on it for their positioning. If you don{"'"}t plan on using those
      components, you can omit Popper here.
    </p>
    <CodeSnippets.InstallBootstrapSnippet />
  </li>
);
