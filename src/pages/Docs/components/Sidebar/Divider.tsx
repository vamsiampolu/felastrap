import { useFela } from "react-fela";

const dividerRule = () => ({
  marginBottom: "1rem",
  marginTop: "0.25rem",
  marginRight: "1.5rem",
  marginLeft: "1.5rem",
  borderTop: "1px solid #dee2e6",
});

export const Divider = () => {
  const { css } = useFela();
  return <li className={`${css(dividerRule)} bd-links-span-all`}></li>;
};
