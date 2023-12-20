import { createRenderer as createFelaRenderer } from "fela";
import expandShorthand from "fela-plugin-expand-shorthand";
import placeholderPrefixer from "fela-plugin-placeholder-prefixer";
import prefixer from "fela-plugin-prefixer";
import sortClassNames from "fela-sort-classnames";
import sortMediaQueryMobileFirst from "fela-sort-media-query-mobile-first";

export const createRenderer = () => {
  const autoMergeLonghands = true;
  return createFelaRenderer({
    plugins: [
      prefixer(),
      placeholderPrefixer(),
      expandShorthand(autoMergeLonghands),
    ],
    enhancers: [sortClassNames(), sortMediaQueryMobileFirst()],
  });
};
