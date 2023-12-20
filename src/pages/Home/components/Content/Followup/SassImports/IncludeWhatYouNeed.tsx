import { Column } from "../../../../../../components/Flex";
import { Link } from "../../../../../../components/Link/Link";
import { ClipboardButton } from "../../components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../components/CodeSnippet/Highlight";

export const SassImportsCodeSnippet = () => (
  <CodeSnippet className="bd-code-snippet">
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: "// Functions first",
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/functions"',
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
              token: "// Variable overrides second",
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
              token: "#900",
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
              token: "$enable-shadows",
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
              token: "true",
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
              token: "$prefix",
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
              token: '"mo-"',
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
              token: "// Required Bootstrap imports",
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/variables"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/variables-dark"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/maps"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/mixins"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/root"',
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
              token: "// Optional components",
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/utilities"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/reboot"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/containers"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/grid"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/helpers"',
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
              token: "@import",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: '"../node_modules/bootstrap/scss/utilities/api"',
              isKey: false,
              isValue: false,
            },
          ],
        },
      ]}
    ></Highlight>
  </CodeSnippet>
);

const Header = () => <h3>Include what you need</h3>;
const LeadContent = () => (
  <p>The easiest way to customize Bootstrap—include only the CSS you need.</p>
);
const BodyContent = () => (
  <p>
    Learn more about{" "}
    <Link href="/docs/5.3/customize/sass/">using Bootstrap with Sass</Link>
    {"."}
  </p>
);

export const IncludeWhatYouNeed = () => (
  <Column lg={6}>
    <Header />
    <LeadContent />
    <SassImportsCodeSnippet />
    <BodyContent />
  </Column>
);
