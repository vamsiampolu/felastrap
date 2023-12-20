import { Title } from "../../../../components/Title";
import { NoConflictSnippet } from "./NoConflictSnippet";

export const Description = () => (
  <p>
    Sometimes it is necessary to use Bootstrap plugins with other UI frameworks.
    In these circumstances, namespace collisions can occasionally occur. If this
    happens, you may call <code>.noConflict</code> on the plugin you wish to
    revert the value of.
  </p>
);

export const NoConflict = () => (
  <>
    <Title
      small
      id="no-conflict"
      aria-label="Link to this section: No conflict"
    >
      No conflict
    </Title>
    <Description />
    <NoConflictSnippet />
  </>
);
