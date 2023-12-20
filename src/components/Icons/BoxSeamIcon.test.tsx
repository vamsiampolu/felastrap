import { IRenderer } from "fela";
import { createSnapshot, createRenderer, cssReboot } from "../../test-helpers";
import { BoxSeamIcon } from "./BoxSeamIcon";
import { Variant } from "../common";

describe("components/Icons/BookSeamIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each([
    "default",
    "info",
    "danger",
    "primary",
    "secondary",
    "success",
    "warning",
  ])("should render a box seam icon of variant %s", async (variant) => {
    const component = <BoxSeamIcon variant={variant as Variant} />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
