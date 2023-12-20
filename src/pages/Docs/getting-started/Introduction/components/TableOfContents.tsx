import { TocList } from "../../../components/TocList/TocList";
import { TocListItem } from "../../../components/TocList/TocListItem";
import { TocNestedListItem } from "../../../components/TocList/TocNestedListItem";
import { Wrapper } from "../../../components/TocList/Wrapper";

export const TableOfContents = ({ isOpen = false }: { isOpen?: boolean }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <TocList>
        <TocListItem href="#quick-start">Quick start</TocListItem>
        <TocListItem href="#cdn-links">CDN links</TocListItem>
        <TocListItem href="#next-steps">Next steps</TocListItem>
        <TocListItem href="#js-components">JS components</TocListItem>
        <TocNestedListItem label="Important globals" href="#important-globals">
          <TocListItem href="#html5-doctype">HTML5 doctype</TocListItem>
          <TocListItem href="#viewport-meta">Viewport meta</TocListItem>
          <TocListItem href="#viewport-meta">Viewport meta</TocListItem>
          <TocListItem href="#box-sizing">Box sizing</TocListItem>
          <TocListItem href="#reboot">Reboot</TocListItem>
        </TocNestedListItem>
        <TocListItem href="#community">Community</TocListItem>
      </TocList>
    </Wrapper>
  );
};
