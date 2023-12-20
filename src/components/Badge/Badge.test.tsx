import { render, screen } from "@testing-library/react";

import type { IRenderer } from "fela";
import type { Variant } from "../common";

import { Badge } from "./Badge";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";

import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { Wrapper } from "../../test-helpers/Wrapper";

describe("components/Badge", () => {
  const variants = [
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ];

  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("renders a Badge", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Badge>2</Badge>
      </Wrapper>
    );

    render(component);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("2");
  });

  it.each(variants)("renders a Badge with a variant", async (variant) => {
    const component = <Badge variant={variant as Variant}>2</Badge>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("2");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render atomic styles", async () => {
    const component = <Badge>2</Badge>;
    const snapshot = await createSnapshot({ renderer, component, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["danger", "info", "primary", "secondary", "success", "warning"])(
    "should render atomic styles with a variant: %s",
    async (variant) => {
      const component = <Badge variant={variant as Variant}>2</Badge>;
      const snapshot = await createSnapshot({ renderer, component, theme: {} });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a button Badge", async () => {
    const component = (
      <Button>
        Click Here<Badge button>2</Badge>
      </Button>
    );
    const snapshot = await createSnapshot({ renderer, component, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a positioned badge with a Button", async () => {
    const component = (
      <Button positionedBadge>
        Click Here<Badge positioned>2</Badge>
      </Button>
    );
    const snapshot = await createSnapshot({ renderer, component, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(variants)(
    "should render a pill badge of variant %s",
    async (variant) => {
      const component = (
        <Badge pill variant={variant as Variant}>
          2
        </Badge>
      );
      const snapshot = await createSnapshot({ renderer, component, theme: {} });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a badge for a heading", async () => {
    const component = (
      <Header as="h2">
        Hello, there{"!"}
        <Badge heading>2</Badge>
      </Header>
    );
    const snapshot = await createSnapshot({ renderer, component, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a pill badge for a heading", async () => {
    const component = (
      <Header as="h2">
        Hello, there{"!"}
        <Badge heading pill>
          2
        </Badge>
      </Header>
    );
    const snapshot = await createSnapshot({ renderer, component, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });
});
