import { StyleProps } from "../common";
import { getBorderRadius, overlayBase, overlayLayoutRule } from "./imageStyle";

describe("components/Card/imageStyle", () => {
  it("should get the border radius", () => {
    expect(getBorderRadius({})).toEqual({});
  });

  it("should get the border radius for top placement", () => {
    expect(getBorderRadius({ top: true })).toEqual({
      borderTopLeftRadius: "calc(0.375rem - 1px)",
      borderTopRightRadius: "calc(0.375rem - 1px)",
    });
  });

  it("should get the border radius for bottom placement", () => {
    expect(getBorderRadius({ bottom: true })).toEqual({
      borderBottomRightRadius: "calc(0.375rem - 1px)",
      borderBottomLeftRadius: "calc(0.375rem - 1px)",
    });
  });

  it("should get the border radius for overlay image", () => {
    expect(getBorderRadius({ overlay: true })).toEqual({
      borderTopLeftRadius: "calc(0.375rem - 1px)",
      borderTopRightRadius: "calc(0.375rem - 1px)",
      borderBottomRightRadius: "calc(0.375rem - 1px)",
      borderBottomLeftRadius: "calc(0.375rem - 1px)",
    });
  });
});

describe("overlayBase", () => {
  it("should return the overlay base style", () => {
    expect(
      overlayBase({ overlay: true } as StyleProps<{ overlay: boolean }>),
    ).toEqual({
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    });
  });

  it("should return empty when overlay is false", () => {
    expect(
      overlayBase({ overlay: false } as StyleProps<{ overlay: boolean }>),
    ).toEqual({});
  });
});

describe("overlayLayoutRule", () => {
  it("should return the overlay layout rule when overlay is true", () => {
    expect(
      overlayLayoutRule({ overlay: true } as StyleProps<{ overlay: boolean }>),
    ).toEqual({
      paddingleft: "1rem",
      paddingRight: "1rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      borderTopLeftRadius: "calc(0.375rem - 1px)",
      borderTopRightRadius: "calc(0.375rem - 1px)",
      borderBottomRightRadius: "calc(0.375rem - 1px)",
      borderBottomLeftRadius: "calc(0.375rem - 1px)",
    });
  });

  it("should return an empty object when overlay is false", () => {
    expect(
      overlayLayoutRule({ overlay: false } as StyleProps<{ overlay: boolean }>),
    ).toEqual({});
  });
});
