import { IRenderer } from "fela";
import { InputGroup } from "./InputGroup";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Size } from "../../common";
import { GroupInput } from "./GroupInput";
import { render, screen } from "@testing-library/react";

describe("components/Form/InputGroup/InputGroup", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display an input group", async () => {
    const component = (
      <InputGroup>
        <GroupInput />
      </InputGroup>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("input-group")).toBeInTheDocument();
    expect(screen.getByTestId("input-group")).toHaveClass("input-group");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display an input group of size %s",
    async (size) => {
      const component = (
        <InputGroup size={size as Size}>
          <GroupInput />
        </InputGroup>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("input-group")).toBeInTheDocument();
      expect(screen.getByTestId("input-group")).toHaveClass("input-group");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
