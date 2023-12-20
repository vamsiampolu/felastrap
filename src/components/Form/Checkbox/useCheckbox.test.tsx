import { ChangeEventHandler } from "react";
import { CHECKBOX_STATES, CheckboxStates } from "./CheckboxStates";
import { useCheckbox } from "./useCheckbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function ExampleCheckbox({
  value,
  allowIndeterminate,
  onChange = () => undefined,
}: {
  value: CheckboxStates;
  allowIndeterminate: boolean;
  onChange?: ChangeEventHandler;
}) {
  const ref = useCheckbox({ value, allowIndeterminate });
  return (
    <input
      data-testid="example-checkbox"
      type="checkbox"
      ref={ref}
      onChange={onChange}
    />
  );
}

describe("components/Form/Checkbox/useCheckbox", () => {
  it("should initialize checkbox state correctly", () => {
    const component = (
      <ExampleCheckbox
        value={CHECKBOX_STATES.Empty}
        allowIndeterminate={true}
      />
    );
    render(component);

    expect(screen.getByTestId("example-checkbox")).toBeInTheDocument();
    expect(screen.queryByTestId("example-checkbox")).not.toBeChecked();

    const checkbox = screen.queryByTestId("example-checkbox");
    expect((checkbox as HTMLInputElement).indeterminate).toBe(false);
  });

  it("should initialize a checked checkbox correctly", () => {
    const component = (
      <ExampleCheckbox
        value={CHECKBOX_STATES.Checked}
        allowIndeterminate={true}
      />
    );
    render(component);

    expect(screen.getByTestId("example-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("example-checkbox")).toBeChecked();

    const checkbox = screen.queryByTestId("example-checkbox");
    expect((checkbox as HTMLInputElement).indeterminate).toBe(false);
  });

  it("should initialize an indeterminate checkbox correctly", () => {
    const component = (
      <ExampleCheckbox
        value={CHECKBOX_STATES.Indeterminate}
        allowIndeterminate={true}
      />
    );

    render(component);
    expect(screen.getByTestId("example-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("example-checkbox")).not.toBeChecked();

    const checkbox = screen.queryByTestId("example-checkbox");
    expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
  });

  it("should update checkbox state to checked", async () => {
    const component = (
      <ExampleCheckbox
        value={CHECKBOX_STATES.Empty}
        allowIndeterminate={false}
      />
    );
    const user = userEvent.setup();
    render(component);

    const checkbox = screen.queryByTestId("example-checkbox");
    await user.click(checkbox!);

    expect(screen.queryByTestId("example-checkbox")).toBeChecked();
    expect((checkbox as HTMLInputElement).indeterminate).toBe(false);
  });

  it("should update checkbox state to be unchecked", async () => {
    const component = (
      <ExampleCheckbox
        value={CHECKBOX_STATES.Checked}
        allowIndeterminate={false}
      />
    );
    const user = userEvent.setup();

    render(component);
    expect(screen.queryByTestId("example-checkbox")).toBeChecked();

    const checkbox = screen.queryByTestId("example-checkbox");
    await user.click(checkbox!);

    expect(screen.queryByTestId("example-checkbox")).not.toBeChecked();
    expect((checkbox as HTMLInputElement).indeterminate).toBe(false);
  });
});
