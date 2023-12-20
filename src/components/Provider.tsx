import { IRenderer } from "fela";
import { PropsWithChildren } from "react";
import { RendererProvider, ThemeProvider } from "react-fela";

export type ProviderProps = PropsWithChildren<{
  renderer: IRenderer;
  theme?: object;
}>;

const Provider = ({ renderer, children, theme = {} }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RendererProvider renderer={renderer}>{children}</RendererProvider>;
    </ThemeProvider>
  );
};

export { Provider };
