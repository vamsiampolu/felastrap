import { GroupButton, GroupButtonProps } from "../../InputGroup/GroupButton";
import { useFela } from "react-fela";

const floatingRule = () => ({
  height: "calc(3.5rem + 2px)",
  minHeight: "calc(3.5rem + 2px)",
});

export const FloatingGroupButton = ({
  className = "",
  children,
  ...props
}: GroupButtonProps<"button">) => {
  const { css } = useFela();
  return (
    <GroupButton
      className={`${css(
        floatingRule,
      )} floating-input-group-button ${className}`.trim()}
      {...props}
    >
      {children}
    </GroupButton>
  );
};
