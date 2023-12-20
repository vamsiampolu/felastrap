import { Link } from "../../../../../../../../components/Link/Link";
import { Title } from "../../../../../../components/Title";
import * as CodeSnippets from "../../CodeSnippets";

export const Description = () => (
  <p>
    Bootstrap is developed <em>mobile first</em>, a strategy in which we
    optimize code for mobile devices first and then scale up components as
    necessary using CSS media queries. To ensure proper rendering and touch
    zooming for all devices, add the responsive viewport meta tag to your{" "}
    <code>{"<head>"}</code>.
  </p>
);

export const JumpLine = () => (
  <p>
    You can see an example of this in action in the{" "}
    <Link href="#quick-start">quick start</Link>
    {"."}
  </p>
);

export const UseViewportMeta = () => (
  <>
    <Title
      small
      id="viewport-meta"
      aria-label="Link to this section: Viewport meta"
    >
      Viewport meta
    </Title>
    <Description />
    <CodeSnippets.ViewportMeta />
    <JumpLine />
  </>
);
