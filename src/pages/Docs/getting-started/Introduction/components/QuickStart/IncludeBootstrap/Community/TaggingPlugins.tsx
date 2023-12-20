import { ElementType } from "react";
import { PolymorphicComponentPropsWithoutRef } from "../../../../../../../../polymorphicComponentProps";
import { Link } from "../../../../../../../../components/Link/Link";

const npm = (
  <Link href="https://www.npmjs.com/search?q=keywords:bootstrap">npm</Link>
);

export const TaggingPlugins = <T extends ElementType>({
  as,
}: PolymorphicComponentPropsWithoutRef<T>) => {
  const Component = as || "li";
  return (
    <Component>
      Developers should use the keyword <code>bootstrap</code> on packages that
      modify or add to the functionality of Bootstrap when distributing through{" "}
      {npm} or similar delivery mechanisms for maximum discoverability.
    </Component>
  );
};
