import { IRenderer } from "fela";
import {
  DataListGroup,
  GroupAction,
  GroupItem,
  Item,
  NoItems,
} from "./DataListGroup";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/ListGroup/DataListGroup.NoItems", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a list item for no items", async () => {
    const component = <NoItems />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();
    expect(screen.queryByTestId("list-group-item")).toHaveTextContent(
      "No Items",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a list item with custom text", async () => {
    const component = <NoItems noItemsText="Such empty. Much Wow" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();
    expect(screen.queryByTestId("list-group-item")).toHaveTextContent(
      "Such empty. Much Wow",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});

describe("components/ListGroup/DataListGroup.GroupAction", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render nothing when no action is provided", async () => {
    const component = <GroupAction />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(
      screen.queryByTestId("list-group-item-action"),
    ).not.toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render nothing when action prop is null", async () => {
    const component = <GroupAction action={null} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(
      screen.queryByTestId("list-group-item-action"),
    ).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a list group item action when an action is provided", async () => {
    const component = <GroupAction action={{ children: "Action" }} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group-item-action")).toBeInTheDocument();
    expect(screen.getByTestId("list-group-item-action")).toHaveTextContent(
      "Action",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});

describe("components/ListGroup/DataListGroup.GroupItem", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display the first group item", async () => {
    const item: Item = {
      label: "Label",
      active: false,
      disabled: false,
      variant: "default",
    };
    const component = <GroupItem index={0} arr={[item]} item={item} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

    expect(screen.queryByTestId("list-group-item")).toHaveTextContent("Label");
    expect(
      screen.queryByTestId("list-group-item-action"),
    ).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display the last group item", async () => {
    const item: Item = {
      label: "Label",
      active: false,
      disabled: false,
      variant: "default",
    };

    const firstItem: Item = {
      label: "First",
      active: false,
      disabled: false,
      variant: "default",
    };

    const component = (
      <GroupItem index={1} arr={[firstItem, item]} item={item} />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

    expect(screen.queryByTestId("list-group-item")).toHaveTextContent("Label");
    expect(
      screen.queryByTestId("list-group-item-action"),
    ).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a group item", async () => {
    const item: Item = {
      label: "Label",
      active: false,
      disabled: false,
      variant: "default",
    };

    const firstItem: Item = {
      label: "First",
      active: false,
      disabled: false,
      variant: "default",
    };

    const lastItem: Item = {
      label: "Last",
      active: false,
      disabled: false,
      variant: "default",
    };

    const arr = [firstItem, item, lastItem];
    const component = <GroupItem index={1} arr={arr} item={item} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

    expect(screen.queryByTestId("list-group-item")).toHaveTextContent("Label");
    expect(
      screen.queryByTestId("list-group-item-action"),
    ).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a disabled group item", async () => {
    const item: Item = {
      label: "Label",
      active: false,
      disabled: true,
      variant: "default",
    };

    const firstItem: Item = {
      label: "First",
      active: false,
      disabled: false,
      variant: "default",
    };

    const lastItem: Item = {
      label: "Last",
      active: false,
      disabled: false,
      variant: "default",
    };

    const arr = [firstItem, item, lastItem];
    const component = <GroupItem index={1} arr={arr} item={item} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

    expect(screen.queryByTestId("list-group-item")).toHaveTextContent("Label");
    expect(
      screen.queryByTestId("list-group-item-action"),
    ).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display an active group item", async () => {
    const item: Item = {
      label: "Label",
      active: true,
      disabled: false,
      variant: "default",
    };

    const firstItem: Item = {
      label: "First",
      active: false,
      disabled: false,
      variant: "default",
    };

    const lastItem: Item = {
      label: "Last",
      active: false,
      disabled: false,
      variant: "default",
    };

    const arr = [firstItem, item, lastItem];
    const component = <GroupItem index={1} arr={arr} item={item} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

    expect(screen.queryByTestId("list-group-item")).toHaveTextContent("Label");
    expect(
      screen.queryByTestId("list-group-item-action"),
    ).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});

describe("components/ListGroup/DataListGroup.DataListGroup", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a data list group with no items", async () => {
    const component = (
      <DataListGroup
        card={false}
        flush={false}
        horizontal={false}
        numbered={false}
        noItemsText="No Items"
        items={[]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.queryAllByTestId("list-group-item")).toHaveLength(1);

    expect(screen.queryByTestId("list-group-item")).toHaveTextContent(
      "No Items",
    );
  });

  it("should render a default data list group with no items", async () => {
    const component = <DataListGroup />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.queryAllByTestId("list-group-item")).toHaveLength(1);

    expect(screen.queryByTestId("list-group-item")).toHaveTextContent(
      "No Items",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a default data list group with items", async () => {
    const items: Item[] = [
      {
        label: "First",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Label",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Last",
        active: false,
        disabled: false,
        variant: "default",
      },
    ];

    const component = <DataListGroup items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-group-item")).toHaveLength(3);

    const [first, second, last] = screen.getAllByTestId("list-group-item");

    expect(first).toHaveTextContent("First");
    expect(second).toHaveTextContent("Label");
    expect(last).toHaveTextContent("Last");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a data list group with  items", async () => {
    const items: Item[] = [
      {
        label: "First",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Label",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Last",
        active: false,
        disabled: false,
        variant: "default",
      },
    ];

    const component = (
      <DataListGroup
        card={false}
        flush={false}
        horizontal={false}
        numbered={false}
        noItemsText="No Items"
        items={items}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-group-item")).toHaveLength(3);

    const [first, second, last] = screen.getAllByTestId("list-group-item");

    expect(first).toHaveTextContent("First");
    expect(second).toHaveTextContent("Label");
    expect(last).toHaveTextContent("Last");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a card data list group with  items", async () => {
    const items: Item[] = [
      {
        label: "First",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Label",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Last",
        active: false,
        disabled: false,
        variant: "default",
      },
    ];

    const component = (
      <DataListGroup
        card
        flush={false}
        horizontal={false}
        numbered={false}
        noItemsText="No Items"
        items={items}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-group-item")).toHaveLength(3);

    const [first, second, last] = screen.getAllByTestId("list-group-item");

    expect(first).toHaveTextContent("First");
    expect(second).toHaveTextContent("Label");
    expect(last).toHaveTextContent("Last");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a flush data list group with  items", async () => {
    const items: Item[] = [
      {
        label: "First",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Label",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Last",
        active: false,
        disabled: false,
        variant: "default",
      },
    ];

    const component = (
      <DataListGroup
        card={false}
        flush
        horizontal={false}
        numbered={false}
        noItemsText="No Items"
        items={items}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-group-item")).toHaveLength(3);

    const [first, second, last] = screen.getAllByTestId("list-group-item");

    expect(first).toHaveTextContent("First");
    expect(second).toHaveTextContent("Label");
    expect(last).toHaveTextContent("Last");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a card flush data list group with  items", async () => {
    const items: Item[] = [
      {
        label: "First",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Label",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Last",
        active: false,
        disabled: false,
        variant: "default",
      },
    ];

    const component = (
      <DataListGroup
        card
        flush
        horizontal={false}
        numbered={false}
        noItemsText="No Items"
        items={items}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-group-item")).toHaveLength(3);

    const [first, second, last] = screen.getAllByTestId("list-group-item");

    expect(first).toHaveTextContent("First");
    expect(second).toHaveTextContent("Label");
    expect(last).toHaveTextContent("Last");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a numbered data list group with  items", async () => {
    const items: Item[] = [
      {
        label: "First",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Label",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Last",
        active: false,
        disabled: false,
        variant: "default",
      },
    ];

    const component = (
      <DataListGroup
        card={false}
        flush={false}
        horizontal={false}
        numbered
        noItemsText="No Items"
        items={items}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-group-item")).toHaveLength(3);

    const [first, second, last] = screen.getAllByTestId("list-group-item");

    expect(first).toHaveTextContent("First");
    expect(second).toHaveTextContent("Label");
    expect(last).toHaveTextContent("Last");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a numbered data list group with items", async () => {
    const items: Item[] = [
      {
        label: "First",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Label",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Last",
        active: false,
        disabled: false,
        variant: "default",
      },
    ];

    const component = (
      <DataListGroup
        card={false}
        flush={false}
        horizontal
        numbered={false}
        noItemsText="No Items"
        items={items}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-group-item")).toHaveLength(3);

    const [first, second, last] = screen.getAllByTestId("list-group-item");

    expect(first).toHaveTextContent("First");
    expect(second).toHaveTextContent("Label");
    expect(last).toHaveTextContent("Last");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
