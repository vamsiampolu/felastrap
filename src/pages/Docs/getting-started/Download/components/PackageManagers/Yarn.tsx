import { YarnBootstrapLink } from "../../../../components/Links";
import { Title } from "../../../../components/Title";
import * as CodeSnippets from "../CodeSnippets";

export const Subtitle = () => (
  <p>
    Install Bootstrap in your Node.js powered apps with <YarnBootstrapLink />
    {":"}
  </p>
);

export const UseYarn = () => (
  <>
    <Title small id="yarn" aria-label="Link to this section: yarn">
      Yarn
    </Title>
    <Subtitle />
    <CodeSnippets.YarnCodeSnippet />
  </>
);
