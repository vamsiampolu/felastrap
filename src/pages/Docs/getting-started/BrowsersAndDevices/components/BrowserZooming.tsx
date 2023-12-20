import { Title } from "../../../components/Title";

export const Content = () => (
  <p>
    Page zooming inevitably presents rendering artifacts in some components,
    both in Bootstrap and the rest of the web. Depending on the issue, we may be
    able to fix it {"("}search first and then open an issue if need be{")."}
    However{","} we tend to ignore these as they often have no direct solution
    other than hacky workarounds{"."}
  </p>
);

export const BrowserZooming = () => (
  <>
    <Title
      id="browser-zooming"
      aria-label="Link to this section: Browser zooming"
    >
      Browser zooming
    </Title>
    <Content />
  </>
);
