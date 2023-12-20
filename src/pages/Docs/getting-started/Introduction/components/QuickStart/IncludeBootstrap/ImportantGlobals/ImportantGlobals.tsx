import { Title } from "../../../../../../components/Title";
import { BoxSizing } from "./BoxSizing";
import { UseDoctype } from "./UseDoctype";
import { UseViewportMeta } from "./UseViewportMeta";

export const Subtitle = () => (
  <p>
    Bootstrap employs a handful of important global styles and settings, all of
    which are almost exclusively geared towards the <em>normalization</em> of
    cross browser styles. Let{"'"}s dive in.
  </p>
);

export const ImportantGlobals = () => {
  return (
    <>
      <Title
        id="important-globals"
        aria-label="Link to this section: Important globals"
      >
        Important globals
      </Title>
      <Subtitle />
      <UseDoctype />
      <UseViewportMeta />
      <BoxSizing />
    </>
  );
};
