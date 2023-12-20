import { Title } from "../../../components/Title";
import { NoscriptLink } from "./utils";

const Description = () => (
  <p>
    Bootstrap{"'"}s plugins have no special fallback when JavaScript is
    disabled. If you care about the user experience in this case, use{" "}
    <NoscriptLink /> to explain the situation {"("}and how to re-enable
    JavaScript{")"} to your users, and{"/"}or add your own custom fallbacks.
  </p>
);

export const DisabledJs = () => (
  <>
    <Title
      id="disabled-javascript"
      aria-label="Link to this section: Disabled JavaScript"
    >
      Disabled JavaScript
    </Title>
    <Description />
  </>
);
