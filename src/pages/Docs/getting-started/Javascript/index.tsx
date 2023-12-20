import { ContentWrapper } from "../../components/ContentWrapper";
import { Page } from "../../components/Page";
import { MethodsAndProperties } from "./MethodsAndProperties/MethodsAndProperties";
import { DataAttributes } from "./components/DataAttributes/DataAttributes";
import { Dependencies } from "./components/Dependencies/Dependencies";
import { DisabledJs } from "./components/DisabledJs";
import { Events } from "./components/Events/Events";
import { IndividualOrCompiled } from "./components/IndividualOrCompiled";
import { ProgrammaticApi } from "./components/ProgramatticApi/ProgramatticApi";
import { Sanitizer } from "./components/Sanitizer/Sanitizer";
import { Selectors } from "./components/Selectors";
import { TableOfContents } from "./components/TableOfContents";
import { UsageWithFrameworks } from "./components/UsageWithFrameworks";
import { UsingBootstrapModule } from "./components/UseBootstrapModule/UseBootstrapModule";
import { UsingJquery } from "./components/UsingJquery/UsingJquery";

const Javascript = () => (
  <Page
    title="JavaScript"
    description="Bring Bootstrap to life with our optional JavaScript plugins. Learn about each plugin, our data and programmatic API options, and more."
    toc={<TableOfContents />}
  >
    <ContentWrapper>
      <IndividualOrCompiled />
      <UsageWithFrameworks />
      <UsingBootstrapModule />
      <Dependencies />
      <DataAttributes />
      <Selectors />
      <Events />
      <ProgrammaticApi />
      <MethodsAndProperties />
      <Sanitizer />
      <UsingJquery />
      <DisabledJs />
    </ContentWrapper>
  </Page>
);

export default Javascript;
