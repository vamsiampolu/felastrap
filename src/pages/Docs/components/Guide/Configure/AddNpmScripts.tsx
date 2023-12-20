import * as CodeSnippets from "../CodeSnippets";

export const AddNpmScripts = ({
  start: startScript,
  build = "",
  name,
}: {
  start: string;
  build?: string;
  name: string;
}) => {
  const start = <code>start</code>;
  const dist = <code>dist</code>;
  const scripts = <code>scripts</code>;
  const manifest = <code>package.json</code>;
  return (
    <li>
      <p>
        <strong>Add the npm scripts.</strong> Open the {manifest} and add the
        following {start} script to the {scripts} object. We{"'"}ll use this
        script to start our {name} development server and render the HTML file
        we created after it{"'"}s compiled into the {dist} directory.
      </p>
      <CodeSnippets.NpmScripts start={startScript} build={build} />
    </li>
  );
};
