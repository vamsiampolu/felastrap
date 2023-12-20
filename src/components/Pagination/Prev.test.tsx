import { IRenderer } from "fela";
import { Prev } from "./Prev";
import { createRenderer, cssReboot, Wrapper } from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Size } from "../common";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import userEvent from "@testing-library/user-event";

describe("components/Pagination/Prev", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each(["small", "medium", "large"])(
    "should render the prev component of size %s with the label Previous",
    async (size) => {
      const component = (
        <Prev size={size as Size} label="Previous" disabled={false} />
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("prev")).toBeInTheDocument();
      expect(screen.getByTestId("prev")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Previous");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render the prev component of size %s",
    async (size) => {
      const component = <Prev size={size as Size} disabled={false} />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("prev")).toBeInTheDocument();
      expect(screen.getByTestId("prev")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("«");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render a disabled prev component of size %s",
    async (size) => {
      const component = <Prev disabled={true} size={size as Size} />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("prev")).toBeInTheDocument();
      expect(screen.getByTestId("prev")?.tagName).toBe("LI");

      expect(screen.getByTestId("prev")).toHaveAttribute(
        "aria-disabled",
        "true",
      );
      expect(screen.getByTestId("page-link")).toHaveAttribute(
        "aria-disabled",
        "true",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should respond to click events on Prev", async () => {
    const onClick = jest.fn().mockImplementationOnce((e) => e.preventDefault());
    const component = <Prev onClick={onClick} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();

    render(wrappedComponent);
    const user = userEvent.setup();

    const prev = screen.getByTestId("page-link");
    expect(prev).toBeInTheDocument();

    await user.click(prev!);
    expect(onClick).toHaveBeenCalled();
  });
});
