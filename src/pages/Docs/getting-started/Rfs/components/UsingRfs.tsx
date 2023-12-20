import { Title } from "../../../components/Title";
import { UsingFunctions } from "./UsingFunctions";
import { UsingMixins } from "./UsingMixins";
import { code, links } from "./utils";

export const UsingRfs = () => (
  <>
    <Title id="using-rfs" aria-label="Link to this section: Using RFS">
      Using RFS
    </Title>
    <p>
      The mixins are included in Bootstrap and are available once you include
      Bootstrap{"'"}s {code.scss}. RFS can also be {<links.StandaloneInstall />}{" "}
      if needed.
    </p>
    <UsingMixins />
    <UsingFunctions />
  </>
);
