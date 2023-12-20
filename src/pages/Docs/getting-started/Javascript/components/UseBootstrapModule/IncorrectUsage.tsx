import * as links from "../utils";
import { PopperImportSnippet } from "./PopperImportSnippet";

const Esm = () => <code>ESM</code>;
const BootstrapEsmJs = ({ min = false }: { min?: boolean }) => (
  <code>
    bootstrap{"."}esm{min ? "min." : "."}js
  </code>
);

export const IncorrectUsage = () => (
  <>
    <p>
      We provide a version of Bootstrap built as <Esm /> {"("}
      <BootstrapEsmJs /> and <BootstrapEsmJs min />
      {")"} which allows you to use Bootstrap as a module in the browser{", "}
      if your <links.BrowserSupportsEsm />
      {"."}
    </p>
    <PopperImportSnippet />
  </>
);
