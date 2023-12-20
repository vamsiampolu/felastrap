import { IRenderer } from "fela";
import { RadioLabel } from "./Label";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/RadioButtons/Label", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a radio button label", async () => {
    const component = (
      <RadioLabel htmlFor="radio-label">Radio Label</RadioLabel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveAttribute(
      "for",
      "radio-label",
    );

    expect(screen.queryByTestId("form-label")).toHaveTextContent("Radio Label");
    expect(screen.queryByTestId("form-label")).toHaveClass("form-check-label");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
  it("should render a disabled radio button label", async () => {
    const component = (
      <RadioLabel disabled htmlFor="radio-label">
        Radio Label
      </RadioLabel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveAttribute(
      "for",
      "radio-label",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
