import { StyleProps } from "../common";
import { CssProps } from "./Column";
import {
  base,
  breakpointColWidth,
  colOffset,
  colOrder,
  colWidth,
  gutters,
  horizontalAlign,
  verticalAlign,
} from "./columnStyles";

describe("base", () => {
  it("should return a style with empty props", () => {
    expect(base({} as StyleProps<CssProps>)).toEqual({
      flexGrow: 1,
      flexShrink: 0,
    });
  });

  it("should return a style with span", () => {
    expect(base({ span: "auto" } as StyleProps<CssProps>)).toEqual({
      flexShrink: 0,
      flexGrow: 0,
      flexBasis: "auto",
    });
  });

  it("should return a style with maxCols", () => {
    expect(base({ maxCols: 12 } as StyleProps<CssProps>)).toEqual({
      flexShrink: 0,
      flexGrow: 0,
      flexBasis: "auto",
    });
  });
});

describe("colOffset", () => {
  it("should return an empty object with no props", () => {
    expect(colOffset({} as StyleProps<CssProps>)).toEqual({});
  });

  it("should return a offset style", () => {
    expect(colOffset({ offset: 4 } as StyleProps<CssProps>)).toEqual({
      marginLeft: "25%",
    });
  });

  it("should return an empty object when offset is 0", () => {
    expect(colOffset({ offset: 0 } as StyleProps<CssProps>)).toEqual({});
  });
});

describe("colWidth", () => {
  it("should return the col width based on span: 4", () => {
    expect(colWidth({ span: 4 } as StyleProps<CssProps>)).toEqual({
      width: "33.333333333333336% !important",
    });
  });

  it("should return the col width based on span: auto", () => {
    expect(colWidth({ span: "auto" } as StyleProps<CssProps>)).toEqual({
      width: "auto",
    });
  });

  it("should return the col width based on span: null or undefined", () => {
    expect(colWidth({ span: null } as StyleProps<CssProps>)).toEqual({});
    expect(colWidth({ span: undefined } as StyleProps<CssProps>)).toEqual({});
  });
});

describe("verticalAlign", () => {
  it("should return flex-start given an alignment of start", () => {
    expect(verticalAlign({ align: "start" } as StyleProps<CssProps>)).toEqual({
      alignItems: "flex-start",
    });
  });

  it("should return flex-end given an alignment of end", () => {
    expect(verticalAlign({ align: "end" } as StyleProps<CssProps>)).toEqual({
      alignItems: "flex-end",
    });
  });

  it.each(["center", "baseline", "stretch"])(
    "should return the align %s as alignItems",
    (align) => {
      expect(verticalAlign({ align } as StyleProps<CssProps>)).toEqual({
        alignItems: align,
      });
    },
  );
});

describe("horizontalAlign", () => {
  it("should return the justifyContent for center", () => {
    expect(
      horizontalAlign({ justify: "center" } as StyleProps<CssProps>),
    ).toEqual({
      justifyContent: "center",
    });
  });

  it.each(["start", "end"])(
    "should return the justifyContent for the value %s",
    (justify) => {
      expect(horizontalAlign({ justify } as StyleProps<CssProps>)).toEqual({
        justifyContent: `flex-${justify}`,
      });
    },
  );

  it.each(["around", "between", "evenly"])(
    "should return the justifyContent for the value %s",
    (justify) => {
      expect(horizontalAlign({ justify } as StyleProps<CssProps>)).toEqual({
        justifyContent: `space-${justify}`,
      });
    },
  );
});

