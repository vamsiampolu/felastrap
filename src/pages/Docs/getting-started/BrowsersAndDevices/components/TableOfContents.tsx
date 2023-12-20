import { TocList } from "../../../components/TocList/TocList";
import { TocListItem } from "../../../components/TocList/TocListItem";
import { TocNestedListItem } from "../../../components/TocList/TocNestedListItem";
import { Wrapper } from "../../../components/TocList/Wrapper";

export const TableOfContents = ({ isOpen = true }: { isOpen?: boolean }) => (
  <Wrapper isOpen={isOpen}>
    <TocList>
      <TocNestedListItem href="#supported-browsers" label="Supported browsers">
        <TocListItem href="#mobile-devices">Mobile devices</TocListItem>
        <TocListItem href="#desktop-browsers">Desktop browsers</TocListItem>
      </TocNestedListItem>
      <TocListItem href="#internet-explorer">Internet Explorer</TocListItem>
      <TocNestedListItem
        href="#modals-and-dropdowns-on-mobile"
        label="Modals and dropdowns on mobile"
      >
        <TocListItem href="#overflow-and-scrolling">
          Overflow and scrolling
        </TocListItem>
        <TocListItem href="#ios-text-fields-and-scrolling">
          iOS text fields and scrolling
        </TocListItem>
        <TocListItem href="#navbar-dropdowns">Navbar Dropdowns</TocListItem>
      </TocNestedListItem>
      <TocListItem href="#browser-zooming">Browser zooming</TocListItem>
      <TocListItem href="#validators">Validators</TocListItem>
    </TocList>
  </Wrapper>
);
