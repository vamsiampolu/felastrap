import { useFela } from "react-fela";
import { Link } from "../../../../../../components/Link/Link";
import { CodeSnippet } from "../../components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../components/CodeSnippet/Highlight";
import { Column } from "../../../../../../components/Flex";
import { ColumnHeader } from "../../components/ColumnHeader";
import { GlobeIcon2 } from "../../../../../../components/Icons/GlobeIcon2";

const cdnColumnRule = () => ({
  "@media (min-width: 992px)": {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingLeft: "3rem !important",
    borderLeft: "1px solid #dee2e6",
  },
});

const Separately = () => (
  <Link href="/docs/5.3/getting-started/introduction/#separate">
    separately
  </Link>
);

const JsDelivr = () => (
  <Link href="https://www.jsdelivr.com/package/npm/bootstrap">jsDelivr</Link>
);

const QuickStart = () => (
  <Link href="/docs/5.3/getting-started/introduction/#quick-start">
    quick start
  </Link>
);

const BrowseTheExamples = () => (
  <Link href="/docs/5.3/examples/">browse the examples</Link>
);

const LinkCodeSnippet = () => (
  <CodeSnippet>
    <Highlight
      language="html"
      lines={[
        {
          tokens: [
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "link",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "href",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "rel",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"stylesheet"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "integrity",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "crossorigin",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"anonymous"',
              isAttrValue: true,
            },
            {
              token: "/>",
              isAttrValue: false,
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

const ScriptCodeSnippet = () => (
  <CodeSnippet>
    <Highlight
      language="html"
      lines={[
        {
          tokens: [
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "script",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "src",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "integrity",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "crossorigin",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"anonymous"',
              isAttrValue: true,
            },
            {
              token: ">",
              isAttrValue: false,
            },
            {
              token: "</",
              isAttrValue: false,
            },
            {
              token: "script",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

const CdnDescription = () => {
  const { css } = useFela();
  return (
    <p className={css({ paddingRight: "3rem" })}>
      When you only need to include Bootstrap’s compiled CSS or JS, you can use{" "}
      <JsDelivr />
      {". "}See it in action with our simple <QuickStart />, or{" "}
      <BrowseTheExamples /> to jumpstart your next project. You can also choose
      to include Popper and our JS <Separately />.
    </p>
  );
};

export const UseCdn = () => {
  const { css } = useFela();
  return (
    <Column lg={6} className={`${css(cdnColumnRule)} use-cdn-column`}>
      <GlobeIcon2 variant="secondary" />
      <ColumnHeader as="h3">Include via CDN</ColumnHeader>
      <CdnDescription />
      <LinkCodeSnippet />
      <ScriptCodeSnippet />
    </Column>
  );
};
