import { ReactNode } from "react";
import { Callout } from "../../getting-started/Download/components/Callout";

export const Tldr = ({
  example,
  playground,
}: {
  example: ReactNode;
  playground: ReactNode;
}) => (
  <Callout variant="info">
    <strong>Want to skip to the end?</strong> Download the source code and
    working demo for this guide from the {example}. You can also {playground}{" "}
    for live editing.
  </Callout>
);