describe("breakpointColWidth", () => {
  describe("single breakpoint using a col span", () => {
    it("should return style for sm", () => {
      const style = breakpointColWidth({ sm: 4 } as StyleProps<CssProps>);
      expect(style).toEqual({
        "@media (min-width: 576px)": {
          width: "33.333333333333336% !important",
        },
      });
    });

    it("should return empty object when no props are provided", () => {
      const style = breakpointColWidth({} as unknown as StyleProps<CssProps>);
      expect(style).toEqual({});
    });

    it("should return empty object for invalid col span", () => {
      const style = breakpointColWidth({
        sm: 15,
      } as unknown as StyleProps<CssProps>);
      expect(style).toEqual({});
    });

    it("should return style for md", () => {
      const style = breakpointColWidth({ md: 4 } as StyleProps<CssProps>);
      expect(style).toEqual({
        "@media (min-width: 768px)": {
          width: "33.333333333333336% !important",
        },
      });
    });

    it("should return style for lg", () => {
      const style = breakpointColWidth({ lg: 4 } as StyleProps<CssProps>);
      expect(style).toEqual({
        "@media (min-width: 992px)": {
          width: "33.333333333333336% !important",
        },
      });
    });

    it("should return style for xl", () => {
      const style = breakpointColWidth({ xl: 4 } as StyleProps<CssProps>);
      expect(style).toEqual({
        "@media (min-width: 1200px)": {
          width: "33.333333333333336% !important",
        },
      });
    });

    it("should return style for xxl", () => {
      const style = breakpointColWidth({ xxl: 4 } as StyleProps<CssProps>);
      expect(style).toEqual({
        "@media (min-width: 1320px)": {
          width: "33.333333333333336% !important",
        },
      });
    });
  });

  describe("multiple breakpoints using a col span", () => {
    it("should render a style when sm and md are provided", () => {
      const props = {
        md: 4,
        sm: 6,
      } as StyleProps<CssProps>;
      const style = breakpointColWidth(props);
      expect(style).toEqual({
        "@media (min-width: 576px) and (max-width: 767.98px)": {
          width: "50% !important",
        },
        "@media (min-width: 768px)": {
          width: "33.333333333333336% !important",
        },
      });
    });

    it("should create a style when sm, md and lg are provided", () => {
      const props = {
        md: 4,
        lg: 2,
        sm: 12,
      } as StyleProps<CssProps>;

      const style = breakpointColWidth(props);

      expect(style).toEqual({
        "@media (min-width: 576px) and (max-width: 767.98px)": {
          width: "100% !important",
        },
        "@media (min-width: 768px) and (max-width: 991.98px)": {
          width: "33.333333333333336% !important",
        },
        "@media (min-width: 992px)": {
          width: "16.666666666666668% !important",
        },
      });
    });

    it("should create a style with sm and lg", () => {
      const props = {
        lg: 2,
        sm: 12,
      } as StyleProps<CssProps>;

      const style = breakpointColWidth(props);
      expect(style).toEqual({
        "@media (min-width: 576px) and (max-width: 991.98px)": {
          width: "100% !important",
        },
        "@media (min-width: 992px)": {
          width: "16.666666666666668% !important",
        },
      });
    });

    it("should create a style with sm, md, lg, xl, xxl", () => {
      const props = {
        md: 4,
        lg: 2,
        sm: 12,
        xl: "auto",
        xxl: "auto",
      } as StyleProps<CssProps>;

      expect(breakpointColWidth(props)).toEqual({
        "@media (min-width: 576px) and (max-width: 767.98px)": {
          width: "100% !important",
        },
        "@media (min-width: 768px) and (max-width: 991.98px)": {
          width: "33.333333333333336% !important",
        },
        "@media (min-width: 992px) and (max-width: 1199.98px)": {
          width: "16.666666666666668% !important",
        },
        "@media (min-width: 1200px) and (max-width: 1319.98px)": {
          width: "auto",
        },
        "@media (min-width: 1320px)": {
          width: "auto",
        },
      });
    });
  });
});

describe("colOrder", () => {
  it("should return the style for order: first", () => {
    expect(colOrder({ order: "first" } as StyleProps<CssProps>)).toEqual({
      order: "-1",
    });
  });

  it("should return the style for order: last", () => {
    expect(colOrder({ order: "last" } as StyleProps<CssProps>)).toEqual({
      order: "6",
    });
  });

  it.each([0, 1, 2, 3, 4, 5])(
    "should return the style for order: %d",
    (order) => {
      expect(colOrder({ order } as unknown as StyleProps<CssProps>)).toEqual({
        order: `${order}`,
      });
    },
  );
});

describe("gutters", () => {
  it("should return empty object when no props provided", () => {
    expect(gutters({} as StyleProps<CssProps>)).toEqual({});
  });
  it("should return gutters when gx is provided", () => {
    expect(gutters({ gx: "0.25rem" } as StyleProps<CssProps>)).toEqual({
      paddingLeft: "calc(0.5 * 0.25rem)",
      paddingRight: "calc(0.5 * 0.25rem)",
    });
  });

  it("should return gutters when gy is provided", () => {
    expect(gutters({ gy: "0.25rem" } as StyleProps<CssProps>)).toEqual({
      marginTop: "0.25rem",
    });
  });
});
