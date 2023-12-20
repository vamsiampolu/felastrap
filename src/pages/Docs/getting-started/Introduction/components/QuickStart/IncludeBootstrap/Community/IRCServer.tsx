import { ElementType } from "react";
import { PolymorphicComponentPropsWithoutRef } from "../../../../../../../../polymorphicComponentProps";

export const IRCServer = <T extends ElementType>({
  as,
}: PolymorphicComponentPropsWithoutRef<T>) => {
  const Component = as || "li";
  return (
    <Component>
      Chat with fellow Bootstrappers in IRC. On the{" "}
      <code>
        irc{"."}libera{"."}chat
      </code>{" "}
      server, in the <code>#bootstrap</code> channel.
    </Component>
  );
};
