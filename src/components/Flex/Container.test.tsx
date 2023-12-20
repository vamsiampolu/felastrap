import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Container } from "./Container";
import { render, screen } from "@testing-library/react";

describe("components/Flex/Container", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a container", async () => {
    const component = (
      <Container>
        <div>Hello</div>
      </Container>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByTestId("container")).toHaveClass("container");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a container with a className and id", async () => {
    const component = (
      <Container className="test-container" id="test-page">
        <div>Hello</div>
      </Container>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("container")).toBeInTheDocument();

    expect(screen.getByTestId("container")).toHaveClass("test-container");
    expect(screen.getByTestId("container")).toHaveAttribute("id", "test-page");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["sm", "md", "lg", "xl", "xxl"])(
    "should have max-width based on min breakpoint %s",
    async (breakpoint) => {
      const props = {
        className: "test-container",
        id: "test-page",
        [breakpoint]: true,
      };

      const component = (
        <Container {...props}>
          <div>Hello</div>
        </Container>
      );
      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should throw an error if more than one breakpoint is provided", () => {
    const wrappedComponent = (
      <Wrapper renderer={renderer}>
        <Container md xl>
          <div>Hello</div>
        </Container>
      </Wrapper>
    );
    jest.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() => render(wrappedComponent)).toThrow(
      "Only one of sm, md, lg, xl, xxl must be set",
    );
  });
});
