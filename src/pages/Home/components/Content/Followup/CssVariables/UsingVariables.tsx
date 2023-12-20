import { useFela } from "react-fela";
import { CodeSnippet } from "../../components/CodeSnippet/CodeSnippet";
import { Column } from "../../../../../../components/Flex";
import { ColumnHeader } from "../../components/ColumnHeader";
import { ClipboardButton } from "../../components/CodeSnippet/ClipboardButton";
import { Highlight } from "../../components/CodeSnippet/Highlight";
import { Link } from "../../../../../../components/Link/Link";

export const Description = () => (
  <p>
    Use any of our{" "}
    <Link href="/docs/5.3/customize/css-variables/#root-variables">
      global <code>:root</code> variables
    </Link>{" "}
    to write new styles. CSS variables use the{" "}
    <code>var(--bs-variableName)</code> syntax and can be inherited by children
    elements.
  </p>
);

export const ScssVariablesExample = () => {
  return (
    <CodeSnippet>
      <ClipboardButton />
      <Highlight
        language="scss"
        data-lang="scss"
        lines={[
          {
            tokens: [
              {
                token: ".component",
                isKey: false,
                isValue: false,
              },
              {
                token: " ",
                isKey: false,
                isValue: false,
              },
              {
                token: "{",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "  ",
                isKey: false,
                isValue: false,
              },
              {
                token: "color",
                isKey: true,
                isValue: false,
              },
              {
                token: ":",
                isKey: false,
                isValue: false,
              },
              {
                token: " ",
                isKey: false,
                isValue: false,
              },
              {
                token: "var",
                isKey: false,
                isValue: false,
              },
              {
                token: "(",
                isKey: false,
                isValue: false,
              },
              {
                token: "--",
                isKey: false,
                isValue: false,
              },
              {
                token: "bs-gray-800",
                isKey: false,
                isValue: true,
              },
              {
                token: ");",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "  ",
                isKey: false,
                isValue: false,
              },
              {
                token: "background-color",
                isKey: true,
                isValue: false,
              },
              {
                token: ":",
                isKey: false,
                isValue: false,
              },
              {
                token: " ",
                isKey: false,
                isValue: false,
              },
              {
                token: "var",
                isKey: false,
                isValue: false,
              },
              {
                token: "(",
                isKey: false,
                isValue: false,
              },
              {
                token: "--",
                isKey: false,
                isValue: false,
              },
              {
                token: "<bs-gray-1></bs-gray-1>00",
                isKey: false,
                isValue: true,
              },
              {
                token: ");",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "  ",
                isKey: false,
                isValue: false,
              },
              {
                token: "border",
                isKey: true,
                isValue: false,
              },
              {
                token: ":",
                isKey: false,
                isValue: false,
              },
              {
                token: " ",
                isKey: false,
                isValue: false,
              },
              {
                token: "1 ",
                isKey: false,
                isValue: false,
              },
              {
                token: "px ",
                isKey: false,
                isValue: false,
              },
              {
                token: "var",
                isKey: false,
                isValue: false,
              },
              {
                token: "(",
                isKey: false,
                isValue: false,
              },
              {
                token: "--",
                isKey: false,
                isValue: false,
              },
              {
                token: "bs-gray-200",
                isKey: false,
                isValue: true,
              },
              {
                token: ");",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "  ",
                isKey: false,
                isValue: false,
              },
              {
                token: "border-radius",
                isKey: true,
                isValue: false,
              },
              {
                token: ":",
                isKey: false,
                isValue: false,
              },
              {
                token: " ",
                isKey: false,
                isValue: false,
              },
              {
                token: ".25",
                isKey: false,
                isValue: true,
              },
              {
                token: "rem",
                isKey: false,
                isValue: false,
              },
              {
                token: ";",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "}",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: ".component-header",
                isKey: false,
                isValue: false,
              },
              {
                token: "{",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "  ",
                isKey: false,
                isValue: false,
              },
              {
                token: "color",
                isKey: true,
                isValue: false,
              },
              {
                token: ":",
                isKey: false,
                isValue: false,
              },
              {
                token: " ",
                isKey: false,
                isValue: false,
              },
              {
                token: "var",
                isKey: false,
                isValue: false,
              },
              {
                token: "(",
                isKey: false,
                isValue: false,
              },
              {
                token: "--",
                isKey: false,
                isValue: false,
              },
              {
                token: "bs-purple",
                isKey: false,
                isValue: true,
              },
              {
                token: ")",
                isKey: false,
                isValue: false,
              },
              {
                token: ";",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
                isKey: false,
                isValue: false,
              },
            ],
          },
          {
            tokens: [
              {
                token: "}",
                isKey: false,
                isValue: false,
              },
            ],
          },
        ]}
      />
    </CodeSnippet>
  );
};

export const UsingVariables = () => {
  const { css } = useFela();
  return (
    <Column
      lg={6}
      className={`${css({ marginBottom: "1rem" })} using-variables-column`}
    >
      <ColumnHeader as="h3">Using CSS variables</ColumnHeader>
      <Description />
      <ScssVariablesExample />
    </Column>
  );
};
