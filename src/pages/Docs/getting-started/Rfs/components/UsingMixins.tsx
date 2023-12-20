import { Title } from "../../../components/Title";
import {
  CompiledMixin,
  FontSizeMixin,
  MixinImportant,
  RfsMixin,
} from "./CodeSnippets";
import { code } from "./utils";

export const UsingMixins = () => (
  <>
    <Title
      small
      id="using-the-mixins"
      aria-label="Link to this section: Using the mixins"
    >
      Using the mixins
    </Title>
    <p>
      The {code.rfs} mixin has shorthands for <code>font-size</code>,{" "}
      {<code.Margin />}, {<code.Margin dir="top" />},{" "}
      {<code.Margin dir="right" />}, {<code.Margin dir="bottom" />},{" "}
      {<code.Margin dir="left" />}, {<code.Padding />},{" "}
      {<code.Padding dir="top" />}, {<code.Padding dir="right" />},{" "}
      {<code.Padding dir="bottom" />}, and {<code.Padding dir="left" />}. See
      the example below for source Sass and compiled CSS.
    </p>
    <FontSizeMixin />
    <CompiledMixin />
    <p>
      Any other property can be passed to the {code.rfs} mixin like this{":"}
    </p>
    <RfsMixin />
    <p>
      {code.important} can also just be added to whatever value you want{":"}
    </p>
    <MixinImportant />
  </>
);
