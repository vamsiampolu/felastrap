import { QuickStart } from "./components/QuickStart/QuickStart";
import { TableOfContents } from "./components/TableOfContents";
import { Page } from "../../components/Page";

const Introduction = () => {
  return (
    <Page
      title="Get started with Bootstrap"
      description="Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes."
      toc={<TableOfContents isOpen />}
    >
      <QuickStart />
    </Page>
  );
};

export default Introduction;
