import { IRenderer } from "fela";
import { HeaderRow, Table } from "./Table";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Variant } from "../common";
import { render, screen } from "@testing-library/react";

describe("components/Table/Table", () => {
  const getHeader = (): HeaderRow => ({
    cols: [
      {
        value: "#",
      },
      {
        value: "First",
      },
      {
        value: "Last",
      },
      {
        value: "Handle",
      },
    ],
  });

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
  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each([...variants])(
    "should render a table of variant %s",
    async (variant) => {
      const rows = [
        {
          cols: [
            {
              rowHeader: true,
              value: "1",
            },
            {
              rowHeader: false,
              value: "Mark",
            },
            {
              rowHeader: false,
              value: "Otto",
            },
            {
              rowHeader: false,
              value: "@mdo",
            },
          ],
        },
        {
          cols: [
            {
              rowHeader: true,
              value: "2",
            },
            {
              rowHeader: false,
              value: "Jacob",
            },
            {
              rowHeader: false,
              value: "Thornton",
            },
            {
              rowHeader: false,
              value: "@fat",
            },
          ],
        },
        {
          cols: [
            {
              rowHeader: true,
              value: "3",
            },
            {
              rowHeader: false,
              value: "Larry Cole Bird",
              colSpan: 2,
            },
            {
              rowHeader: false,
              value: "@twitter",
            },
          ],
        },
      ];

      const component = (
        <Table variant={variant as Variant} header={getHeader()} rows={rows} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table")).toBeInTheDocument();
      expect(screen.getByTestId("table-head")).toBeInTheDocument();
      expect(screen.getByTestId("table-body")).toBeInTheDocument();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each([...variants])(
    "should render a striped table of variant %s",
    async (variant) => {
      const rows = [
        {
          cols: [
            {
              rowHeader: true,
              value: "1",
            },
            {
              rowHeader: false,
              value: "Mark",
            },
            {
              rowHeader: false,
              value: "Otto",
            },
            {
              rowHeader: false,
              value: "@mdo",
            },
          ],
        },
        {
          cols: [
            {
              rowHeader: true,
              value: "2",
            },
            {
              rowHeader: false,
              value: "Jacob",
            },
            {
              rowHeader: false,
              value: "Thornton",
            },
            {
              rowHeader: false,
              value: "@fat",
            },
          ],
        },
        {
          cols: [
            {
              rowHeader: true,
              value: "3",
            },
            {
              rowHeader: false,
              value: "Larry Cole Bird",
              colSpan: 2,
            },
            {
              rowHeader: false,
              value: "@twitter",
            },
          ],
        },
      ];

      const component = (
        <Table
          variant={variant as Variant}
          header={getHeader()}
          rows={rows}
          striped
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table")).toBeInTheDocument();
      expect(screen.getByTestId("table-head")).toBeInTheDocument();
      expect(screen.getByTestId("table-body")).toBeInTheDocument();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a bordered table", async () => {
    const header = getHeader();

    const rows = [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ];

    const component = <Table bordered header={header} rows={rows} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a borderless table", async () => {
    const rows = [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ];

    const component = <Table borderless header={getHeader()} rows={rows} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a borderless table", async () => {
    const rows = [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ];

    const component = <Table borderless header={getHeader()} rows={rows} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an active row in the table", async () => {
    const rows = [
      {
        active: true,
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ];

    const component = <Table header={getHeader()} rows={rows} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
