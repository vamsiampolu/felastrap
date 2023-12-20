import { Callout } from "../../../Download/components/Callout";
import { IncorrectUsage } from "./IncorrectUsage";
import { CorrectUsage } from "./CorrectUsage";
import * as links from "../utils";
import { Title } from "../../../../components/Title";

const LeadContent = () => (
  <Callout variant="info">
    <strong>Try it yourself!</strong> Download the source code and working demo
    for using Bootstrap as an ES module from the <links.BootstrapEsmExamples />.
    You can also <links.BootstrapEsmStackblitz />
  </Callout>
);

export const UsingBootstrapModule = () => (
  <>
    <Title
      id="using-bootstrap-as-a-module"
      aria-label="Link to this section: Using Bootstrap as a module"
    >
      Using Bootstrap as a module
    </Title>
    <LeadContent />
    <IncorrectUsage />
    <CorrectUsage />
  </>
);
