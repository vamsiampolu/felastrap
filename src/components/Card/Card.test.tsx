import { Card } from "./Card";
import { IRenderer } from "fela";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { createRenderer, cssReboot, Wrapper } from "../../test-helpers";
import { CardBody } from "./Body";
import { render, screen } from "@testing-library/react";
import { CardTitle } from "./Title";
import { CardSubtitle } from "./Subtitle";
import { CardText } from "./Text";
import { Link } from "../Link/Link";
import { CardImage } from "./Image";
import { CardHeader } from "./Header";
import { Button } from "../Button";

describe("components/Card/Card", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Card with some text", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Card>
          <CardBody>This is some text within a card body</CardBody>
        </Card>
      </Wrapper>
    );

    render(component);
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-body")).toBeInTheDocument();
    expect(screen.getByTestId("card-body")).toHaveTextContent(
      "This is some text within a card body",
    );
  });

  it("should render a Card with a title and a subtitle", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle as="h5">Card Title</CardTitle>
            <CardSubtitle
              style={{
                color: "rgba(33, 37, 41, 0.75)",
                opacity: 1,
                marginBottom: "0.5rem",
              }}
              as="h6"
            >
              Card subtitle
            </CardSubtitle>
          </CardBody>
        </Card>
      </Wrapper>
    );

    render(component);

    expect(screen.getByTestId("card")).toHaveStyle("width: 18rem;");

    expect(screen.getByTestId("card-title")).toBeInTheDocument();
    expect(screen.getByTestId("card-subtitle")).toBeInTheDocument();

    expect(screen.getByTestId("card-title")?.tagName).toBe("H5");
    expect(screen.getByTestId("card-subtitle")?.tagName).toEqual("H6");

    expect(screen.getByTestId("card-title")).toHaveTextContent("Card Title");
    expect(screen.getByTestId("card-subtitle")).toHaveTextContent(
      "Card subtitle",
    );

    expect(screen.getByTestId("card-subtitle")).toHaveStyle(
      "color: rgba(33, 37, 41, 0.75); opacity: 1; marginBottom: 0.5rem;",
    );
  });

  it("should render a Card with a title, subtitle and links", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle as="h5">Card Title</CardTitle>
            <CardSubtitle
              style={{
                color: "rgba(33, 37, 41, 0.75)",
                opacity: 1,
                marginBottom: "0.5rem",
              }}
              as="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Link href="#">Card Link</Link>
            <Link href="#" style={{ marginLeft: "1rem" }}>
              Another Link
            </Link>
          </CardBody>
        </Card>
      </Wrapper>
    );

    render(component);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-body")).toBeInTheDocument();

    expect(screen.getByTestId("card-title")).toBeInTheDocument();
    expect(screen.getByTestId("card-subtitle")).toBeInTheDocument();

    expect(screen.queryAllByTestId("link")).toHaveLength(2);
    const links = screen.queryAllByTestId("link");

    expect(links[0]).toHaveTextContent("Card Link");
    expect(links[0]).toHaveAttribute("href", "#");

    expect(links[1]).toHaveTextContent("Another Link");
    expect(links[1]).toHaveAttribute("href", "#");
  });

  it("should render a Card with an image at the top and text", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Card style={{ width: "10rem" }}>
          <CardImage
            top
            src="https://picsum.photos/id/16/200/300"
            width={200}
            height={300}
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Wrapper>
    );

    render(component);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-image")).toBeInTheDocument();
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      screen.queryByTestId("card-body")?.querySelector("card-image"),
    ).not.toBeInTheDocument();

    expect(screen.getByTestId("card")).toHaveStyle("width: 10rem");
    expect(screen.getByTestId("card-image")).toHaveAttribute(
      "src",
      "https://picsum.photos/id/16/200/300",
    );

    expect(screen.getByTestId("card-image")).toHaveAttribute("width", "200");
    expect(screen.getByTestId("card-image")).toHaveAttribute("height", "300");

    expect(screen.getByTestId("card-text")).toBeInTheDocument();
    expect(screen.getByTestId("card-text")).toHaveTextContent(
      `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    );
  });

  it("should render a Card with an image at the bottom and text", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
          <CardImage
            bottom
            src="https://picsum.photos/id/16/200/300"
            width={200}
            height={300}
          />
        </Card>
      </Wrapper>
    );

    render(component);
    expect(screen.getByTestId("card-body")).toBeInTheDocument();
    expect(screen.getByTestId("card-image")).toBeInTheDocument();
    expect(screen.getByTestId("card-text")).toHaveTextContent(
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByTestId("card-body")?.nextElementSibling?.tagName).toBe(
      "IMG",
    );
  });

  it("should render a Card with a header and text", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Card>
          <CardHeader>Featured</CardHeader>
          <CardBody>
            <CardTitle as="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button variant="primary">Go Somewhere</Button>
          </CardBody>
        </Card>
      </Wrapper>
    );
    render(component);

    expect(screen.getByTestId("card-header")).toBeInTheDocument();
    expect(screen.getByTestId("card-text")).toBeInTheDocument();

    expect(screen.getByTestId("card-header")).toHaveTextContent("Featured");
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      screen.getByTestId("card-body")?.previousElementSibling,
    ).toHaveAttribute("data-testid", "card-header");
  });

  describe("styling", () => {
    it("should render a Card with some text", async () => {
      const component = (
        <Card>
          <CardBody>This is some text within a card body</CardBody>
        </Card>
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot(snapshot);
    });

    it("should render a Card with a title and a subtitle", async () => {
      const component = (
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle as="h5">Card Title</CardTitle>
            <CardSubtitle
              style={{
                color: "rgba(33, 37, 41, 0.75)",
                opacity: 1,
                marginBottom: "0.5rem",
              }}
              as="h6"
            >
              Card subtitle
            </CardSubtitle>
          </CardBody>
        </Card>
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot(snapshot);
    });

    it("should render a Card with a title, subtitle and links", async () => {
      const component = (
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle as="h5">Card Title</CardTitle>
            <CardSubtitle
              style={{
                color: "rgba(33, 37, 41, 0.75)",
                opacity: 1,
                marginBottom: "0.5rem",
              }}
              as="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Link href="#">Card Link</Link>
            <Link href="#" style={{ marginLeft: "1rem" }}>
              Another Link
            </Link>
          </CardBody>
        </Card>
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Card with a top image and text", async () => {
      const component = (
        <Card style={{ width: "10rem" }}>
          <CardImage
            top
            src="https://picsum.photos/id/16/200/300"
            width={200}
            height={300}
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Card with an image at the bottom and text", async () => {
      const component = (
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
          <CardImage
            bottom
            src="https://picsum.photos/id/16/200/300"
            width={200}
            height={300}
          />
        </Card>
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Card with a header and text", async () => {
      const component = (
        <Card>
          <CardHeader>Featured</CardHeader>
          <CardBody>
            <CardTitle as="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button variant="primary">Go Somewhere</Button>
          </CardBody>
        </Card>
      );

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    });
  });
});
