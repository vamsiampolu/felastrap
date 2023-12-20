import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, Props = object> = keyof (AsProp<C> &
  Props);

type PolymorphicComponentPropsWithoutRef<
  C extends ElementType,
  Props = object,
> = PropsWithChildren<AsProp<C> & Props> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  Props = object,
> = PolymorphicComponentPropsWithoutRef<C, Props> & {
  ref?: PolymorphicRef<C>;
};

export type {
  PolymorphicComponentPropsWithoutRef,
  PolymorphicRef,
  PolymorphicComponentPropsWithRef,
};
