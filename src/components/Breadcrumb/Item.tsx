import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import { Link, type LinkProps } from "../Link/Link";
import { ActiveItem } from "./ActiveItem";
import { Divider } from "./Divider";
export type ItemProps = ComponentPropsWithoutRef<"li"> & {
  label: string;
} & Pick<LinkProps, "onClick" | "href" | "target" | "rel"> &
  Partial<{
    active: boolean;
    divider: string;
    first: boolean;
  }>;

const FirstItem = ({ href, label }: Omit<ItemProps, "first" | "divider">) => {
  return (
    <li className="breadcrumb-first-item" data-testid="breadcrumb-first-item">
      <Link href={href}>{label}</Link>
    </li>
  );
};

export const Item = ({
  first = false,
  active = false,
  label,
  href,
  divider = "/",
  title = "",
  ...other
}: ItemProps) => {
  const { css } = useFela();
  const className = css({ paddingLeft: "0.5rem" });

  if (first) {
    return <FirstItem label={label} href={href} />;
  }

  if (active) {
    return <ActiveItem label={label} divider={divider} />;
  }

  return (
    <li data-testid="breadcrumb-item" className={className} {...other}>
      <Divider divider={divider} />
      <Link href={href} title={title}>
        {label}
      </Link>
    </li>
  );
};
