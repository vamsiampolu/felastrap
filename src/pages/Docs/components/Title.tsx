import { PropsWithChildren } from "react";
import { Header } from "../../../components/Header/Header";
import { AnchorLink } from "./AnchorLink";

export type TitleProps = PropsWithChildren<{
  id: string;
  "aria-label": string;
  small?: boolean;
}>;

export const Title = (props: TitleProps) => {
  const { id, children: label, small = false } = props;
  const as = small ? "h3" : "h2";
  const ariaLabel = props["aria-label"];
  return (
    <Header as={as} id={id}>
      {label} <AnchorLink href={`#${id}`} aria-label={ariaLabel} />
    </Header>
  );
};
