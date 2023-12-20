import { ProjectStructure } from "./ProjectStructure";
import { BodyContent } from "./BodyContent";
import { Title } from "../../../../components/Title";

export const Subtitle = () => (
  <p>
    Once downloaded{","} unzip the compressed folder and you{"'"}ll see
    something like this:
  </p>
);

export const CompiledBootstrap = () => {
  return (
    <>
      <Title
        id="compiled-bootstrap"
        aria-label="Link to this section: Compiled Bootstrap"
      >
        Compiled Bootstrap
      </Title>
      <Subtitle />
      <ProjectStructure />
      <BodyContent />
    </>
  );
};
