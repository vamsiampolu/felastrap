import * as CodeSnippets from "../CodeSnippets";

export const CreateProject = () => {
  const project = <code>my-project</code>;
  const yes = <code>{"-"}y</code>;
  return (
    <li>
      <p>
        <strong>Create a project folder and setup npm.</strong> We{"'"}ll create
        the {project} folder and initialize npm with the {yes} argument to avoid
        it asking us all the interactive questions.
      </p>
      <CodeSnippets.CreateProjectSnippet />
    </li>
  );
};
