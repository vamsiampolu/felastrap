import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  cssReboot,
  createSnapshot,
} from "../test-helpers";
import { CloseButton } from "./CloseButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/CloseButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a close button", async () => {
    const component = <CloseButton />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("close-button")).toBeInTheDocument();
    expect(screen.queryByTestId("close-button")).toHaveClass("close-button");

    expect(screen.queryByTestId("close-button")).toHaveAccessibleName("Close");
    expect(screen.queryByTestId("close-button")?.tagName).toEqual("BUTTON");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a close button with a className", async () => {
    const component = <CloseButton className="close" />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("close-button")).toBeInTheDocument();
    expect(screen.queryByTestId("close-button")).toHaveClass("close");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a close button for an alert", async () => {
    const component = <CloseButton alert />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("close-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a close button for a modal", async () => {
    const component = <CloseButton modal />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("close-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke onClick prop when clicked", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    const component = (
      <Wrapper renderer={renderer}>
        <CloseButton onClick={onClick} />
      </Wrapper>
    );
    render(component);

    const btn = screen.queryByTestId("close-button");
    expect(btn).toBeInTheDocument();

    await user.click(btn!);
    expect(onClick).toHaveBeenCalled();
  });
});
