import { ReactNode } from "react";
import { Divider } from "./Divider";
import { Title } from "./Title";
import { Wrapper } from "./Wrapper";

export type TableOfContentsProps = {
  className?: string;
  title?: string;
  children: ReactNode;
};

export const TableOfContents = ({
  className = "",
  title = "On this page",
  children,
}: TableOfContentsProps) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <Divider />
      {children}
    </Wrapper>
  );
};
