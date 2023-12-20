import { PropsWithChildren, ReactNode } from "react";
import { useFela } from "react-fela";
import { Intro } from "./Intro";
import { TableOfContents } from "./TableOfContents/TableOfContents";

const rule = () => ({
  gridArea: "main",
  display: "grid",

  order: 1,
  overflowWrap: "break-word",
  textWrap: "wrap",
  "@media (min-width: 768px)": {
    gridTemplateAreas: '"intro" "toc" "content"',
    gridTemplateRows: "auto auto 1fr",
    gap: "inherit",
  },
  "@media (min-width: 992px)": {
    gridTemplateAreas: `
    "intro   toc"
    "content toc"
`
      .split("\n")
      .map((l) => l.trim())
      .join("\n"),
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "4fr 1fr",
  },
});

export type ContentProps = PropsWithChildren<{
  className?: string;
  title: ReactNode;
  description: ReactNode;
  toc: ReactNode;
}>;

export const Content = ({
  className = "",
  title,
  description,
  toc,
  children,
}: ContentProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} main ${className}`.trim();

  return (
    <main className={cx}>
      <Intro title={title} description={description} />
      <TableOfContents>{toc}</TableOfContents>
      {children}
    </main>
  );
};
