import { Title } from "../../../components/Title";
import { Steps } from "./Steps";
import { DocsNpmScripts, Manifest } from "../utils";

export const ToolingSetup = () => {
  return (
    <>
      <Title
        id="tooling-setup"
        aria-label="Link to this section: Tooling setup"
      >
        Tooling setup
      </Title>
      <p>
        Bootstrap uses <DocsNpmScripts /> to build the documentation and compile
        source files. Our <Manifest /> houses these scripts for compiling code,
        running tests, and more. These aren{"'"}t intended for use outside our
        repository and documentation.
      </p>
      <p>
        To use our build system and run our documentation locally, you{"'"}ll
        need a copy of Bootstrap{"'"}s source files and Node. Follow these steps
        and you should be ready to rock{":"}
      </p>
      <Steps />
      <p>
        When completed, you{"'"}ll be able to run the various commands provided
        from the command line.
      </p>
    </>
  );
};
