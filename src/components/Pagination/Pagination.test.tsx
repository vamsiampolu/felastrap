import { IRenderer } from "fela";
import { Pagination } from "./Pagination";
import {
  createRenderer,
  cssReboot,
  Wrapper,
  createSnapshot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Size } from "../common";
import userEvent from "@testing-library/user-event";

describe("components/Pagination", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a pagination component", async () => {
    const component = (
      <Pagination
        disabledPages={[]}
        size="medium"
        previous={{ disabled: false, show: true }}
        next={{ disabled: false, show: true }}
        page={1}
        start={1}
        end={5}
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    const wrapper = screen.queryByTestId("pagination-wrapper");
    const items = screen.queryAllByTestId("page-item");

    const prev = screen.queryByTestId("prev");
    const next = screen.queryByTestId("next");

    expect(wrapper).toBeInTheDocument();
    expect(items).toHaveLength(5);

    expect(prev).toBeInTheDocument();
    expect(next).toBeInTheDocument();

    expect(prev?.textContent).toBe("«");
    expect(next?.textContent).toBe("»");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a pagination component with labels", async () => {
    const component = (
      <Pagination
        disabledPages={[]}
        size="medium"
        page={1}
        start={1}
        end={5}
        previous={{
          disabled: false,
          label: "Previous",
          show: true,
        }}
        next={{
          label: "Next",
          disabled: false,
          show: true,
        }}
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    const wrapper = screen.queryByTestId("pagination-wrapper");
    const items = screen.queryAllByTestId("page-item");

    const prev = screen.queryByTestId("prev");
    const next = screen.queryByTestId("next");

    expect(wrapper).toBeInTheDocument();
    expect(prev).toBeInTheDocument();
    expect(next).toBeInTheDocument();

    expect(items).toHaveLength(5);
    expect(items.map((item) => item.textContent)).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
    ]);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should disable prev when on the first page", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Pagination
          disabledPages={[]}
          size="medium"
          previous={{ disabled: false, show: true }}
          next={{ disabled: false, show: true }}
          page={1}
          start={1}
          end={5}
        />
      </Wrapper>
    );

    render(component);
    expect(screen.queryByTestId("prev")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("should set the selected item as active", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Pagination
          disabledPages={[]}
          size="medium"
          previous={{ disabled: false, show: true }}
          next={{ disabled: false, show: true }}
          page={1}
          start={1}
          end={5}
        />
      </Wrapper>
    );

    render(component);
    const items = screen.queryAllByTestId("page-item");
    expect(items[0]).toHaveAttribute("aria-current", "page");
    expect(items[1]).not.toHaveAttribute("aria-currrent");
  });

  it("should update the selected page when an item is clicked", async () => {
    const component = (
      <Pagination
        disabledPages={[]}
        size="medium"
        previous={{ disabled: false, show: true }}
        next={{ disabled: false, show: true }}
        page={1}
        start={1}
        end={5}
      />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    const user = userEvent.setup();
    const [firstItem, secondItem] = screen.queryAllByTestId("page-item");

    await user.click(secondItem);
    expect(firstItem).not.toHaveAttribute("aria-current", "page");
    expect(secondItem).toHaveAttribute("aria-current", "page");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should set the next item as active when Next is clicked", async () => {
    const component = (
      <Pagination
        disabledPages={[]}
        size="medium"
        previous={{ disabled: false, show: true }}
        next={{ disabled: false, show: true }}
        page={1}
        start={1}
        end={5}
      />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    const user = userEvent.setup();
    const next = screen.queryByTestId("next");
    const [firstItem, secondItem] = screen.queryAllByTestId("page-item");

    await user.click(next!);
    expect(firstItem).not.toHaveAttribute("aria-current", "page");
    expect(secondItem).toHaveAttribute("aria-current", "page");
  });

  it("should set the prev item as active when Next is clicked", async () => {
    const component = (
      <Pagination
        disabledPages={[]}
        size="medium"
        previous={{ disabled: false, show: true }}
        next={{ disabled: false, show: true }}
        page={2}
        start={1}
        end={5}
      />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    const user = userEvent.setup();
    const prev = screen.queryByTestId("prev");

    const [firstItem, secondItem] = screen.queryAllByTestId("page-item");
    expect(secondItem).toHaveAttribute("aria-current", "page");

    await user.click(prev!);
    expect(firstItem).toHaveAttribute("aria-current", "page");
    expect(secondItem).not.toHaveAttribute("aria-current", "page");
  });

  it("should disable next when on the last page", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Pagination
          disabledPages={[]}
          size="medium"
          previous={{ disabled: false, show: true }}
          next={{ disabled: false, show: true }}
          page={5}
          start={1}
          end={5}
        />
      </Wrapper>
    );

    render(component);
    expect(screen.queryByTestId("next")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it.each(["small", "medium", "large"])(
    "should render a pagination component %s",
    async (size) => {
      const component = (
        <Pagination
          disabledPages={[]}
          size={size as Size}
          previous={{ disabled: false, show: true }}
          next={{ disabled: false, show: true }}
          page={1}
          start={1}
          end={5}
        />
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
