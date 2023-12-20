import { TocList } from "../../components/TocList/TocList";
import { TocListItem } from "../../components/TocList/TocListItem";
import { TocNestedListItem } from "../../components/TocList/TocNestedListItem";
import { Wrapper } from "../../components/TocList/Wrapper";

export const TableOfContents = () => {
  return (
    <Wrapper>
      <TocList>
        <TocNestedListItem
          href="#overview-and-limitations"
          label="Overview and limitations"
        >
          <TocListItem href="#structural-markup">Structural markup</TocListItem>
          <TocListItem href="#interactive-components">
            Interactive components
          </TocListItem>
          <TocListItem href="#color-contrast">Color contrast</TocListItem>
          <TocListItem href="#visually-hidden-content">
            Visually hidden content
          </TocListItem>
          <TocListItem href="#reduced-motion">Reduced motion</TocListItem>
        </TocNestedListItem>
        <TocListItem href="#additional-resources">
          Additional resources
        </TocListItem>
      </TocList>
    </Wrapper>
  );
};
