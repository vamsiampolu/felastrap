import { IRenderer } from "fela";
import {
  createRenderer,
  cssReboot,
  createSnapshot,
  createUserEventSnapshot,
  Wrapper,
} from "../../test-helpers";
import { Control } from "./Control";
import userEvent from "@testing-library/user-event";
import { IconName } from "./Icon";
import { render, screen } from "@testing-library/react";

describe("components/Carousel/Control", () => {
  let renderer: IRenderer;
  const noop = () => undefined;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the Next Control", async () => {
    const component = <Control name="next" label="Next" onClick={noop} />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled Next Control", async () => {
    const component = (
      <Control disabled name="next" label="Next" onClick={noop} />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the Prev Control", async () => {
    const component = <Control name="prev" label="Prev" onClick={noop} />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled Prev Control", async () => {
    const component = (
      <Control disabled name="prev" label="Prev" onClick={noop} />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["next", "prev"])(
    "should render a hovered %s control",
    async (name) => {
      const component = (
        <Control name={name as IconName} label="Prev" onClick={noop} />
      );
      const snapshot = await createUserEventSnapshot({
        eventName: "hover",
        testId: "carousel-control",
        component,
        renderer,
      });

      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["next", "prev"])(
    "should render a focused %s control",
    async (name) => {
      const component = (
        <Control name={name as IconName} label="Prev" onClick={noop} />
      );
      const snapshot = await createUserEventSnapshot({
        eventName: "focus",
        testId: "carousel-control",
        component,
        renderer,
      });

      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["next", "prev"])(
    "should have a className carousel-control-%s",
    (name) => {
      const component = (
        <Control name={name as IconName} label="Prev" onClick={noop} />
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.queryByTestId("carousel-control")).toHaveClass(
        `carousel-control-${name}`,
      );
    },
  );

  it("should invoke the onClick prop when control is clicked", async () => {
    const onClick = jest.fn().mockImplementation(noop);

    const component = <Control name="prev" label="Prev" onClick={onClick} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    const user = userEvent.setup();
    render(wrappedComponent);

    const control = screen.queryByTestId("carousel-control");
    await user.click(control!);

    expect(onClick).toHaveBeenCalled();
  });
});
