import { ElementType } from "react";
import { Link } from "../../../../../../../../components/Link/Link";
import { PolymorphicComponentPropsWithoutRef as ComponentPropsWithoutRef } from "../../../../../../../../polymorphicComponentProps";

export const DiscordAndReddit = <T extends ElementType>({
  as,
}: ComponentPropsWithoutRef<T>) => {
  const Component = as || "li";
  return (
    <Component>
      Discuss, ask questions, and more on{" "}
      <Link href="https://discord.gg/bZUvakRU3M">the community Discord</Link> or{" "}
      <Link href="https://reddit.com/r/bootstrap">Bootstrap subreddit</Link>.
    </Component>
  );
};
