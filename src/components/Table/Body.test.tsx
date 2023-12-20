import { IRenderer } from "fela";
import { TableBody } from "./Body";
import { TableContext, TableContextValue } from "./TableContext";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Variant } from "../common";

describe("components/Table/Body", () => {
  const value: TableContextValue = {
    variant: "default",
    striped: false,
    bordered: false,
    borderless: false,
    hover: false,
  };

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

  it("should render a Table Body", async () => {
    const component = (
      <TableContext.Provider value={value}>
        <table>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <TableBody>
            <tr>
              <td>A</td>
              <td>B</td>
            </tr>
          </TableBody>
        </table>
      </TableContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    expect(screen.getByTestId("table-body")).toHaveClass("table-body");
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Table Body with a className", async () => {
    const component = (
      <TableContext.Provider value={value}>
        <table>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <TableBody className="comfortable-body">
            <tr>
              <td>A</td>
              <td>B</td>
            </tr>
          </TableBody>
        </table>
      </TableContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    expect(screen.getByTestId("table-body")).toHaveClass("table-body");
    expect(screen.getByTestId("table-body")).toHaveClass("comfortable-body");
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a hover Table Body", async () => {
    const ctxValue: TableContextValue = { ...value, hover: true };
    const component = (
      <TableContext.Provider value={ctxValue}>
        <table>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <TableBody>
            <tr>
              <td>A</td>
              <td>B</td>
            </tr>
          </TableBody>
        </table>
      </TableContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    expect(screen.getByTestId("table-body")).toHaveClass("table-body");
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a bordered Table Body", async () => {
    const ctxValue: TableContextValue = { ...value, bordered: true };
    const component = (
      <TableContext.Provider value={ctxValue}>
        <table>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <TableBody>
            <tr>
              <td>A</td>
              <td>B</td>
            </tr>
          </TableBody>
        </table>
      </TableContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("table-body")).toBeInTheDocument();

    expect(screen.getByTestId("table-body")).toHaveClass("table-body");
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(variants)(
    "should render a Table Body of variant %s",
    async (variant) => {
      const ctxValue: TableContextValue = {
        ...value,
        variant: variant as Variant,
      };
      const component = (
        <TableContext.Provider value={ctxValue}>
          <table>
            <thead>
              <tr>
                <td>Column A</td>
                <td>Column B</td>
              </tr>
            </thead>
            <TableBody>
              <tr>
                <td>A</td>
                <td>B</td>
              </tr>
            </TableBody>
          </table>
        </TableContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("table-body")).toBeInTheDocument();

      expect(screen.getByTestId("table-body")).toHaveClass("table-body");
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should render a hovered Table Body of variant %s",
    async (variant) => {
      const ctxValue: TableContextValue = {
        ...value,
        variant: variant as Variant,
        hover: true,
      };

      const component = (
        <TableContext.Provider value={ctxValue}>
          <table>
            <thead>
              <tr>
                <td>Column A</td>
                <td>Column B</td>
              </tr>
            </thead>
            <TableBody>
              <tr>
                <td>A</td>
                <td>B</td>
              </tr>
            </TableBody>
          </table>
        </TableContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("table-body")).toBeInTheDocument();

      expect(screen.getByTestId("table-body")).toHaveClass("table-body");
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should render a hover bordered Table Body of variant %s",
    async (variant) => {
      const ctxValue: TableContextValue = {
        ...value,
        variant: variant as Variant,
        hover: true,
        bordered: true,
      };

      const component = (
        <TableContext.Provider value={ctxValue}>
          <table>
            <thead>
              <tr>
                <td>Column A</td>
                <td>Column B</td>
              </tr>
            </thead>
            <TableBody>
              <tr>
                <td>A</td>
                <td>B</td>
              </tr>
            </TableBody>
          </table>
        </TableContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("table-body")).toBeInTheDocument();

      expect(screen.getByTestId("table-body")).toHaveClass("table-body");
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
