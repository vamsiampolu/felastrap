import { useFela } from "react-fela";
import { ClipboardButton } from "../components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../components/CodeSnippet/CodeSnippet";
import { Highlight } from "../components/CodeSnippet/Highlight";

const btnRule = () => ({
  position: "relative",
  top: "0.25rem",
});

export const InstallButton = () => {
  const { css } = useFela();
  const cx = `${css(btnRule)} install-btn-copy`;
  return (
    <CodeSnippet>
      <ClipboardButton className={cx} />
      <Highlight
        className={css({
          paddingTop: "0.25rem !important",
          paddingBottom: "0.25rem !important",
        })}
        language="sh"
        lines={[
          {
            tokens: [
              {
                token: " npm i bootstrap@5.3.2",
              },
            ],
          },
        ]}
      />
    </CodeSnippet>
  );
};
