import { useFela } from "react-fela";
import { DivProps } from "../common";
import { Content } from "../Collapse/Content";

const flushBody = ({ flush = false }) => {
  return flush ? { borderWidth: 0 } : {};
};

const rule = () => ({
  padding: "1rem 1.25rem",
});

export type BodyProps = DivProps & { flush?: boolean };
export const Body = ({
  className = "",
  flush = false,
  children,
  ...other
}: BodyProps) => {
  const { css } = useFela({ flush });
  const cx = `${css([rule, flushBody])} panel-group-body ${className}`;
  return (
    <div data-testid="panel-group-body" className={cx} {...other}>
      {children}
    </div>
  );
};

export const BodyContainer = ({ className = "", id, ...props }: DivProps) => {
  return (
    <Content id={id}>
      <Body className={className} {...props} />
    </Content>
  );
};
