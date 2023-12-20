import { ElementType } from "react";
import { Link } from "../../../../../../../../components/Link/Link";
import { PolymorphicComponentPropsWithoutRef } from "../../../../../../../../polymorphicComponentProps";

export const TaggingQuestions = <T extends ElementType = "li">({
  as,
}: PolymorphicComponentPropsWithoutRef<T>) => {
  const Component = as || "li";
  return (
    <Component>
      Implementation help may be found at Stack Overflow (tagged{" "}
      <Link href="https://stackoverflow.com/questions/tagged/bootstrap-5">
        <code>bootstrap-5</code>
      </Link>
      ){"."}
    </Component>
  );
};
