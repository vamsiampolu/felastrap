import { Callout } from "../../Download/components/Callout";
import * as links from "./utils";

const ReactBootstrapItem = () => (
  <li>
    React{": "}
    <links.ReactBootstrapLink />
    <Callout variant="info">
      <strong>Try it yourself{"!"}</strong> Download the source code and working
      demo for using Bootstrap with React{","} Next.js{","} and React Bootstrap
      from the <links.NextJsExamples />
      {". "}You can also <links.NextJsExampleStackblitz />
      {"."}
    </Callout>
  </li>
);

export const VueBootstrapItem = () => (
  <li>
    Vue: <links.VueBootstrapLink /> (Bootstrap 4)
  </li>
);

export const VueBootstrapNextItem = () => (
  <li>
    Vue 3: <links.VueBootstrapNextLink /> {"("}Bootstrap 5, currently in alpha
    {")"}
  </li>
);

export const AngularItem = () => (
  <li>
    Angular: <links.NgBootstrapLink />
  </li>
);

export const FrameworkLibraryList = () => (
  <ul>
    <ReactBootstrapItem />
    <VueBootstrapItem />
    <VueBootstrapNextItem />
    <AngularItem />
  </ul>
);
