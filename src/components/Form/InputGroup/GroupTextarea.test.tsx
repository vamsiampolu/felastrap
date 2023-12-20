import { IRenderer } from "fela";
import { GroupTextarea } from "./GroupTextarea";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { InputGroupContext } from "./InputGroupContext";
import { Size } from "../../common";
import { render, screen } from "@testing-library/react";

describe("components/Form/InputGroup/GroupTextarea", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a group text area", async () => {
    const component = <GroupTextarea />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("form-textarea")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a group text area of size %s",
    async (size) => {
      const component = (
        <InputGroupContext.Provider value={{ group: true, size: size as Size }}>
          <GroupTextarea />
        </InputGroupContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("form-textarea")).toBeInTheDocument();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
