import { Header } from "../../../../../../../components/Header/Header";
import { Link } from "../../../../../../../components/Link/Link";
import { BrowseExamples } from "./BrowseExamples/BrowseExample";
import { CodepenDemo } from "./CodepenDemo";
import { CreateHtmlFile } from "./CreateHtmlFile/CreateHtmlFile";
import { IncludeBootstrap } from "./IncludeBootstrap";

export const FirstSteps = () => {
  return (
    <>
      <Header as="h2" id="quick-start">
        Quick start{" "}
        <Link
          className="anchor-link"
          href="#quick-start"
          aria-label="Link to this section: Quick start"
        ></Link>
      </Header>
      <CodepenDemo />
      <br />
      <ol>
        <CreateHtmlFile />
        <IncludeBootstrap />
        <BrowseExamples />
      </ol>
    </>
  );
};
