import type { IRenderer } from "fela";
import { type PropsWithChildren } from "react";
import { RendererProvider, ThemeProvider } from "react-fela";

const Wrapper = ({
  renderer,
  theme = {},
  children,
}: PropsWithChildren<{ renderer: IRenderer; theme?: object }>) => (
  <ThemeProvider theme={theme}>
    <RendererProvider renderer={renderer}>{children}</RendererProvider>;
  </ThemeProvider>
);

export { Wrapper };
