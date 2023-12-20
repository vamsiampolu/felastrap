import { IRenderer } from "fela";
import { CheckboxLabel } from "./Label";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/Checkbox/Label", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a label", async () => {
    const component = (
      <CheckboxLabel htmlFor="cb-label">Checkbox Label</CheckboxLabel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveAttribute(
      "for",
      "cb-label",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
  it("should render a label for a disabled checkbox", async () => {
    const component = (
      <CheckboxLabel htmlFor="cb-label" disabled>
        Checkbox Label
      </CheckboxLabel>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("form-label")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
