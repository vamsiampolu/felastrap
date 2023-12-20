import { IRenderer } from "fela";
import {
  createRenderer,
  cssReboot,
  createSnapshot,
  Wrapper,
} from "../../test-helpers";
import { Item } from "./Item";
import { render, screen } from "@testing-library/react";

const itemProps = {
  src: "https://picsum.photos/seed/picsum/450/300",
  alt: "Placeholder Image 1",
  title: "Placeholder 1",
  description: "A placeholder image from picsum.photos",
};

describe("components/Carousel/Item", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should not display an inactive item", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Item
          src="https://picsum.photos/seed/picsum/450/300"
          alt="Placeholder Image 1"
        />
        ;
      </Wrapper>
    );

    render(component);
    expect(screen.queryByTestId("carousel-item")).not.toBeVisible();
  });

  it("should display the active item", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Item
          active
          src="https://picsum.photos/seed/picsum/450/300"
          alt="Placeholder Image 1"
        />
        ;
      </Wrapper>
    );

    render(component);
    expect(screen.queryByTestId("carousel-item")).toBeVisible();
  });

  it("should not display the caption without a title and description", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Item
          active
          src="https://picsum.photos/seed/picsum/450/300"
          alt="Placeholder Image 1"
        />
        ;
      </Wrapper>
    );

    render(component);
    expect(
      screen.queryByTestId("carousel-item-caption"),
    ).not.toBeInTheDocument();
  });

  it("should set image source and alt text", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Item
          active
          src="https://picsum.photos/seed/picsum/450/300"
          alt="Placeholder Image 1"
        />
        ;
      </Wrapper>
    );

    render(component);
    expect(screen.getByTestId("carousel-item-image")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-item-image")).toHaveAttribute(
      "src",
      "https://picsum.photos/seed/picsum/450/300",
    );
    expect(screen.queryByTestId("carousel-item-image")).toHaveAttribute(
      "alt",
      "Placeholder Image 1",
    );
  });

  it("should set caption given a title and description", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Item active {...itemProps} />
      </Wrapper>
    );

    render(component);
    expect(screen.getByTestId("carousel-caption")).toBeInTheDocument();
  });

  it("should render a Carousel Item", async () => {
    const component = (
      <Item
        src="https://picsum.photos/seed/picsum/450/300"
        alt="Placeholder Image 1"
      />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Carousel Item with title and description", async () => {
    const component = <Item {...itemProps} />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Carousel Item with crossfade enabled", async () => {
    const component = <Item {...itemProps} crossFade />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an active Carousel Item", async () => {
    const component = <Item {...itemProps} active />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an active Carousel Item with crossfade enabled", async () => {
    const component = <Item {...itemProps} active crossFade />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
