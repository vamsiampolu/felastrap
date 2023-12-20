import { BrowserlistrcSnippet } from "./BrowserlistConfigSnippet";
import * as phrases from "./utils";

export const SupportedVersions = () => (
  <>
    <p>
      You can find our supported range of browsers and their versions{" "}
      <phrases.BrowserListrc />
      {":"}
    </p>
    <BrowserlistrcSnippet />
  </>
);
