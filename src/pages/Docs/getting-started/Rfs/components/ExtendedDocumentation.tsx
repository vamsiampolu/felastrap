import { Title } from "../../../components/Title";
import { links } from "./utils";

export const ExtendedDocumentation = () => (
  <>
    <Title
      id="extended-documentation"
      aria-label="Link to this section: Extended documentation"
    >
      Extended documentation
    </Title>
    <p>
      RFS is a separate project under the Bootstrap organization. More about RFS
      and its configuration can be found on its <links.RfsGh />.
    </p>
  </>
);
