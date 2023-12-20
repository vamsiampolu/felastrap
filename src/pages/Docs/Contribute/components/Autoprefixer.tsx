import { Title } from "../../components/Title";
import { Browserlistrc, Autoprefixer as AutoprefixerLink } from "./utils";

export const Autoprefixer = () => (
  <>
    <Title id="autoprefixer" aria-label="Link to this section: Autoprefixer">
      Autoprefixer
    </Title>
    <p>
      Bootstrap uses <AutoprefixerLink /> {"("}included in our build process
      {")"} to automatically add vendor prefixes to some CSS properties at build
      time. Doing so saves us time and code by allowing us to write key parts of
      our CSS a single time while eliminating the need for vendor mixins like
      those found in v3.
    </p>
    <p>
      We maintain the list of browsers supported through Autoprefixer in a
      separate file within our GitHub repository. See <Browserlistrc /> for
      details.
    </p>
  </>
);
