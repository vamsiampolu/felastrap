import { TocList } from "../../../components/TocList/TocList";
import { TocListItem } from "../../../components/TocList/TocListItem";
import { TocNestedListItem } from "../../../components/TocList/TocNestedListItem";
import { Wrapper } from "../../../components/TocList/Wrapper";

export const TableOfContents = () => (
  <Wrapper>
    <TocList>
      <TocListItem href="#what-is-rfs">What is RFS{"?"}</TocListItem>
      <TocNestedListItem href="#using-rfs" label="Using RFS">
        <TocListItem href="#using-the-mixins">Using the mixins</TocListItem>
        <TocListItem href="#using-the-functions">
          Using the functions
        </TocListItem>
      </TocNestedListItem>
      <TocListItem href="#extended-documentation">
        Extended Documentation
      </TocListItem>
    </TocList>
  </Wrapper>
);
