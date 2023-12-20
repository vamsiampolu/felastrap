import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import expandShorthand from "fela-plugin-expand-shorthand";
import sortClassNames from "fela-sort-classnames";
import sortMediaQueryMobileFirst from "fela-sort-media-query-mobile-first";
import prefixer from "fela-plugin-prefixer";
import { lightTheme } from "../src/reboot/lightTheme";

const autoMergeLonghands = true;
const renderer = createRenderer({
  plugins: [prefixer(), expandShorthand(autoMergeLonghands)],
  enhancers: [sortClassNames(), sortMediaQueryMobileFirst()],
});

renderer.renderStatic(lightTheme);

export const FelaDecorator = (Story) => (
  <RendererProvider renderer={renderer}>
    <Story />
  </RendererProvider>
);

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [FelaDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
