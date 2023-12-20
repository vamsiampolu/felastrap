import { IRenderer } from "fela";
import { TableRow } from "./Row";
import { TableContext, TableContextValue } from "./TableContext";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Variant } from "../common";

describe("components/Table/Row", () => {
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

  it("should render a Table Row with the default context", async () => {
    const component = (
      <table>
        <TableContext.Provider value={{} as TableContextValue}>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Value A</td>
              <td>Value B</td>
            </TableRow>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("table-row")).toBeInTheDocument();

    expect(screen.getByTestId("table-row")).toHaveClass("table-row");
    expect(screen.getByTestId("table-row")?.tagName).toBe("TR");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Table Row with the context", async () => {
    const value: TableContextValue = {
      variant: "default",
      bordered: false,
      borderless: false,
      striped: false,
      hover: false,
    };

    const component = (
      <table>
        <TableContext.Provider value={value}>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Value A</td>
              <td>Value B</td>
            </TableRow>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("table-row")).toBeInTheDocument();

    expect(screen.getByTestId("table-row")).toHaveClass("table-row");
    expect(screen.getByTestId("table-row")?.tagName).toBe("TR");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each([
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ])("should render a table row of variant %s", async (variant) => {
    const value: TableContextValue = {
      variant: variant as Variant,
      bordered: false,
      borderless: false,
      striped: false,
      hover: false,
    };

    const component = (
      <table>
        <TableContext.Provider value={value}>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Value A</td>
              <td>Value B</td>
            </TableRow>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table-row")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each([
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ])("should render a bordered table row of variant %s", async (variant) => {
    const value: TableContextValue = {
      variant: variant as Variant,
      bordered: true,
      borderless: false,
      striped: false,
      hover: false,
    };

    const component = (
      <table>
        <TableContext.Provider value={value}>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Value A</td>
              <td>Value B</td>
            </TableRow>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table-row")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each([
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ])("should render a borderless table row of variant %s", async (variant) => {
    const value: TableContextValue = {
      variant: variant as Variant,
      bordered: false,
      borderless: true,
      striped: false,
      hover: false,
    };

    const component = (
      <table>
        <TableContext.Provider value={value}>
          <thead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Value A</td>
              <td>Value B</td>
            </TableRow>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table-row")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
