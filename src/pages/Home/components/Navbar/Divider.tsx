import { useFela } from "react-fela";

const rule = () => ({
  "@media (min-width: 992px)": {
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
    display: "flex",
    color: "rgba(255, 255, 255, 1)",
    height: "100%",
    width: "1px",
    minHeight: "1px",
    backgroundColor: "currentcolor",
    opacity: 0.25,
  },
});

export const Divider = () => {
  const { css } = useFela();
  return <div className={css(rule)} />;
};
