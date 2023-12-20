import { Title } from "../../Title";
import { ScriptImport } from "./ScriptImport";
import { StyleImport } from "./StyleImport";

const Steps = () => (
  <ol>
    <StyleImport />
    <ScriptImport />
  </ol>
);

export const ImportBootstrap = ({ name }: { name: string }) => {
  const styles = <code>styles.scss</code>;
  const main = <code>main.js</code>;
  return (
    <>
      <Title
        id="import-bootstrap"
        aria-label="Link to this section: Import Bootstrap"
      >
        Import Bootstrap
      </Title>
      <p>
        Importing Bootstrap into {name} requires two imports, one into our{" "}
        {styles} and one into our {main}.
      </p>
      <Steps />
    </>
  );
};
