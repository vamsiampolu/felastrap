import { IRenderer } from "fela";
import { GroupButton } from "./GroupButton";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Size } from "../../common";
import { InputGroupContext, InputGroupContextValue } from "./InputGroupContext";
import { render, screen } from "@testing-library/react";

describe("components/Form/InputGroup/GroupButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a default input group button", async () => {
    const component = <GroupButton>Group Button</GroupButton>;

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display an input group button of size %s",
    async (size) => {
      const value: InputGroupContextValue = {
        size: size as Size,
        group: false,
      };

      const component = (
        <InputGroupContext.Provider value={value}>
          <GroupButton>Group Button</GroupButton>
        </InputGroupContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("input-group-btn")).toBeInTheDocument();

      expect(screen.queryByTestId("input-group-btn")).toHaveClass(
        "input-group-btn",
      );
      expect(screen.queryByTestId("input-group-btn")).toHaveTextContent(
        "Group Button",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
