import { useFela } from "react-fela";
import { GroupText, type GroupTextProps } from "../../InputGroup/GroupText";

const floatingRule = () => ({
  height: "calc(3.5rem + 2px)",
  minHeight: "calc(3.5rem + 2px)",
});

export const FloatingGroupText = ({
  className = "",
  children,
  ...props
}: GroupTextProps) => {
  const { css } = useFela();
  return (
    <GroupText
      className={`${css(
        floatingRule,
      )} floating-input-group-text ${className}`.trim()}
      {...props}
    >
      {children}
    </GroupText>
  );
};
