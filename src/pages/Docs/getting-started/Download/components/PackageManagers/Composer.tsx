import { ComposerLink } from "../../../../components/Links";
import { Title } from "../../../../components/Title";
import * as CodeSnippets from "../CodeSnippets";

export const Jumpline = () => (
  <p>
    You can also install and manage Bootstrap{"'"}s Sass and JavaScript using{" "}
    <ComposerLink />
    {":"}
  </p>
);

export const UseComposer = () => (
  <>
    <Title small id="composer" aria-label="Link to this section: Composer">
      Composer
    </Title>
    <Jumpline />
    <CodeSnippets.ComposerRequireSnippet />
  </>
);
