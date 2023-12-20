import { useFela } from "react-fela";
import { Button, ButtonProps } from "../Button";

export type ActionProps = Omit<ButtonProps<"button">, "outline" | "variant">;

const rule = () => ({
  position: "relative",
  zIndex: 2,
  ":focus": {
    zIndex: 5,
  },
});

const groupActionRule = () => ({
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
});

export const Action = ({ className = "", children, ...props }: ActionProps) => {
  const { css } = useFela();
  const cx = `${css([
    rule,
    groupActionRule,
  ])} segmented-button-action ${className}`.trim();

  return (
    <Button
      data-testid="segmented-button-action"
      className={cx}
      outline
      variant="secondary"
      {...props}
    >
      {children}
    </Button>
  );
};
