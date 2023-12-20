import { useFela } from "react-fela";

import { DropdownDivider } from "../Dropdown/DropdownDivider";
import { DropdownHeader } from "../Dropdown/DropdownHeader";
import { DropdownText } from "../Dropdown/DropdownText";
import { DropdownItem } from "../Dropdown/DropdownItem";

export type ItemProps = {
  type: "divider" | "header" | "text" | "item";
  index: number;
  text: string;
  disabled: boolean;
};

export const Item = ({
  type = "item",
  text,
  disabled = false,
  index,
}: ItemProps) => {
  const { css } = useFela();
  const firstItem = index === 0;

  const headerClassName = css({
    marginTop: firstItem ? "-0.2rem" : "0.2rem",
    paddingTop: firstItem ? 0 : "-0.5rem",
  });

  const key = `dropdown-menu-${type}-${index}`;
  switch (type) {
    case "divider":
      return <DropdownDivider key={key} />;
    case "header":
      return (
        <DropdownHeader className={headerClassName} key={key}>
          {text}
        </DropdownHeader>
      );
    case "text":
      return <DropdownText key={key}>{text}</DropdownText>;
    default:
      return <DropdownItem label={text} key={key} disabled={disabled} />;
  }
};
