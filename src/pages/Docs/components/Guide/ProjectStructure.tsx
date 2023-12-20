import { Title } from "../Title";
import * as CodeSnippets from "./CodeSnippets";

export const ProjectStructure = ({
  name,
  configFile,
}: {
  name: string;
  configFile?: string;
}) => {
  const project = <code>my-project</code>;
  const source = <code>src</code>;
  return (
    <>
      <Title
        id="project-structure"
        aria-label="Link to this section: Project structure"
      >
        Project structure
      </Title>
      <p>
        We{"'"}ve already created the {project} folder and initialized npm. Now
        we{"'"}ll also create our {source} folder, stylesheet, and JavaScript
        file to round out the project structure. Run the following from{" "}
        {project}, or manually create the folder and file structure shown below.
      </p>
      <CodeSnippets.CreateFiles configFile={configFile} />
      <p>When you{"'"}re done, your complete project should look like this:</p>
      <CodeSnippets.ProjectStructure configFile={configFile} />
      <p>
        At this point, everything is in the right place, but {name} needs an
        HTML page and npm script to start our server.
      </p>
    </>
  );
};
