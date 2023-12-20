import { TocList } from "../../../components/TocList/TocList";
import { TocListItem } from "../../../components/TocList/TocListItem";
import { TocNestedListItem } from "../../../components/TocList/TocNestedListItem";
import { Wrapper } from "../../../components/TocList/Wrapper";

export const TableOfContents = () => (
  <Wrapper>
    <TocList>
      <TocListItem href="#individual-or-compiled">
        Individual or compiled
      </TocListItem>
      <TocListItem href="#usage-with-javascript-frameworks">
        Usage with JavaScript frameworks
      </TocListItem>
      <TocListItem href="#using-bootstrap-as-a-module">
        Using Bootstrap as a module
      </TocListItem>
      <TocListItem href="#dependencies">Dependencies</TocListItem>
      <TocListItem href="#data-attributes">Data attributes</TocListItem>
      <TocListItem href="#selectors">Selectors</TocListItem>
      <TocListItem href="#events">Events</TocListItem>
      <TocListItem href="#programmatic-api">Programmatic API</TocListItem>
      <TocListItem href="#methods-and-properties">
        Methods and properties
      </TocListItem>
      <TocListItem href="#sanitizer">Sanitizer</TocListItem>
      <TocNestedListItem
        href="#optionally-using-jquery"
        label="Optionally using jQuery"
      >
        <TocListItem href="#no-conflict">No conflict</TocListItem>
        <TocListItem href="#jquery-events">jQuery events</TocListItem>
      </TocNestedListItem>
      <TocListItem href="#disabled-javascript">Disabled JavaScript</TocListItem>
    </TocList>
  </Wrapper>
);
