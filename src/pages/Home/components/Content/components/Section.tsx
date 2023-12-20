import { useFela } from "react-fela";
import { Row } from "../../../../../components/Flex";
import { RowProps } from "../../../../../components/Flex/Row";

const rule = () => ({
  alignItems: "center !important",
  marginBottom: "3rem !important",
  "@media (min-width: 768px)": {
    paddingBottom: "3rem !important",
  },
});

export const Section = ({
  className,
  gutter = 3,
  children,
  ...props
}: RowProps<"section">) => {
  const { css } = useFela();
  const cx = `${css(rule)} section ${className}`.trim();
  return (
    <Row as="section" gutter={gutter} className={cx} {...props}>
      {children}
    </Row>
  );
};
