import * as links from "../utils";
import { HtmlImportMapSnippet } from "./HtmlImportMapSnippet";

const Importmap = () => <code>importmap</code>;

export const CorrectUsage = () => (
  <>
    <p>
      To fix this, you can use an <Importmap /> to resolve the arbitrary module
      names to complete paths{"."} If your <links.BrowserSupportsImportmap /> do
      not support <Importmap />, you
      {"'"}ll need to use the <links.EsModuleShims /> project. Here{"'"}s how it
      works for Bootstrap and Popper{":"}
    </p>
    <HtmlImportMapSnippet />
  </>
);
