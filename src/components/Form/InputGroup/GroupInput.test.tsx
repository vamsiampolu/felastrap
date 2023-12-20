import { IRenderer } from "fela";
import { GroupInput } from "./GroupInput";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/InputGroup/GroupInput", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a group input", async () => {
    const component = <GroupInput />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("text-input")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
