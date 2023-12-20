import { Title } from "../../../../components/Title";
import { CssFilesTable } from "./CssFilesTable";

export const Subtitle = () => (
  <p>
    Bootstrap includes a handful of options for including some or all of our{" "}
    compiled CSS{"."}
  </p>
);

export const CssFiles = () => (
  <>
    <Title small id="css-files" aria-label="Link to this section: CSS files">
      CSS files
    </Title>
    <Subtitle />
    <CssFilesTable />
  </>
);
