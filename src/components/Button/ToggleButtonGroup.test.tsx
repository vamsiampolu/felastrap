import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/ToggleButtonGroup", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render null when no buttons are provided", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <ToggleButtonGroup name="foobar" buttons={[]} />
      </Wrapper>
    );
    render(component);
    expect(screen.queryByTestId("toggle-button-label")).not.toBeInTheDocument();
    expect(screen.queryByTestId("toggle-button-input")).not.toBeInTheDocument();
  });

  it("should create a group of toggle buttons", async () => {
    const component = (
      <ToggleButtonGroup
        name="checkbox-group"
        buttons={[
          {
            variant: "danger",
            outline: true,
            type: "checkbox",
            id: "radio-1",
            children: "Checkbox One",
            value: "one",
          },
          {
            variant: "danger",
            outline: true,
            type: "checkbox",
            id: "check-2",
            children: "Checkbox Two",
            value: "two",
          },
          {
            variant: "danger",
            outline: true,
            type: "checkbox",
            id: "check-3",
            children: "Checkbox Three",
            disabled: true,
            value: "three",
          },
        ]}
      />
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should set the initial value of the group", async () => {
    const component = (
      <ToggleButtonGroup
        name="radio-group"
        value="two"
        buttons={[
          {
            type: "radio",
            id: "radio-1",
            children: "Radio One",
            value: "one",
          },
          {
            type: "radio",
            id: "radio-2",
            children: "Radio Two",
            value: "two",
          },
          {
            type: "radio",
            id: "radio-3",
            children: "Radio Three",
            disabled: true,
            value: "three",
          },
        ]}
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.queryAllByTestId("toggle-button-label")).toHaveLength(3);
    expect(
      screen
        .queryAllByTestId("toggle-button-label")
        .map((it) => it.textContent),
    ).toEqual(["Radio One", "Radio Two", "Radio Three"]);

    expect(screen.queryAllByTestId("toggle-button-input")[1]).toBeChecked();
    // expect(screen.queryAllByTestId("toggle-button-input")[1]).toHaveValue(
    //   "two",
    // );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should update value of the group", async () => {
    const component = (
      <ToggleButtonGroup
        name="radio-group"
        value="two"
        buttons={[
          {
            type: "radio",
            id: "radio-1",
            children: "Radio One",
            value: "one",
          },
          {
            type: "radio",
            id: "radio-2",
            children: "Radio Two",
            value: "two",
          },
          {
            type: "radio",
            id: "radio-3",
            children: "Radio Three",
            disabled: true,
            value: "three",
          },
        ]}
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    const user = userEvent.setup();
    render(wrappedComponent);

    expect(screen.queryAllByTestId("toggle-button-input")[0]).not.toBeChecked();

    await user.click(screen.queryAllByTestId("toggle-button-label")[0]);
    expect(screen.queryAllByTestId("toggle-button-input")[0]).toBeChecked();
  });
});
