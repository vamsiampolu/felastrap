import { useFela } from "react-fela";
import { PargraphProps } from "../../../../../components/common";

const textWrap = () => ({ textWrap: "wrap !important" });
const w67 = () => ({ width: "66.667% !important" });

const leadContentRule = () => ({
  "@media ((min-width: 768px)": {
    fontSize: "1.25rem",
    fontWeight: 400,
    marginBottom: "1rem",
    marginTop: 0,
  },
});

export const DetailsLead = ({ className = "", children }: PargraphProps) => {
  const { css } = useFela();
  const cx = `${css([
    leadContentRule,
    textWrap,
    w67,
  ])} details-lead ${className}`;
  return <p className={cx}>{children}</p>;
};
