import { useFela } from "react-fela";
import { Button } from "../../../components/Button";

const rule = () => ({
  display: "flex",
  marginBottom: "1rem",
  whiteSpace: "nowrap",
  "@media (min-width: 768px)": {
    marginBottom: 0,
  },
});

const viewGhRule = () => ({
  color: "#6c757d",
  borderRadius: "0.375rem",
  backgroundColor: "transparent",
  ":active": {
    color: "#9461fb",
    backgroundColor: "#fff",
    borderColor: "#9461fb",
  },
  ":hover": {
    color: "#9461fb",
    borderColor: "#9461fb",
  },
});

const GhButton = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const cx = `${css(viewGhRule)} view-github-button ${className}`.trim();
  return (
    <Button
      size="small"
      as="a"
      className={cx}
      href="https://github.com/twbs/bootstrap/blob/v5.3.2/site/content/docs/5.3/getting-started/introduction.md"
      title="View and edit this file on GitHub"
      target="_blank"
      rel="noopener"
    >
      View on GitHub
    </Button>
  );
};

export const ViewOnGithub = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const cx = `${css(rule)} view-on-github ${className}`;

  return (
    <div className={cx}>
      <GhButton />
    </div>
  );
};
