import type { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type Align = "left" | "center" | "right";

export type BlockquoteProps = ComponentPropsWithoutRef<"blockquote"> & {
  text: string;
  attribution?: string;
  align?: Align;
  source?: string;
};

const rule = () => ({
  margin: "0 0 1rem",
  marginBottom: "1rem",
  fontSize: "1.25rem",
  "> :last-child": {
    marginBottom: 0,
  },
});

const captionRule = () => ({
  marginTop: "-1rem",
  marginBottom: "1rem",
  fontSize: "0.875em",
  color: "#6c757d",
  "::before": {
    content: '"- "',
  },
});

export const Blockquote = ({
  text,
  attribution = "",
  align = "left",
  className = "",
  source = "",
}: BlockquoteProps) => {
  const { css } = useFela({ align });
  const quoteClassName = `${css(rule)} ${className}`.trim();

  if (attribution) {
    return (
      <figure
        data-testid="blockquote-figure"
        className={css({ textAlign: align })}
      >
        <blockquote data-testid="blockquote" className={quoteClassName}>
          <p data-testid="blockquote-text">{text}</p>
        </blockquote>
        <figcaption
          data-testid="blockquote-attribution"
          className={css(captionRule)}
        >
          {attribution}
          {source ? (
            <>
              {" "}
              <cite data-testid="blockquote-source" title={source}>
                {source}
              </cite>
            </>
          ) : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <blockquote data-testid="blockquote" className={quoteClassName}>
      <p>{text}</p>
    </blockquote>
  );
};
