import { Table } from "../../../../../components/Table";
import { Autoprefixer, Sass, Terser } from "../utils";
import { inlineBlock } from "../inlineBlock";

export const NpmScriptsTable = () => (
  <Table
    header={{
      cols: [
        {
          value: "Task",
        },
        {
          value: "Description",
        },
      ],
    }}
    rows={[
      {
        cols: [
          {
            value: inlineBlock.npmStart,
          },
          {
            value:
              "Compiles CSS and JavaScript, builds the documentation, and starts a local server.",
          },
        ],
      },
      {
        cols: [
          {
            value: inlineBlock.npmRunDist,
          },
          {
            value: (
              <>
                Creates the {inlineBlock.dist} directory with compiled files
                {"."} Uses <Sass />
                {","} <Autoprefixer />
                {","} and <Terser />
                {"."}
              </>
            ),
          },
        ],
      },
      {
        cols: [
          {
            value: inlineBlock.npmTest,
          },
          {
            value: (
              <>Runs tests locally after running {inlineBlock.npmRunDist}</>
            ),
          },
        ],
      },
      {
        cols: [
          {
            value: inlineBlock.npmRunDocsServe,
          },
          {
            value: "Builds and runs the documentation locally.",
          },
        ],
      },
    ]}
  />
);
