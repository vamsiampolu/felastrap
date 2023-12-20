import { Title } from "../../../components/Title";
import { LgBreakpointCompiled, LgBreakpointMixin } from "./CodeSnippets";
import { code, links } from "./utils";

export const UsingFunctions = () => (
  <>
    <Title
      small
      id="using-the-functions"
      aria-label="Link to this section: Using the functions"
    >
      Using the functions
    </Title>
    <p>
      When you don{"'"}t want to use the includes, there are also two functions
      {":"}
    </p>
    <ul>
      <li>
        {code.rfsValue} converts a value into a {code.rem} value if a {code.px}{" "}
        value is passed, in other cases it returns the same result.
      </li>
      <li>
        {code.rfsFluidValue} returns the fluid version of a value if the
        property needs rescaling.
      </li>
    </ul>
    <p>
      In this example, we use one of Bootstrap{"'"}s built-in{" "}
      <links.ResponsiveBreakpointMixins /> to only apply styling below the{" "}
      {code.lg} breakpoint.
    </p>
    <LgBreakpointMixin />
    <LgBreakpointCompiled />
  </>
);
