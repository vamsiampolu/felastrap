import { IRenderer } from "fela";
import { DropDownItem } from "../Dropdown/DropdownMenu";
import { SegmentedButton } from "./SegmentedButton";
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

describe("components/SegmentedButton/SegmentedButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an action and a dropdown menu", async () => {
    const items: DropDownItem[] = [
      {
        type: "item",
        text: "Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Another Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Something else here",
        disabled: false,
      },
      {
        type: "divider",
        text: "",
        disabled: false,
      },
      {
        type: "item",
        text: "Seperated Link",
        disabled: false,
      },
    ];
    const component = (
      <SegmentedButton items={items} action="Action" position="left">
        <span data-testid="segmented-button-child">Segmented Button Child</span>
      </SegmentedButton>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("segmented-button")).toBeInTheDocument();
    expect(screen.getByTestId("segmented-button-action")).toBeInTheDocument();

    expect(screen.getByTestId("segmented-button-action")).toHaveAttribute(
      "tabIndex",
      "0",
    );
    expect(screen.getByTestId("segmented-button-action")).toHaveTextContent(
      "Action",
    );

    expect(screen.getByTestId("segment")).toBeInTheDocument();
    expect(screen.getByTestId("segment")).toHaveAttribute("tabIndex", "1");
    expect(screen.getByTestId("segmented-button-child")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a segmented button with placement right", async () => {
    const items: DropDownItem[] = [
      {
        type: "item",
        text: "Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Another Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Something else here",
        disabled: false,
      },
      {
        type: "divider",
        text: "",
        disabled: false,
      },
      {
        type: "item",
        text: "Seperated Link",
        disabled: false,
      },
    ];

    const component = (
      <SegmentedButton items={items} action="Action" position="right">
        <span data-testid="segmented-button-child">Segmented Button Child</span>
      </SegmentedButton>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("segmented-button")).toBeInTheDocument();
    expect(screen.getByTestId("segmented-button-action")).toBeInTheDocument();

    expect(screen.getByTestId("segmented-button-action")).toHaveAttribute(
      "tabIndex",
      "0",
    );
    expect(screen.getByTestId("segmented-button-action")).toHaveTextContent(
      "Action",
    );

    expect(screen.getByTestId("segment")).toBeInTheDocument();
    expect(screen.getByTestId("segment")).toHaveAttribute("tabIndex", "1");
    expect(screen.getByTestId("segmented-button-child")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
