import expandShorthand from "fela-plugin-expand-shorthand";
import sortClassNames from "fela-sort-classnames";
import sortMediaQueryMobileFirst from "fela-sort-media-query-mobile-first";
import prefixer from "fela-plugin-prefixer";
import placeholderPrefixer from "fela-plugin-placeholder-prefixer";
import { createRenderer as createFelaRenderer, type IRenderer } from "fela";
import { lightTheme } from "../reboot/lightTheme";

export const createRenderer = () => {
  const autoMergeLonghands = true;
  const enhancers = [sortClassNames(), sortMediaQueryMobileFirst()];
  const plugins = [
    prefixer(),
    placeholderPrefixer(),
    expandShorthand(autoMergeLonghands),
  ];

  return createFelaRenderer({
    plugins,
    enhancers,
  });
};

export const cssReboot = (renderer: IRenderer) => {
  renderer.renderStatic(lightTheme);
};
