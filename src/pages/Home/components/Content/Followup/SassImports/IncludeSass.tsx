import { Column } from "../../../../../../components/Flex";
import { Link } from "../../../../../../components/Link/Link";
import { ClipboardButton } from "../../components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../components/CodeSnippet/Highlight";
import { ColumnHeader } from "../../components/ColumnHeader";

export const SassCodeSnippet = () => (
  <CodeSnippet className="bd-code-snippet">
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: "// Variable overrides first",
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
              token: "$primary",
              isKey: false,
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
              token: "#900",
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
              token: "$enable-shadows",
              isKey: false,
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
              token: "true",
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
              token: "$prefix",
              isKey: false,
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
              token: '"mo-"',
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
              token: "\n\n",
              isKey: false,
              isValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/bootstrap"',
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
      ]}
    />
  </CodeSnippet>
);

export const LeadContent = () => (
  <p>
    Import one stylesheet and you&apos;re off to the races with every feature of
    our CSS.
  </p>
);

export const BodyContent = () => (
  <p>
    Learn more about our{" "}
    <Link href="/docs/5.3/customize/options/">global Sass options</Link>
    {"."}
  </p>
);

export const IncludeEverything = () => (
  <Column lg={6}>
    <ColumnHeader as="h3" style={{ fontWeight: 500 }}>
      Include all of Bootstrap{"'"}s Sass
    </ColumnHeader>
    <LeadContent />
    <SassCodeSnippet />
    <BodyContent />
  </Column>
);
