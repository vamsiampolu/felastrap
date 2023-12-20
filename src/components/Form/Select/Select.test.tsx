import { render, screen } from "@testing-library/react";
import { Select } from "./Select";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { IRenderer } from "fela";
import { Size } from "../../common";
import userEvent from "@testing-library/user-event";

describe("components/Form/Select/Select", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a select component", async () => {
    const component = (
      <Select
        placeholder="Placeholder"
        options={[
          {
            id: "foobar-0",
            disabled: false,
            value: "Zero",
            label: "Zero",
          },
          {
            id: "foobar-1",
            disabled: false,
            value: "One",
            label: "One",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-control-select")).toBeInTheDocument();
    expect(screen.getByTestId("select-option-placeholder")).toBeInTheDocument();

    expect(screen.getByTestId("select-control")).toBeInTheDocument();
    expect(screen.queryByTestId("select-control")).toHaveClass("form-select");

    expect(screen.queryByTestId("select-option-placeholder")?.tagName).toBe(
      "OPTION",
    );
    expect(screen.queryByTestId("select-option-placeholder")).toHaveTextContent(
      "Placeholder",
    );

    expect(screen.queryByTestId("select-control")).toBeVisible();
    expect(screen.queryByTestId("select-option-placeholder")).toBeVisible();

    expect(screen.getAllByTestId("select-option")).toHaveLength(2);
    const [first, second] = screen.getAllByTestId("select-option");

    expect(first).toHaveAttribute("id", "foobar-0");
    expect(second).toHaveAttribute("id", "foobar-1");

    expect(first).toHaveValue("Zero");
    expect(second).toHaveValue("One");

    expect(first).toHaveTextContent("Zero");
    expect(second).toHaveTextContent("One");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a select component with a label", async () => {
    const component = (
      <Select
        id="lame-thrower"
        label="Select Label"
        placeholder="Placeholder"
        options={[
          {
            id: "foobar-0",
            disabled: false,
            value: "Zero",
            label: "Zero",
          },
          {
            id: "foobar-1",
            disabled: false,
            value: "One",
            label: "One",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("select-control")).toBeInTheDocument();
    expect(screen.queryByTestId("select-control")).toHaveAttribute(
      "id",
      "lame-thrower",
    );

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveAttribute(
      "for",
      "lame-thrower",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should render a select component of size %s",
    async (controlSize) => {
      const component = (
        <Select
          controlSize={controlSize as Size}
          placeholder="Placeholder"
          options={[
            {
              id: "foobar-0",
              disabled: false,
              value: "Zero",
              label: "Zero",
            },
            {
              id: "foobar-1",
              disabled: false,
              value: "One",
              label: "One",
            },
          ]}
        />
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should select an option from a select control", async () => {
    const component = (
      <Select
        id="lame-thrower"
        label="Select Label"
        placeholder="Placeholder"
        options={[
          {
            id: "foobar-0",
            disabled: false,
            value: "Zero",
            label: "Zero",
          },
          {
            id: "foobar-1",
            disabled: false,
            value: "One",
            label: "One",
          },
        ]}
      />
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("select-control")).toBeInTheDocument();

    const select = screen.getByTestId("select-control");
    const second = screen.getAllByTestId("select-option")[1];

    await user.selectOptions(select, second);
    expect(select).toHaveValue("One");
  });

  it("should select multiple options from a multi-select control", async () => {
    const component = (
      <Select
        multiple
        id="lame-thrower"
        label="Select Label"
        placeholder="Placeholder"
        options={[
          {
            id: "foobar-0",
            disabled: false,
            value: "Zero",
            label: "Zero",
          },
          {
            id: "foobar-1",
            disabled: false,
            value: "One",
            label: "One",
          },
        ]}
      />
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const select = screen.getByTestId("select-control");
    const [first, second] = screen.getAllByTestId("select-option");

    await user.selectOptions(select, [first, second]);
    expect(select).toHaveValue(["Zero", "One"]);
  });

  it("should invoke onChange prop from a select control", async () => {
    const onChange = jest.fn();
    const component = (
      <Select
        onChange={onChange}
        id="lame-thrower"
        label="Select Label"
        placeholder="Placeholder"
        options={[
          {
            id: "foobar-0",
            disabled: false,
            value: "Zero",
            label: "Zero",
          },
          {
            id: "foobar-1",
            disabled: false,
            value: "One",
            label: "One",
          },
        ]}
      />
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const select = screen.getByTestId("select-control");
    const second = screen.getAllByTestId("select-option")[1];

    await user.selectOptions(select, second);
    expect(onChange).toHaveBeenCalled();
  });
});
