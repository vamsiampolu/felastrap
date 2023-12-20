import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IRenderer } from "fela";
import { ChangeEvent, useState } from "react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Switch, SwitchProps } from "./Switch";

function ControlledSwitch({
  checked: initialChecked,
  onChange,
  label,
  ...props
}: SwitchProps) {
  const [checked, setChecked] = useState(initialChecked ?? false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      label={label}
      {...props}
    />
  );
}

describe("components/Form/Switch", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a switch button", async () => {
    const component = <Switch id="spiel" label="Switch Label" />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("switch-field")).toBeInTheDocument();

    expect(screen.getByTestId("switch-input")).toBeInTheDocument();
    expect(screen.getByTestId("form-label")).toBeInTheDocument();

    expect(screen.queryByTestId("switch-input")).toHaveAttribute("id", "spiel");
    expect(screen.queryByTestId("form-label")).toHaveAttribute("for", "spiel");

    expect(screen.queryByTestId("switch-input")).toHaveAttribute(
      "role",
      "switch",
    );
    expect(screen.queryByTestId("switch-input")).toHaveAttribute(
      "type",
      "checkbox",
    );

    expect(screen.queryByTestId("switch-input")?.tagName).toBe("INPUT");
    expect(screen.queryByTestId("switch-input")).not.toBeChecked();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should reverse a switch button", async () => {
    const component = <Switch reverse id="spiel" label="Switch Label" />;

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a disabled switch button", async () => {
    const component = <Switch disabled id="spiel" label="Switch Label" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("switch-input")).toBeInTheDocument();
    expect(screen.queryByTestId("switch-input")).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a checked switch button", async () => {
    const component = (
      <Switch
        defaultChecked
        onChange={() => undefined}
        id="spiel"
        label="Switch Label"
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("switch-input")).toBeInTheDocument();
    expect(screen.queryByTestId("switch-input")).toBeChecked();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should change the switch state to checked", async () => {
    const onChange = jest.fn();
    const component = (
      <Switch onChange={onChange} id="spiel" label="Switch Label" />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const user = userEvent.setup();

    expect(screen.getByTestId("switch-input")).toBeInTheDocument();
    expect(screen.queryByTestId("switch-input")).not.toBeChecked();

    const checkbox = screen.queryByTestId("switch-input");
    await user.click(checkbox!);

    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });

  it("should change the switch state to unchecked", async () => {
    const onChange = jest.fn();
    const component = (
      <Switch
        defaultChecked
        onChange={onChange}
        id="spiel"
        label="Switch Label"
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const user = userEvent.setup();

    expect(screen.getByTestId("switch-input")).toBeInTheDocument();
    expect(screen.queryByTestId("switch-input")).toBeChecked();

    const checkbox = screen.queryByTestId("switch-input");
    await user.click(checkbox!);

    expect(screen.queryByTestId("switch-input")).not.toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });

  it("should check a controlled switch", async () => {
    const onChange = jest.fn();
    const component = (
      <ControlledSwitch
        checked={false}
        onChange={onChange}
        id="spiel"
        label="Switch Label"
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const user = userEvent.setup();

    const checkbox = screen.queryByTestId("switch-input");
    await user.click(checkbox!);

    expect(screen.queryByTestId("switch-input")).toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });

  it("should uncheck a controlled switch", async () => {
    const onChange = jest.fn();
    const component = (
      <ControlledSwitch
        checked
        onChange={onChange}
        id="spiel"
        label="Switch Label"
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const user = userEvent.setup();

    const checkbox = screen.queryByTestId("switch-input");
    await user.click(checkbox!);

    expect(checkbox).not.toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });
});
