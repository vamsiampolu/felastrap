import { render, screen } from "@testing-library/react";
import { FormText } from "./FormText";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { IRenderer } from "fela";

describe("components/Form/Controls/FormText", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a form text", async () => {
    const component = <FormText>Form Text</FormText>;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("form-text")).toBeInTheDocument();

    expect(screen.getByTestId("form-text")).toHaveClass("form-text");
    expect(screen.getByTestId("form-text")).toHaveTextContent("Form Text");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
