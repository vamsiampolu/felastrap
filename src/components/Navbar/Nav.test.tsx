import { DataItemProps, Nav } from "./Nav";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { act, render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { NavbarVariant } from "./Navbar";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("components/Navbar/Nav", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a navbar menu with className navbar-nav", async () => {
    const component = (
      <Nav
        variant="expand"
        size="small"
        items={[
          {
            type: "link",
            label: "Home",
            active: true,
            href: "#",
          },
          {
            type: "link",
            label: "Disabled",
            active: false,
            disabled: true,
            href: "#",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-nav")).toHaveClass("navbar-nav");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a navbar menu with a link", async () => {
    const component = (
      <Nav
        variant="expand"
        size="small"
        items={[
          {
            type: "link",
            label: "Home",
            active: true,
            href: "#",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();

    expect(screen.queryAllByTestId("nav-item")).toHaveLength(1);
    expect(screen.queryByTestId("nav-item")).toHaveClass("navbar-link");

    expect(screen.queryAllByTestId("nav-link")).toHaveLength(1);
    expect(screen.queryByTestId("nav-link")).toHaveClass("navbar-link");

    expect(screen.queryByTestId("nav-link")).toHaveTextContent("Home");
    expect(screen.queryByTestId("nav-link")).toHaveAttribute("href", "#");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size small with link of variant %s",
    async (variant) => {
      const component = (
        <Nav
          size="small"
          variant={variant as NavbarVariant}
          items={[
            {
              type: "link",
              label: "Home",
              active: true,
              href: "#",
            },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();

      expect(screen.queryAllByTestId("nav-item")).toHaveLength(1);
      expect(screen.queryAllByTestId("nav-link")).toHaveLength(1);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size medium with link of variant %s",
    async (variant) => {
      const component = (
        <Nav
          size="medium"
          variant={variant as NavbarVariant}
          items={[
            {
              type: "link",
              label: "Home",
              active: true,
              href: "#",
            },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();

      expect(screen.queryAllByTestId("nav-item")).toHaveLength(1);
      expect(screen.queryAllByTestId("nav-link")).toHaveLength(1);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size large with link of variant %s",
    async (variant) => {
      const component = (
        <Nav
          size="large"
          variant={variant as NavbarVariant}
          items={[
            {
              type: "link",
              label: "Home",
              active: true,
              href: "#",
            },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();

      expect(screen.queryAllByTestId("nav-item")).toHaveLength(1);
      expect(screen.queryAllByTestId("nav-link")).toHaveLength(1);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size x-large with link of variant %s",
    async (variant) => {
      const component = (
        <Nav
          size="x-large"
          variant={variant as NavbarVariant}
          items={[
            {
              type: "link",
              label: "Home",
              active: true,
              href: "#",
            },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();

      expect(screen.queryAllByTestId("nav-item")).toHaveLength(1);
      expect(screen.queryAllByTestId("nav-link")).toHaveLength(1);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a navbar menu with a disabled link", async () => {
    const component = (
      <Nav
        variant="expand"
        size="small"
        items={[
          {
            type: "link",
            disabled: true,
            label: "Home",
            active: true,
            href: "#",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();

    expect(screen.queryAllByTestId("nav-item")).toHaveLength(1);
    expect(screen.queryByTestId("nav-item")).toHaveClass("navbar-link");

    expect(screen.queryAllByTestId("nav-link")).toHaveLength(1);
    expect(screen.queryByTestId("nav-link")).toHaveClass("navbar-link");

    expect(screen.queryByTestId("nav-link")).toHaveTextContent("Home");
    expect(screen.queryByTestId("nav-link")).toHaveAttribute("href", "#");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a navbar menu with multiple links", async () => {
    const component = (
      <Nav
        variant="expand"
        size="small"
        items={[
          {
            type: "link",
            label: "Home",
            active: true,
            href: "#",
          },
          {
            type: "link",
            label: "Profile",
            active: false,
            href: "#",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.queryAllByTestId("nav-item")).toHaveLength(2);
    expect(screen.queryAllByTestId("nav-link")).toHaveLength(2);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a navbar menu with a dropdown", async () => {
    const items: DataItemProps[] = [
      {
        type: "dropdown",
        className: "dropdown-story-menu",
        label: "Dropdown",
        options: [
          {
            disabled: false,
            type: "item",
            text: "Action #1",
          },
          {
            disabled: false,
            type: "item",
            text: "Action #2",
          },
        ],
      },
    ];

    const component = <Nav items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.queryAllByTestId("nav-item")).toHaveLength(1);
    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a navbar menu with dropdown items", async () => {
    const items: DataItemProps[] = [
      {
        type: "dropdown",
        className: "dropdown-story-menu",
        label: "Dropdown",
        options: [
          {
            disabled: false,
            type: "item",
            text: "Action #1",
          },
          {
            disabled: false,
            type: "item",
            text: "Action #2",
          },
        ],
      },
    ];

    const component = <Nav items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const user = userEvent.setup();
    const toggle = screen.queryByTestId("dropdown-toggle");

    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeVisible();

    await user.click(toggle!);
    await act(async () => undefined);

    expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of no size and variant %s with dropdown items",
    async (variant) => {
      const items: DataItemProps[] = [
        {
          type: "dropdown",
          className: "dropdown-story-menu",
          label: "Dropdown",
          options: [
            {
              disabled: false,
              type: "item",
              text: "Action #1",
            },
            {
              disabled: false,
              type: "item",
              text: "Action #2",
            },
          ],
        },
      ];

      const component = (
        <Nav
          items={items}
          size={undefined}
          variant={variant as NavbarVariant}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      const user = userEvent.setup();
      const toggle = screen.queryByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toBeVisible();

      await user.click(toggle!);
      await act(async () => undefined);

      expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size small with dropdown items of variant %s",
    async (variant) => {
      const items: DataItemProps[] = [
        {
          type: "dropdown",
          className: "dropdown-story-menu",
          label: "Dropdown",
          options: [
            {
              disabled: false,
              type: "item",
              text: "Action #1",
            },
            {
              disabled: false,
              type: "item",
              text: "Action #2",
            },
          ],
        },
      ];

      const component = (
        <Nav items={items} size="small" variant={variant as NavbarVariant} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      const user = userEvent.setup();
      const toggle = screen.queryByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toBeVisible();

      await user.click(toggle!);
      await act(async () => undefined);

      expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size medium with dropdown items of variant %s",
    async (variant) => {
      const items: DataItemProps[] = [
        {
          type: "dropdown",
          className: "dropdown-story-menu",
          label: "Dropdown",
          options: [
            {
              disabled: false,
              type: "item",
              text: "Action #1",
            },
            {
              disabled: false,
              type: "item",
              text: "Action #2",
            },
          ],
        },
      ];

      const component = (
        <Nav items={items} size="medium" variant={variant as NavbarVariant} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      const user = userEvent.setup();
      const toggle = screen.queryByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toBeVisible();

      await user.click(toggle!);
      await act(async () => undefined);

      expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size large with dropdown items of variant %s",
    async (variant) => {
      const items: DataItemProps[] = [
        {
          type: "dropdown",
          className: "dropdown-story-menu",
          label: "Dropdown",
          options: [
            {
              disabled: false,
              type: "item",
              text: "Action #1",
            },
            {
              disabled: false,
              type: "item",
              text: "Action #2",
            },
          ],
        },
      ];

      const component = (
        <Nav items={items} size="large" variant={variant as NavbarVariant} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      const user = userEvent.setup();
      const toggle = screen.queryByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toBeVisible();

      await user.click(toggle!);
      await act(async () => undefined);

      expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["expand", "fixed", "sticky"])(
    "should render a navbar menu of size x-large with dropdown items of variant %s",
    async (variant) => {
      const items: DataItemProps[] = [
        {
          type: "dropdown",
          className: "dropdown-story-menu",
          label: "Dropdown",
          options: [
            {
              disabled: false,
              type: "item",
              text: "Action #1",
            },
            {
              disabled: false,
              type: "item",
              text: "Action #2",
            },
          ],
        },
      ];

      const component = (
        <Nav items={items} size="x-large" variant={variant as NavbarVariant} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      const user = userEvent.setup();
      const toggle = screen.queryByTestId("dropdown-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toBeVisible();

      await user.click(toggle!);
      await act(async () => undefined);

      expect(screen.queryAllByTestId("dropdown-item")).toHaveLength(2);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
