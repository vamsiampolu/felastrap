import { act, render, screen } from "@testing-library/react";
import { Carousel } from "./Carousel";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import userEvent from "@testing-library/user-event";

describe("components/Carousel/Carousel", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Carousel", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = <Carousel items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("carousel")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Carousel with indicators", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = <Carousel items={items} showIndicators />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("carousel")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-indicators")).toBeInTheDocument();

    expect(screen.queryAllByTestId("carousel-indicator")).toHaveLength(3);
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should update the active item when an indicator is clicked", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = <Carousel items={items} showIndicators />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.queryAllByTestId("carousel-item-image")[0]).toBeVisible();
    expect(screen.queryAllByTestId("carousel-indicator")).toHaveLength(3);

    const user = userEvent.setup();
    const secondIndicator = screen.queryAllByTestId("carousel-indicator")[1];

    expect(secondIndicator).toBeInTheDocument();
    expect(secondIndicator).toBeVisible();

    await user.click(secondIndicator);

    expect(screen.queryAllByTestId("carousel-item-image")[0]).not.toBeVisible();
    expect(screen.queryAllByTestId("carousel-item-image")[1]).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should move to previous item when its indicator is clicked", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = <Carousel items={items} showIndicators />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const user = userEvent.setup();
    expect(screen.queryAllByTestId("carousel-indicator")).toHaveLength(3);

    const firstIndicator = screen.queryAllByTestId("carousel-indicator")[0];
    const secondIndicator = screen.queryAllByTestId("carousel-indicator")[1];

    await user.click(secondIndicator);

    expect(screen.queryAllByTestId("carousel-item-image")[1]).toBeVisible();
    expect(screen.queryAllByTestId("carousel-item-image")[0]).not.toBeVisible();

    await user.click(firstIndicator);
    expect(screen.queryAllByTestId("carousel-item-image")[0]).toBeVisible();
    expect(screen.queryAllByTestId("carousel-item-image")[1]).not.toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should do nothing when the current item indicator is clicked", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = <Carousel items={items} showIndicators />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const user = userEvent.setup();

    expect(screen.queryAllByTestId("carousel-item-image")[0]).toBeVisible();
    expect(screen.queryAllByTestId("carousel-indicator")).toHaveLength(3);

    const firstIndicator = screen.queryAllByTestId("carousel-indicator")[0];

    expect(firstIndicator).toBeInTheDocument();
    expect(firstIndicator).toBeVisible();

    await user.click(firstIndicator);
    expect(screen.queryAllByTestId("carousel-item-image")[0]).toBeVisible();
  });

  it("should render a Carousel with captions", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
        title: "First Image",
        description: "The first image in the carousel",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
        title: "Second Image",
        description: "The second image in the carousel",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
        title: "Third Image",
        description: "The third image in the carousel",
      },
    ];

    const component = <Carousel items={items} showIndicators />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("carousel")).toBeInTheDocument();
    expect(screen.queryAllByTestId("carousel-caption")).toHaveLength(3);

    const firstCaption = screen.queryAllByTestId("carousel-caption")[0];
    expect(firstCaption).toHaveTextContent(
      ["First Image", "The first image in the carousel"].join(""),
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should show the next item when next control is clicked", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = <Carousel items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("carousel")).toBeInTheDocument();
    expect(screen.queryAllByTestId("carousel-control")).toHaveLength(2);

    expect(screen.queryAllByTestId("carousel-item-image")[0]).toBeVisible();
    expect(screen.queryAllByTestId("carousel-item-image")[1]).not.toBeVisible();

    const user = userEvent.setup();
    const next = screen.queryAllByTestId("carousel-control")[0];

    expect(next).toHaveClass("carousel-control-next");
    await user.click(next!);

    expect(screen.queryAllByTestId("carousel-item-image")[0]).not.toBeVisible();
    expect(screen.queryAllByTestId("carousel-item-image")[1]).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should show the prev item when prev control is clicked", async () => {
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = <Carousel items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const user = userEvent.setup();
    const [next, prev] = screen.queryAllByTestId("carousel-control");

    expect(next).toHaveClass("carousel-control-next");
    await user.click(next!);

    expect(screen.queryAllByTestId("carousel-item-image")[0]).not.toBeVisible();
    expect(screen.queryAllByTestId("carousel-item-image")[1]).toBeVisible();

    expect(prev).toHaveClass("carousel-control-prev");
    await user.click(prev!);

    expect(screen.queryAllByTestId("carousel-item-image")[0]).toBeVisible();
    expect(screen.queryAllByTestId("carousel-item-image")[1]).not.toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Carousel with autoplay enabled", async () => {
    jest.useFakeTimers();
    const items = [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ];

    const component = (
      <Carousel items={items} autoplay autoplayDuration={200} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.queryAllByTestId("carousel-item-image")[0]).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.queryAllByTestId("carousel-item-image")[1]).toBeVisible();
    jest.useRealTimers();
  });
});
