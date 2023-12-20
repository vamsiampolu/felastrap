import { useFela } from "react-fela";
import { ColumnHeader } from "../../components/ColumnHeader";
import { BundlerGuides } from "./Bundlers";
import { Column } from "../../../../../../components/Flex";

const GuideDescription = () => (
  <p>
    Get a jump on including Bootstrap&apos;s source files in a new project with
    our official guides.
  </p>
);

const guidesColRule = () => ({
  marginRight: "auto",
  marginLeft: "auto",
  textAlign: "center",
});

export const Guides = () => {
  const { css } = useFela();
  return (
    <Column md={8} className={css(guidesColRule)}>
      <ColumnHeader as="h4">Read our getting started guides</ColumnHeader>
      <GuideDescription />
      <BundlerGuides />
    </Column>
  );
};
