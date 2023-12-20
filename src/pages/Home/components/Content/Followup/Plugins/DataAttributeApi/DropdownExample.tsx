import { Preview } from "../../../components/Preview";
import { DropdownMenu } from "../../../../../../../components/Dropdown";

export const DropdownExample = () => {
  return (
    <Preview>
      <DropdownMenu
        label="Dropdown"
        items={[
          {
            disabled: false,
            type: "item",
            text: "Dropdown item",
          },
          {
            disabled: false,
            type: "item",
            text: "Dropdown item",
          },
          {
            disabled: false,
            type: "item",
            text: "Dropdown item",
          },
        ]}
      />
    </Preview>
  );
};
