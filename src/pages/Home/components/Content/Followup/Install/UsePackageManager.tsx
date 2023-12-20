import { useFela } from "react-fela";
import { Column } from "../../../../../../components/Flex";
import { BoxSeamIcon } from "../../../../../../components/Icons/BoxSeamIcon";
import { ColumnHeader } from "../../components/ColumnHeader";
import { Link } from "../../../../../../components/Link/Link";
import {
  Highlight,
  LanguageTypes,
} from "../../components/CodeSnippet/Highlight";
import { CodeSnippet } from "../../components/CodeSnippet/CodeSnippet";
import { ClipboardButton } from "../../components/CodeSnippet/ClipboardButton";

const pkgColRule = () => ({
  "@media (min-width: 992px)": {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingRight: "3rem !important",
  },
});

const btnRule = () => ({
  position: "relative",
  top: "0.7rem",
});

export const NpmInstallSnippet = () => {
  const { css } = useFela();
  return (
    <CodeSnippet>
      <ClipboardButton className={css(btnRule)} />
      <Highlight
        language={"sh" as LanguageTypes}
        lines={[
          {
            tokens: [
              {
                token: "npm install bootstrap@5.3.2",
              },
            ],
          },
        ]}
      ></Highlight>
    </CodeSnippet>
  );
};

export const GemInstallSnippet = () => {
  const { css } = useFela();
  return (
    <CodeSnippet>
      <ClipboardButton className={css(btnRule)} />
      <Highlight
        language="sh"
        lines={[
          {
            tokens: [
              {
                token: "gem install bootstrap -v 5.3.2",
              },
            ],
          },
        ]}
      ></Highlight>
    </CodeSnippet>
  );
};

const Description = () => {
  const { css } = useFela();
  return (
    <p className={css({ paddingRight: "3rem" })}>
      Install Bootstrap{"'"}s source Sass and JavaScript files via npm,
      RubyGems, Composer, or Meteor. Package managed installs don’t include
      documentation or our full build scripts. You can also{" "}
      <Link href="https://github.com/twbs/examples/">
        use any demo from our Examples repo
      </Link>{" "}
      to quickly jumpstart Bootstrap projects.
    </p>
  );
};

export const ReadTheDocs = () => (
  <p>
    <Link href="/docs/5.3/getting-started/download/">
      Read our installation docs
    </Link>{" "}
    for more info and additional package managers.
  </p>
);

export const UsePackageManagers = () => {
  const { css } = useFela();
  return (
    <Column lg={6} className={css(pkgColRule)}>
      <BoxSeamIcon variant="secondary" />
      <ColumnHeader as="h3">Install via package manager</ColumnHeader>
      <Description />
      <NpmInstallSnippet />
      <GemInstallSnippet />
      <ReadTheDocs />
    </Column>
  );
};
