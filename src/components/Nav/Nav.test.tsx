import { IRenderer } from "fela";
import { DropDownItem } from "../Dropdown/DropdownMenu";
import { Nav } from "./Nav";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("components/Nav/Nav", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a nav with items", async () => {
    const component = (
      <Nav
        items={[
          {
            active: true,
            label: "Tab 1",
            itemType: "link",
          },
          {
            label: "Dropdown 1",
            itemType: "dropdown",
            options: [
              {
                text: "Header",
                type: "header",
              } as unknown as DropDownItem,
              {
                text: "Item 1",
                type: "item",
                active: true,
              } as unknown as DropDownItem,
              {
                type: "divider",
              } as unknown as DropDownItem,
              {
                text: "Disabled Item",
                type: "item",
                disabled: true,
              },
            ],
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("nav-container")).toBeInTheDocument();
    expect(screen.getAllByTestId("nav-item")).toHaveLength(2);
    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
