import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";
import { Variant } from "../common";
import { GlobeIcon2 } from "./GlobeIcon2";

describe("components/Icons/GlobeIcon2", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  const variants = [
    "default",
    "info",
    "danger",
    "primary",
    "secondary",
    "success",
    "warning",
  ];
  it.each(variants)(
    "should render a globe icon of variant %s",
    async (variant) => {
      const component = <GlobeIcon2 variant={variant as Variant} />;
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
