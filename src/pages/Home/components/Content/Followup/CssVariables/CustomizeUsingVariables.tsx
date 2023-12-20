import { useFela } from "react-fela";
import { CodeSnippet } from "../../components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../components/CodeSnippet/Highlight";
import { Column } from "../../../../../../components/Flex";
import { ColumnHeader } from "../../components/ColumnHeader";
import { ClipboardButton } from "../../components/CodeSnippet/ClipboardButton";

export const Description = () => (
  <p>
    Override global, component, or utility class variables to customize
    Bootstrap just how you like. No need to redeclare each rule, just a new
    variable value.
  </p>
);

export const CustomizeUsingVariablesSnippet = () => (
  <CodeSnippet>
    <ClipboardButton />
    <Highlight
      language="scss"
      data-lang="scss"
      lines={[
        {
          tokens: [
            {
              token: "body",
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
              token: "--bs-body-font-family",
              isKey: true,
              isValue: false,
            },
            {
              token: ":",
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
              token: "bs-font-monospace",
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
              token: "--bs-body-line-height",
              isKey: true,
              isValue: false,
            },
            {
              token: ":",
              isKey: true,
              isValue: false,
            },
            {
              token: "1.4",
              isKey: true,
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
              token: "  ",
              isKey: false,
              isValue: false,
            },
            {
              token: "--bs-body-bg",
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
              token: "bs-gray-100",
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
              token: ".table",
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
              token: "--bs-table-color",
              isKey: true,
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
              token: "bs-gray-600",
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
              token: "--bs-table-bg",
              isKey: true,
              isValue: false,
            },
            {
              token: ":",
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
              token: "bs-gray-100",
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
              token: "--bs-table-border-color",
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
              token: "transparent",
              isKey: false,
              isValue: true,
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
    ></Highlight>
  </CodeSnippet>
);

export const CustomizeUsingVariables = () => {
  const { css } = useFela();
  return (
    <Column lg={6} className={css({ marginBottom: "1rem" })}>
      <ColumnHeader as="h3" className="customize-using-variables-column">
        Customizing via CSS variables
      </ColumnHeader>
      <Description />
      <CustomizeUsingVariablesSnippet />
    </Column>
  );
};
