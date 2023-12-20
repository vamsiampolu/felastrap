import { IRenderer } from "fela";
import { DataNavItem } from "./DataNavItem";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { NavVariant } from "../common";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("components/Nav/DataNavItem", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a nav item with a nav link", async () => {
    const component = <DataNavItem label="Data Nav Item" href="/item" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("nav-item")).toBeInTheDocument();
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();

    expect(screen.queryByTestId("nav-link")).toHaveTextContent("Data Nav Item");
    expect(screen.queryByTestId("nav-link")).toHaveAttribute("href", "/item");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["default", "tabs", "pills", "underline", "vertical"])(
    "should display a nav item of variant %s",
    async (variant) => {
      const component = (
        <DataNavItem
          label="Data Nav Item"
          href="/item"
          variant={variant as NavVariant}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should display a nav item with dropdown items", async () => {
    const component = (
      <DataNavItem
        itemType="dropdown"
        label="Dropdown Nav"
        options={[
          {
            disabled: false,
            text: "Dropdown Item",
            type: "item",
            id: "item1",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("nav-item")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
