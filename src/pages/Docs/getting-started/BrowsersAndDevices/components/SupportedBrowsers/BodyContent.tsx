import * as phrases from "./utils";

export const BodyContent = () => (
  <p>
    We use <phrases.Autoprefixer /> to handle intended browser support via CSS
    prefixes, which uses <phrases.BrowserList /> to manage these browser
    versions. Consult their documentation for how to integrate these tools into
    your projects.
  </p>
);
