import { useFela } from "react-fela";
import { InstallButton } from "./InstallButton";
import { DocsButton } from "./DocsButton";

const rule = () => ({
  marginBottom: "1.5rem",
  display: "flex",
  textAlign: "center",
  "@media (min-width: 992px)": {
    flexDirection: "row",
  },
  "@media (min-width: 768px)": {
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export const HeroDetails = () => {
  const { css } = useFela();
  const cx = `${css(rule)} hero-details`;
  return (
    <div className={cx} style={{ gap: "1rem" }}>
      <InstallButton />
      <DocsButton />
    </div>
  );
};
