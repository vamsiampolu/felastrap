import {
  BundlerLink,
  GemfileLink as Gemfile,
  RubyGemBootstrapLink,
  RubyGemsLink,
} from "../../../../components/Links";
import { Title } from "../../../../components/Title";
import * as CodeSnippets from "../CodeSnippets";

export const UseBundler = () => (
  <>
    <p>
      Install Bootstrap in your Ruby apps using <BundlerLink /> (
      <strong>recommended</strong>) and <RubyGemsLink /> by adding the following
      line to your <Gemfile />
      {":"}
    </p>
    <CodeSnippets.GemFileSnippet />
  </>
);

export const UseGemInstall = () => (
  <>
    <p>
      Alternatively{","} if you{"'"}re not using Bundler{","} you can install
      the gem by running this command{":"}
    </p>
    <CodeSnippets.GemInstallSnippet />
  </>
);

export const Jumpline = () => (
  <p>
    {" "}
    <RubyGemBootstrapLink /> for further details.
  </p>
);

export const UseRubyGems = () => (
  <>
    <Title small id="rubygems" aria-label="Link to this section: RubyGems">
      RubyGems
    </Title>
    <UseBundler />
    <UseGemInstall />
    <Jumpline />
  </>
);
