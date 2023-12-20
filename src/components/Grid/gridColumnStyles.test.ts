import { StyleProps } from "../common";
import {
  gridColumnRule,
  breakpointGridColumnRule,
  gridStartRule,
  breakpointGridStartRule,
} from "./gridColumnStyles";
import { GridColumnProps } from "./types";

describe("components/Grid/gridColumnStyles - gridColumnRule", () => {
  it("should return an object with the gridColumnRule for a valid span", () => {
    const style = gridColumnRule({ span: 3 } as StyleProps<GridColumnProps>);
    expect(style).toEqual({ gridColumn: "auto/span 3" });
  });
});

describe("components/Grid/gridColumnStyles - breakpointGridColumnRule", () => {
  it("should return the styles for a grid column with no breakpoints", async () => {
    const style = breakpointGridColumnRule({} as StyleProps<GridColumnProps>);
    expect(style).toEqual({});
  });

  it("should return the styles for a grid column with breakpoint sm", async () => {
    const style = breakpointGridColumnRule({
      sm: 4,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 576px)": {
        gridColumn: "auto/span 4",
      },
    });
  });

  it("should return the styles for a grid column with breakpoint md", async () => {
    const style = breakpointGridColumnRule({
      md: 4,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 768px)": {
        gridColumn: "auto/span 4",
      },
    });
  });

  it("should return the styles for a grid column with breakpoint lg", async () => {
    const style = breakpointGridColumnRule({
      lg: 4,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 992px)": {
        gridColumn: "auto/span 4",
      },
    });
  });

  it("should return the styles for a grid column with breakpoint xl", async () => {
    const style = breakpointGridColumnRule({
      xl: 4,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 1200px)": {
        gridColumn: "auto/span 4",
      },
    });
  });

  it("should return the styles for a grid column with breakpoint xxl", async () => {
    const style = breakpointGridColumnRule({
      xxl: 4,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 1320px)": {
        gridColumn: "auto/span 4",
      },
    });
  });

  it("should return a style object when two breakpoint md, lg is provided", () => {
    const style = breakpointGridColumnRule({
      lg: 2,
      md: 6,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 768px) and (max-width: 991.98px)": {
        gridColumn: "auto/span 6",
      },
      "@media (min-width: 992px)": {
        gridColumn: "auto/span 2",
      },
    });
  });
});

describe("components/Grid/gridColumnStyles - gridColumnStartRule", () => {
  it("should return styles for grid column start", () => {
    const style = gridStartRule({ start: 3 } as StyleProps<GridColumnProps>);
    expect(style).toEqual({ gridColumnStart: 3 });
  });
});

describe("components/Grid/gridColumnStyles - breakpointGridStartRule", () => {
  it("should return an empty object when no breakpoint values are provided", () => {
    const style = breakpointGridStartRule({} as StyleProps<GridColumnProps>);
    expect(style).toEqual({});
  });

  it("should return a style object when a breakpoint sm is provided", () => {
    const style = breakpointGridStartRule({
      startSm: 3,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 576px)": { gridColumnStart: 3 },
    });
  });

  it("should return a style object when a breakpoint md is provided", () => {
    const style = breakpointGridStartRule({
      startMd: 3,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 768px)": { gridColumnStart: 3 },
    });
  });

  it("should return a style object when a breakpoint lg is provided", () => {
    const style = breakpointGridStartRule({
      startLg: 3,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 992px)": { gridColumnStart: 3 },
    });
  });

  it("should return a style object when a breakpoint xl is provided", () => {
    const style = breakpointGridStartRule({
      startXl: 3,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 1200px)": { gridColumnStart: 3 },
    });
  });

  it("should return a style object when a breakpoint xxl is provided", () => {
    const style = breakpointGridStartRule({
      startXxl: 3,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 1320px)": { gridColumnStart: 3 },
    });
  });

  it("should return a style object when two breakpoint md, lg is provided", () => {
    const style = breakpointGridStartRule({
      startLg: 2,
      startMd: 6,
    } as StyleProps<GridColumnProps>);
    expect(style).toEqual({
      "@media (min-width: 768px) and (max-width: 991.98px)": {
        gridColumnStart: 6,
      },
      "@media (min-width: 992px)": {
        gridColumnStart: 2,
      },
    });
  });
});
