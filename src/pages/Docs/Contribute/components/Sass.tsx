import { Title } from "../../components/Title";
import { DartSass, LibSassDeprecated } from "./utils";

const Sass = () => (
  <>
    <Title id="sass" aria-label="Link to this section: Sass">
      Sass
    </Title>
    <p>
      Bootstrap uses <DartSass /> for compiling our Sass source files into CSS
      files {"("}included in our build process{")"}, and we recommend you do the
      same if you{"'"}re compiling Sass using your own asset pipeline. We
      previously used Node Sass for Bootstrap v4, but LibSass and packages built
      on top of it, including Node Sass, are now <LibSassDeprecated />.
    </p>
    <p>
      Dart Sass uses a rounding precision of 10 and for efficiency reasons does
      not allow adjustment of this value. We don{"'"}t lower this precision
      during further processing of our generated CSS, such as during
      minification, but if you chose to do so we recommend maintaining a
      precision of at least 6 to prevent issues with browser rounding.
    </p>
  </>
);

export { Sass };
