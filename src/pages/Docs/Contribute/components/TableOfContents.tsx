import { TocList } from "../../components/TocList/TocList";
import { TocListItem } from "../../components/TocList/TocListItem";
import { Wrapper } from "../../components/TocList/Wrapper";

export const TableOfContents = () => (
  <TocList>
    <Wrapper>
      <TocListItem href="#tooling-setup" className="">
        Tooling setup
      </TocListItem>
      <TocListItem href="#using-npm-scripts" className="active">
        Using npm scripts
      </TocListItem>
      <TocListItem href="#sass">Sass</TocListItem>
      <TocListItem href="#autoprefixer">Autoprefixer</TocListItem>
      <TocListItem href="#rtlcss">RTLCSS</TocListItem>
      <TocListItem href="#local-documentation">Local documentation</TocListItem>
      <TocListItem href="#troubleshooting">Troubleshooting</TocListItem>
    </Wrapper>
  </TocList>
);
