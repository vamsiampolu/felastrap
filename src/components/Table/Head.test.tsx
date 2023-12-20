import { IRenderer } from "fela";
import { TableHead } from "./Head";
import { TableContext, TableContextValue } from "./TableContext";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Table/Head", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
    cssReboot(renderer);
  });

  // afterAll(() => {
  //   renderer = undefined as unknown as IRenderer;
  // })

  it("should render a table head with the default context", async () => {
    const component = (
      <table>
        <TableContext.Provider value={{} as TableContextValue}>
          <TableHead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>Value A</td>
              <td>Value B</td>
            </tr>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    expect(screen.queryByTestId("table-head")).toHaveClass("table-head");
    expect(screen.queryByTestId("table-head")?.tagName).toEqual("THEAD");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a table head with a user provided className", async () => {
    const component = (
      <table>
        <TableContext.Provider value={{} as TableContextValue}>
          <TableHead className="comfortable-head">
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>Value A</td>
              <td>Value B</td>
            </tr>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    expect(screen.queryByTestId("table-head")).toHaveClass("table-head");

    expect(screen.queryByTestId("table-head")).toHaveClass("comfortable-head");
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a table head with the context", async () => {
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
          <TableHead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>Value A</td>
              <td>Value B</td>
            </tr>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a bordered table head", async () => {
    const value: TableContextValue = {
      variant: "default",
      bordered: true,
      borderless: false,
      striped: false,
      hover: false,
    };

    const component = (
      <table>
        <TableContext.Provider value={value}>
          <TableHead>
            <tr>
              <td>Column A</td>
              <td>Column B</td>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <td>Value A</td>
              <td>Value B</td>
            </tr>
          </tbody>
        </TableContext.Provider>
      </table>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("table-head")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
