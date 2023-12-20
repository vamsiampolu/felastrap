import { render, screen } from "@testing-library/react";
import { TableCol, TableColProps } from "./Col";
import { TableContext, TableContextValue } from "./TableContext";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { IRenderer } from "fela";
import { Variant } from "../common";

describe("components/Table/Col", () => {
  const value: TableContextValue = {
    variant: "default",
    striped: false,
    bordered: false,
    borderless: false,
    hover: false,
  };

  const defaultProps: TableColProps = {
    header: false,
    as: undefined,
    oddRow: false,
    active: false,
  };

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

  describe("context value and default props", () => {
    it("should render a Table Col", async () => {
      const component = (
        <table>
          <TableContext.Provider value={{} as TableContextValue}>
            <thead>
              <tr>
                <TableCol>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      expect(screen.queryByTestId("table-col")).toHaveClass("table-col");

      expect(screen.queryByTestId("table-col")?.tagName).toBe("TD");
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Table Col with a className", async () => {
      const component = (
        <table>
          <TableContext.Provider value={{} as TableContextValue}>
            <thead>
              <tr>
                <TableCol className="comfortable-column">Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      expect(screen.queryByTestId("table-col")).toHaveClass("table-col");

      expect(screen.queryByTestId("table-col")).toHaveClass(
        "comfortable-column",
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Table Col with a context", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value as TableContextValue}>
            <thead>
              <tr>
                <TableCol>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      expect(screen.queryByTestId("table-col")).toHaveClass("table-col");

      expect(screen.queryByTestId("table-col")?.tagName).toBe("TD");
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Table Col with default props", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value as TableContextValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps}>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      expect(screen.queryByTestId("table-col")).toHaveClass("table-col");

      expect(screen.queryByTestId("table-col")?.tagName).toBe("TD");
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe("props based styling", () => {
    it("should render an active Table Col", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value}>
            <thead>
              <tr>
                <TableCol {...defaultProps} active>
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a header Table Col", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value}>
            <thead>
              <tr>
                <TableCol {...defaultProps} header>
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render an odd row Table Col", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value}>
            <thead>
              <tr>
                <TableCol {...defaultProps} oddRow>
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Table Col as th", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value}>
            <thead>
              <tr>
                <TableCol {...defaultProps} as="th">
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a Table Col as td", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value}>
            <thead>
              <tr>
                <TableCol {...defaultProps} as="td">
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe("context based styling", () => {
    it("should render a striped Table Col", async () => {
      const ctxValue: TableContextValue = { ...value, striped: true };

      const component = (
        <table>
          <TableContext.Provider value={ctxValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps}>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a bordered Table Col", async () => {
      const ctxValue: TableContextValue = { ...value, bordered: true };

      const component = (
        <table>
          <TableContext.Provider value={ctxValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps}>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a borderless Table Col", async () => {
      const ctxValue: TableContextValue = { ...value, borderless: true };

      const component = (
        <table>
          <TableContext.Provider value={ctxValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps}>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a hover Table Col", async () => {
      const ctxValue: TableContextValue = { ...value, hover: true };

      const component = (
        <table>
          <TableContext.Provider value={ctxValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps}>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe("striped col", () => {
    it("should render a striped header col", async () => {
      const ctxValue: TableContextValue = { ...value, striped: true };

      const component = (
        <table>
          <TableContext.Provider value={ctxValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps} header>
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a striped hover col", async () => {
      const ctxValue: TableContextValue = {
        ...value,
        striped: true,
        hover: true,
      };

      const component = (
        <table>
          <TableContext.Provider value={ctxValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps}>Column A</TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });

    it("should render a striped odd row col", async () => {
      const component = (
        <table>
          <TableContext.Provider value={value}>
            <thead>
              <tr>
                <TableCol {...defaultProps} oddRow>
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe("variants - context based styling", () => {
    const variants = [
      "default",
      "danger",
      "info",
      "primary",
      "secondary",
      "success",
      "warning",
    ];

    it.each(variants)(
      "should render a Table Col of variant %s",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps}>Column A</TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a striped Table Col of variant %s",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
          striped: true,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps}>Column A</TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a bordered Table Col of variant",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
          bordered: true,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps}>Column A</TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a borderless Table Col of variant %s",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
          borderless: true,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps}>Column A</TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a hover Table Col of variant %s",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
          hover: true,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps}>Column A</TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );
  });

  describe("variants - prop based styling", () => {
    const variants = [
      "default",
      "danger",
      "info",
      "primary",
      "secondary",
      "success",
      "warning",
    ];

    it.each(variants)(
      "should render an active Table Col of variant %s",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps} active>
                    Column A
                  </TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a header Table Col of variant %s",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps} header>
                    Column A
                  </TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render an oddRow Table Col of variant %s",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps} oddRow>
                    Column A
                  </TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a Table Col of variant %s as th",
      async (variant) => {
        const ctxValue = {
          ...value,
          variant: variant as Variant,
        };

        const component = (
          <table>
            <TableContext.Provider value={ctxValue}>
              <thead>
                <tr>
                  <TableCol {...defaultProps} as="th">
                    Column A
                  </TableCol>
                </tr>
              </thead>
            </TableContext.Provider>
          </table>
        );

        render(<Wrapper renderer={renderer}>{component}</Wrapper>);

        expect(screen.getByTestId("table-col")).toBeInTheDocument();
        const snapshot = await createSnapshot({ component, renderer });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)("should render a Table Col as td", async (variant) => {
      const ctxValue = {
        ...value,
        variant: variant as Variant,
      };

      const component = (
        <table>
          <TableContext.Provider value={ctxValue}>
            <thead>
              <tr>
                <TableCol {...defaultProps} as="th">
                  Column A
                </TableCol>
              </tr>
            </thead>
          </TableContext.Provider>
        </table>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("table-col")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    });
  });
});
