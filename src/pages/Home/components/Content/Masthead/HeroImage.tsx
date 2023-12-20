import { useFela } from "react-fela";
import { mediaQueryByName } from "../../../../../components/Flex/mediaQuery";
import logo from "../../../../../assets/bootstrap-logo-shadow.png";

const rule = () => ({
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: "1rem",
  display: "none",
  [mediaQueryByName.sm]: {
    display: "block",
  },
});

export const HeroImage = () => {
  const { css } = useFela();
  const cx = `${css(rule)} hero-image`;
  return (
    <img
      src={logo}
      width={200}
      height={165}
      alt="Bootstrap"
      className={cx}
    ></img>
  );
};
