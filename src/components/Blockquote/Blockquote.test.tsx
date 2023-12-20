import { IRenderer } from "fela";
import { Wrapper } from "../../test-helpers/Wrapper";
import { Align, Blockquote } from "./Blockquote";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { render, screen } from "@testing-library/react";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Blockquote", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
    cssReboot(renderer);
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it("should render a quote", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Blockquote text="Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at." />
      </Wrapper>
    );

    render(component);
    expect(screen.getByTestId("blockquote")).toBeInTheDocument();
    expect(screen.queryByTestId("blockquote")).toHaveTextContent(
      "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at.",
    );
  });

  it("should render a quote with attribution", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Blockquote
          attribution="Stephen Hawking"
          text="Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at."
        />
      </Wrapper>
    );

    render(component);

    expect(screen.getByTestId("blockquote-figure")).toBeInTheDocument();
    expect(screen.getByTestId("blockquote")).toBeInTheDocument();
    expect(screen.getByTestId("blockquote-text")).toBeInTheDocument();

    expect(screen.queryByTestId("blockquote-text")).toHaveTextContent(
      "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at.",
    );

    expect(screen.getByTestId("blockquote-attribution")).toBeInTheDocument();
    expect(screen.queryByTestId("blockquote-attribution")).toHaveTextContent(
      "Stephen Hawking",
    );
  });

  it("should render a quote with attribution and source", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Blockquote
          source="Reith Lecture (BBC)"
          attribution="Stephen Hawking"
          text="Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at."
        />
      </Wrapper>
    );

    render(component);

    expect(screen.getByTestId("blockquote-text")).toBeInTheDocument();
    expect(screen.queryByTestId("blockquote-text")).toHaveTextContent(
      "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at.",
    );

    expect(screen.queryByTestId("blockquote-attribution")).toHaveTextContent(
      "Stephen Hawking",
    );

    const source = screen.queryByTestId("blockquote-source");

    expect(screen.getByTestId("blockquote-source")).toBeInTheDocument();
    expect(source).toHaveAttribute("title", "Reith Lecture (BBC)");
    expect(source).toHaveTextContent("Reith Lecture (BBC)");
  });

  describe("styling", () => {
    it.each(["left", "center", "right"])(
      "should render a quote %s aligned",
      async (align) => {
        const component = (
          <Blockquote
            align={align as Align}
            text="Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at."
          />
        );
        const snapshot = await createSnapshot({
          component,
          renderer,
          theme: {},
        });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(["left", "center", "right"])(
      "should render a quote with attribution %s aligned",
      async (align) => {
        const component = (
          <Blockquote
            align={align as Align}
            attribution="Stephen Hawking"
            text="Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at."
          />
        );
        const snapshot = await createSnapshot({
          component,
          renderer,
          theme: {},
        });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(["left", "center", "right"])(
      "should render a quote with attribution and source",
      async (align) => {
        const component = (
          <Blockquote
            align={align as Align}
            source="Reith Lecture (BBC)"
            attribution="Stephen Hawking"
            text="Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at."
          />
        );
        const snapshot = await createSnapshot({
          component,
          renderer,
          theme: {},
        });
        expect(snapshot).toMatchSnapshot();
      },
    );
  });
});
