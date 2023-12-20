import { ElementType, useContext } from "react";
import { CollapseContext } from "./CollapseContext";
import { PolymorphicComponentPropsWithoutRef } from "../../polymorphicComponentProps";
export const Target = <T extends ElementType = "div">({
  as,
  ...props
}: PolymorphicComponentPropsWithoutRef<T>) => {
  const { toggleCollapse } = useContext(CollapseContext);
  const Component = as || "div";
  return (
    <Component
      data-testid="collapse-target"
      onClick={toggleCollapse}
      {...props}
    />
  );
};
