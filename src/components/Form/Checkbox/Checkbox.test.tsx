import { IRenderer } from "fela";
import { Checkbox } from "./Checkbox";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/Checkbox/Checkbox", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a checkbox correctly", async () => {
    const component = <Checkbox label="Checkbox" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-control-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("form-control-checkbox")).toHaveClass(
      "form-check",
    );

    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveTextContent("Checkbox");

    expect(screen.queryByTestId("checkbox-input")).not.toBeChecked();
    expect(
      (screen.queryByTestId("checkbox-input") as HTMLInputElement)
        .indeterminate,
    ).toBe(false);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a checkbox with an id and label", async () => {
    const component = <Checkbox id="foobar" label="Checkbox" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
    expect(screen.getByTestId("form-label")).toBeInTheDocument();

    expect(screen.getByTestId("checkbox-input")).toHaveAttribute(
      "id",
      "foobar",
    );
    expect(screen.getByTestId("form-label")).toHaveAttribute("for", "foobar");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a reverse checkbox", async () => {
    const component = <Checkbox id="foobar" label="Checkbox" reverse />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled checkbox", async () => {
    const component = <Checkbox disabled id="foobar" label="Checkbox" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
    expect(
      screen.getByTestId("checkbox-input") as HTMLInputElement,
    ).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
