import { Title } from "../../../../components/Title";
import { JsFileTable } from "./JsFileTable";

export const Subtitle = () => (
  <p>
    Similarly{","} we have options for including some or all of our compiled
    JavaScript{"."}
  </p>
);

export const JsFiles = () => (
  <>
    <Title small id="js-files" aria-label="Link to this section: JS files">
      JS files
    </Title>
    <Subtitle />
    <JsFileTable />
  </>
);
