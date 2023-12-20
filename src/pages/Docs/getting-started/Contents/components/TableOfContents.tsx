import { TocList } from "../../../components/TocList/TocList";
import { TocListItem } from "../../../components/TocList/TocListItem";
import { TocNestedListItem } from "../../../components/TocList/TocNestedListItem";
import { Wrapper } from "../../../components/TocList/Wrapper";

export const TableOfContents = ({ isOpen = false }: { isOpen?: boolean }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <TocList>
        <TocNestedListItem
          href="#compiled-bootstrap"
          label="Compiled Bootstrap"
        >
          <TocListItem href="#css-files">CSS files</TocListItem>
          <TocListItem href="#js-files">JS files</TocListItem>
        </TocNestedListItem>
        <TocListItem href="#bootstrap-source-code">
          Bootstrap source code
        </TocListItem>
      </TocList>
    </Wrapper>
  );
};
