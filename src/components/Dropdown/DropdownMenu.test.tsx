import { act, render, screen } from "@testing-library/react";
import { DropDownItem, DropdownMenu } from "./DropdownMenu";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import userEvent from "@testing-library/user-event";
import { DropdownDirection, NavVariant, Size, Variant } from "../common";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("components/Dropdown/DropdownMenu", () => {
  const directions = ["start", "centered", "end"];
  const sizes = ["small", "medium", "large"];
  const navVariants = ["default", "vertical", "underline", "tabs", "pills"];

  const variants = [
    "default",
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

  it("should render a dropdown menu", async () => {
    const items: DropDownItem[] = [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: false,
      },
    ];

    const component = <DropdownMenu label="Dropdown Button" items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    await act(async () => {
      return undefined;
    });

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    expect(screen.queryByTestId("dropdown-toggle")).toHaveTextContent(
      "Dropdown Button",
    );

    expect(screen.queryByTestId("dropdown-toggle")).toBeVisible();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should open a dropdown menu and display the items", async () => {
    const items: DropDownItem[] = [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: false,
      },
    ];

    const component = <DropdownMenu label="Dropdown Button" items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    await act(async () => {
      return undefined;
    });

    const user = userEvent.setup();

    const toggle = screen.queryByTestId("dropdown-toggle");
    expect(toggle).toBeInTheDocument();

    await user.click(toggle!);
    await act(async () => {
      return undefined;
    });

    expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
    expect(screen.queryByTestId("dropdown-list")).toBeVisible();
    expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);

    const [firstItem, secondItem] = screen.queryAllByTestId("dropdown-item");

    expect(firstItem).toBeInTheDocument();
    expect(firstItem).toBeVisible();
    expect(firstItem).toHaveTextContent("Item 1");

    expect(secondItem).toBeInTheDocument();
    expect(secondItem).toBeVisible();
    expect(secondItem).toHaveTextContent("Item 2");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a dropdown menu with a header", async () => {
    const items: DropDownItem[] = [
      {
        type: "header",
        text: "A Dropdown Header",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
      },
    ];

    const component = <DropdownMenu label="Dropdown Button" items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    await act(async () => {
      return undefined;
    });

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should open a dropdown with a header", async () => {
    const items: DropDownItem[] = [
      {
        type: "header",
        text: "A Dropdown Header",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
      },
    ];

    const user = userEvent.setup();
    const component = <DropdownMenu label="Dropdown Button" items={items} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    await act(async () => {
      return undefined;
    });

    const toggle = screen.queryByTestId("dropdown-toggle");

    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeVisible();

    await user.click(toggle!);
    await act(async () => {
      return undefined;
    });

    expect(screen.getByTestId("dropdown-header")).toBeInTheDocument();
    expect(screen.queryByTestId("dropdown-header")).toHaveTextContent(
      "A Dropdown Header",
    );

    expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should select an item from the dropdown menu", async () => {
    const items: DropDownItem[] = [
      {
        type: "header",
        text: "A Dropdown Header",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: false,
      },
    ];

    const user = userEvent.setup();
    const component = <DropdownMenu label="Dropdown Button" items={items} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    await act(async () => {
      return undefined;
    });

    const toggle = screen.queryByTestId("dropdown-toggle");

    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeVisible();

    await user.click(toggle!);
    await act(async () => {
      return undefined;
    });

    const dropdownItems = screen.queryAllByTestId("dropdown-item");

    expect(dropdownItems).toHaveLength(2);
    expect(dropdownItems[0]).toHaveTextContent("Item 1");

    await user.click(dropdownItems[0]);
    await act(async () => {
      return undefined;
    });

    expect(toggle).toHaveTextContent("Item 1");
  });

  it.each(directions)(
    "should render a dropdown menu of direction %s",
    async (direction) => {
      const items: DropDownItem[] = [
        {
          type: "item",
          text: "Item 1",
          disabled: false,
        },
        {
          type: "item",
          text: "Item 2",
          disabled: false,
        },
      ];

      const component = (
        <DropdownMenu
          label="Dropdown Button"
          direction={direction as DropdownDirection}
          items={items}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      await act(async () => {
        return undefined;
      });

      expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
      expect(screen.queryByTestId("dropdown-toggle")).toHaveTextContent(
        "Dropdown Button",
      );

      expect(screen.queryByTestId("dropdown-toggle")).toBeVisible();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(directions)(
    "should open a dropdown menu of direction %s",
    async (direction) => {
      const items: DropDownItem[] = [
        {
          type: "item",
          text: "Item 1",
          disabled: false,
        },
        {
          type: "item",
          text: "Item 2",
          disabled: false,
        },
      ];

      const user = userEvent.setup();
      const component = (
        <DropdownMenu
          label="Dropdown Button"
          direction={direction as DropdownDirection}
          items={items}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      await act(async () => {
        return undefined;
      });

      const toggle = screen.getByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveTextContent("Dropdown Button");
      expect(toggle).toBeVisible();

      await user.click(toggle);
      await act(async () => {
        return undefined;
      });

      expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
      expect(screen.queryByTestId("dropdown-list")).toBeVisible();

      expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(sizes)("should render a dropdown menu of size %s", async (size) => {
    const items: DropDownItem[] = [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: false,
      },
    ];

    const component = (
      <DropdownMenu label="Dropdown Button" size={size as Size} items={items} />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    await act(async () => {
      return undefined;
    });

    const toggle = screen.queryByTestId("dropdown-toggle");

    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeVisible();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(sizes)("should open a dropdown menu of size %s", async (size) => {
    const items: DropDownItem[] = [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: false,
      },
    ];

    const user = userEvent.setup();
    const component = (
      <DropdownMenu label="Dropdown Button" size={size as Size} items={items} />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    await act(async () => {
      return undefined;
    });

    const toggle = screen.queryByTestId("dropdown-toggle");
    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeVisible();

    await user.click(toggle!);

    expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
    expect(screen.queryByTestId("dropdown-list")).toBeVisible();

    expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(variants)(
    "should open a dropdown menu of variant %s",
    async (variant) => {
      const items: DropDownItem[] = [
        {
          type: "item",
          text: "Item 1",
          disabled: false,
        },
        {
          type: "item",
          text: "Item 2",
          disabled: false,
        },
      ];

      const user = userEvent.setup();
      const component = (
        <DropdownMenu
          label="Dropdown Button"
          variant={variant as Variant}
          items={items}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      await act(async () => {
        return undefined;
      });
      const toggle = screen.queryByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toBeVisible();

      await user.click(toggle!);
      await act(async () => {
        return undefined;
      });

      expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
      expect(screen.queryByTestId("dropdown-list")).toBeVisible();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(navVariants)(
    "should open a dropdown menu with nav variant %s",
    async (navVariant) => {
      const items: DropDownItem[] = [
        {
          type: "item",
          text: "Item 1",
          disabled: false,
        },
        {
          type: "item",
          text: "Item 2",
          disabled: false,
        },
      ];

      const user = userEvent.setup();
      const component = (
        <DropdownMenu
          nav
          label="Dropdown Button"
          navVariant={navVariant as NavVariant}
          items={items}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      await act(async () => {
        return undefined;
      });

      const toggle = screen.queryByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toBeVisible();

      const snapshot2 = await createSnapshot({ component, renderer });
      expect(snapshot2).toMatchSnapshot();

      await user.click(toggle!);
      await act(async () => {
        return undefined;
      });

      expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
      expect(screen.queryByTestId("dropdown-list")).toBeVisible();

      expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a dropdown menu with a header and divider", async () => {
    const items = [
      {
        type: "header",
        text: "A Dropdown Header",
        disabled: false,
        active: false,
      },
      {
        type: "divider",
      },
      {
        type: "item",
        text: "Item 1",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
        active: false,
      },
    ] as unknown as DropDownItem[];

    const component = <DropdownMenu label="Dropdown Button" items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    await act(async () => {
      return undefined;
    });

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should open a dropdown menu with a header and divider", async () => {
    const items = [
      {
        type: "header",
        text: "A Dropdown Header",
        disabled: false,
        active: false,
      },
      {
        type: "divider",
      },
      {
        type: "item",
        text: "Item 1",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
        active: false,
      },
    ] as unknown as DropDownItem[];

    const user = userEvent.setup();
    const component = <DropdownMenu label="Dropdown Button" items={items} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    await act(async () => {
      return undefined;
    });

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-toggle")).toBeVisible();

    expect(screen.getByTestId("dropdown-toggle")).toBeValid();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();

    await user.click(screen.getByTestId("dropdown-toggle"));
    expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();

    expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);
    expect(screen.getByTestId("dropdown-divider")).toBeInTheDocument();

    expect(screen.getByTestId("dropdown-header")).toBeInTheDocument();
    expect(screen.queryByTestId("dropdown-header")).toHaveTextContent(
      "A Dropdown Header",
    );

    const snapshot2 = await createSnapshot({ component, renderer });
    expect(snapshot2).toMatchSnapshot();
  });
});
