import { IRenderer } from "fela";
import { ToggleButton } from "./ToggleButton";
import { Wrapper, createRenderer, createSnapshot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Accordion/ToggleButton", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it("should render a ToggleButton", async () => {
    const component = <ToggleButton>Toggle Button</ToggleButton>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-toggle-button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the first ToggleButton", async () => {
    const component = <ToggleButton first>Toggle Button</ToggleButton>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-toggle-button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open last ToggleButton", async () => {
    const component = (
      <ToggleButton last isOpen>
        Toggle Button
      </ToggleButton>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-toggle-button")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last ToggleButton", async () => {
    const component = <ToggleButton last>Toggle Button</ToggleButton>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-toggle-button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open ToggleButton", async () => {
    const component = <ToggleButton isOpen>Toggle Button</ToggleButton>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-toggle-button")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
