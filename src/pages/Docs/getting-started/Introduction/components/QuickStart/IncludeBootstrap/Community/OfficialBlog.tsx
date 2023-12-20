import { ElementType } from "react";
import { PolymorphicComponentPropsWithoutRef } from "../../../../../../../../polymorphicComponentProps";

export const OfficialBlog = <T extends ElementType>({
  as,
}: PolymorphicComponentPropsWithoutRef<T>) => {
  const Component = as || "li";
  return (
    <Component>
      Read and subscribe to{" "}
      <a href="https://blog.getbootstrap.com/">The Official Bootstrap Blog</a>
      {"."}
    </Component>
  );
};
