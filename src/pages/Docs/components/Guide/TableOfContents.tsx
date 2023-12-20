import { ReactNode } from "react";
import { Wrapper } from "../TocList/Wrapper";
import { TocList } from "../TocList/TocList";
import { TocListItem } from "../TocList/TocListItem";

export const TableOfContents = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => (
  <Wrapper>
    <TocList>
      <TocListItem href="#setup">Setup</TocListItem>
      <TocListItem href="#project-structure">Project structure</TocListItem>
      <TocListItem href="#configure-parcel">Configure {name}</TocListItem>
      <TocListItem href="#import-bootstrap">Import Bootstrap</TocListItem>
      {children}
    </TocList>
  </Wrapper>
);
