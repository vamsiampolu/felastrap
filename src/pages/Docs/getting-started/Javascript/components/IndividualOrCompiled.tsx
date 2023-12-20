import { Title } from "../../../components/Title";
import * as code from "./utils";

const Subtitle = () => (
  <p>
    Plugins can be included individually {"("}using Bootstrap{"'"}s individual{" "}
    <code.DistJsGlob />, or all at once using <code.BootstrapJs /> or the
    minified <code.BootstrapMinJs /> {"("}don{"'"}t include both{")."}
  </p>
);
const LeadContent = () => (
  <p>
    If you use a bundler {"("}Webpack, Parcel, Vite{"…),"} you can use{" "}
    <code.DistJsGlob /> files which are UMD ready{"."}
  </p>
);

export const IndividualOrCompiled = () => (
  <>
    <Title
      id="individual-or-compiled"
      aria-label="Link to this section: Individual or compiled"
    >
      Individual or compiled
    </Title>
    <Subtitle />
    <LeadContent />
  </>
);
