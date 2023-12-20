import { Link } from "../../../../../components/Link/Link";
import { Title } from "../../../components/Title";
import * as DownloadButton from "./DownloadButton";

export const Jumpline = () => (
  <p>
    If you want to download and examine our{" "}
    <Link href="/docs/5.3/examples/">examples</Link>, you can grab the already
    built examples{":"}
  </p>
);

export const Examples = () => (
  <>
    <Title id="examples" aria-label="Link to this section: Examples">
      Examples
    </Title>
    <Jumpline />
    <DownloadButton.Example />
  </>
);
