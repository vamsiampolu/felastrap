declare module "fela-sort-classnames" {
  import * as Fela from "fela";
  type Enhancer = Fela.TEnhancer;
  export default function sortClassNames(): Enhancer;
}
