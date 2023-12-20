import { TocList } from "../../../components/TocList/TocList";
import { TocListItem } from "../../../components/TocList/TocListItem";
import { TocNestedListItem } from "../../../components/TocList/TocNestedListItem";
import { Wrapper } from "../../../components/TocList/Wrapper";

export const TableOfContents = ({ isOpen = false }: { isOpen?: boolean }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <TocList>
        <TocListItem href="#compiled-css-and-js">
          Compiled CSS and JS
        </TocListItem>
        <TocListItem href="#source-files">Source files</TocListItem>
        <TocListItem href="#examples">Examples</TocListItem>
        <TocNestedListItem href="#cdn-via-jsdelivr" label="CDN via jsDelivr">
          <TocListItem href="#alternative-cdns">Alternative CDNs</TocListItem>
        </TocNestedListItem>
        <TocNestedListItem href="#package-managers" label="Package managers">
          <TocListItem href="#npm">npm</TocListItem>
          <TocListItem href="#yarn">yarn</TocListItem>
          <TocListItem href="#rubygems">RubyGems</TocListItem>
          <TocListItem href="#composer">Composer</TocListItem>
          <TocListItem href="#nuget">NuGet</TocListItem>
        </TocNestedListItem>
      </TocList>
    </Wrapper>
  );
};
