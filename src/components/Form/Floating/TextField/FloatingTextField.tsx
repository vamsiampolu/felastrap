import { useFela } from "react-fela";
import type { DivProps, StyleProps } from "../../../common";
import { FloatingTextContext } from "./FloatingTextContext";
import { useFloatingTextField } from "./useFloatingTextField";

type RuleProps = StyleProps<{ group: boolean }>;
export type FloatingTextFieldProps = DivProps & {
  id: string;
  text?: string;
  disabled?: boolean;
  readOnly?: boolean;
  plainText?: boolean;
  value?: string;
};

const rule = () => ({
  display: "block",
  position: "relative",
  marginBottom: "1rem !important",
});

const groupRule = ({ group }: RuleProps) =>
  group
    ? {
        position: "relative",
        flex: "1 1 auto",
        width: "1%",
        minWidth: 0,
        ":focus-within": {
          zIndex: 5,
        },
      }
    : {};

export const FloatingTextField = ({
  className = "",
  children,
  disabled = false,
  readOnly = false,
  plainText = false,
}: FloatingTextFieldProps) => {
  const value = useFloatingTextField({ disabled, readOnly, plainText });
  const { css } = useFela({ group: value.group });
  const cx = `${css([rule, groupRule])} form-floating ${className}`.trim();

  return (
    <div data-testid="floating-text-field" className={cx}>
      <FloatingTextContext.Provider value={value}>
        {children}
      </FloatingTextContext.Provider>
    </div>
  );
};
