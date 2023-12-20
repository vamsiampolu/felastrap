import { Title } from "../../components/Title";
import {
  ControlDirectives,
  RtlCss as RtlCssLink,
  ValueDirectives,
} from "./utils";
import { inlineBlock } from "./inlineBlock";

export const Rtlcss = () => (
  <>
    <Title id="rtlcss" aria-label="Link to this section: RTLCSS">
      RTLCSS
    </Title>
    <p>
      Bootstrap uses <RtlCssLink /> to process compiled CSS and convert them to
      RTL {"-"} basically replacing horizontal direction aware properties {"("}
      e.g. {inlineBlock.paddingLeft}
      {")"} with their opposite. It allows us only write our CSS a single time
      and make minor tweaks using RTLCSS
      <ControlDirectives /> and <ValueDirectives /> directives.
    </p>
  </>
);
