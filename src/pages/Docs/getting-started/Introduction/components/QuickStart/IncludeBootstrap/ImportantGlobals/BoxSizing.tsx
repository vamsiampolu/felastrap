import { Link } from "../../../../../../../../components/Link/Link";
import { Title } from "../../../../../../components/Title";
import * as CodeSnippets from "../../CodeSnippets";

export const Description = () => (
  <>
    <p>
      For more straightforward sizing in CSS, we switch the global{" "}
      <code>box{"-"}sizing</code> value from <code>content{"-"}box</code> to{" "}
      <code>border-box</code>. This ensures <code>padding</code> does not affect
      the final computed width of an element, but it can cause problems with
      some third-party software like Google Maps and Google Custom Search
      Engine.
    </p>
    <p>
      On the rare occasion you need to override it, use something like the
      following:
    </p>
  </>
);

export const JumpLine = () => (
  <p>
    Learn more about{" "}
    <Link href="https://css-tricks.com/box-sizing/">
      box model and sizing at CSS Tricks
    </Link>
    {"."}
  </p>
);

export const BoxSizing = () => (
  <>
    <Title small id="box-sizing" aria-label="Link to this section: Box-sizing">
      Box-sizing
    </Title>
    <Description />
    <CodeSnippets.BoxSizing />
    <p>
      With the above snippet, nested elements—including generated content via{" "}
      <code>{"::"}before</code> and <code>{"::"}after</code>
      {"—"}will all inherit the specified <code>box-sizing</code> for that{" "}
      <code>
        .selector{"-"}for{"-"}some-widget
      </code>
      {"."}
    </p>
    <JumpLine />
  </>
);
