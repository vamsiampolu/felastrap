import { GroupText } from "./GroupText";
import { InputGroupContext, InputGroupContextValue } from "./InputGroupContext";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Size } from "../../common";
import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";

describe("components/Form/InputGroup/GroupText", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
    cssReboot(renderer);
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  // afterAll(() => {
  //   renderer.clear();
  // });

  it("displays the default group text", async () => {
    const component = (
      <InputGroupContext.Provider value={{} as InputGroupContextValue}>
        <GroupText>Group Text</GroupText>;
      </InputGroupContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("input-group-text")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "display a group text of size %s",
    async (size) => {
      const value: InputGroupContextValue = {
        size: size as Size,
        group: false,
      };

      const component = (
        <InputGroupContext.Provider value={value}>
          <GroupText>Group Text</GroupText>
        </InputGroupContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("input-group-text")).toBeInTheDocument();

      expect(screen.queryByTestId("input-group-text")).toHaveTextContent(
        "Group Text",
      );
      expect(screen.queryByTestId("input-group-text")).toHaveClass(
        "input-group-text",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
