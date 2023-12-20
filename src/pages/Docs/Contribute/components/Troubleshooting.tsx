import { Title } from "../../components/Title";
import { inlineBlock } from "./inlineBlock";

export const Troubleshooting = () => (
  <>
    <Title
      id="troubleshooting"
      aria-label="Link to this section: Troubleshooting"
    >
      Troubleshooting
    </Title>
    <p>
      Should you encounter problems with installing dependencies, uninstall all
      previous dependency versions {"("}global and local{")"}. Then, rerun{" "}
      {inlineBlock.npmInstall}.
    </p>
  </>
);
