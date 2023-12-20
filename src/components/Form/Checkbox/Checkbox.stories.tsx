import { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { CHECKBOX_STATES, CheckboxStates } from "./CheckboxStates";
import { useState } from "react";
import { Container } from "../../Flex";

export type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: "components/Form/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Template: StoryFn<typeof Checkbox> = (args) => {
  const {
    id = "template-checkbox",
    label = "Label",
    allowIndeterminate = false,
    value: initialValue = CHECKBOX_STATES.Empty,
    ...props
  } = args;
  const [value, setValue] = useState(initialValue);
  const [value1, setValue1] = useState(initialValue);
  const onChange = () => {
    let updatedValue;
    switch (value) {
      case CHECKBOX_STATES.Checked: {
        updatedValue = CHECKBOX_STATES.Empty;
        break;
      }

      case CHECKBOX_STATES.Indeterminate: {
        if (allowIndeterminate) {
          updatedValue = CHECKBOX_STATES.Checked;
        }

        break;
      }

      case CHECKBOX_STATES.Empty: {
        if (allowIndeterminate) {
          updatedValue = CHECKBOX_STATES.Indeterminate;
        } else {
          updatedValue = CHECKBOX_STATES.Checked;
        }
        break;
      }
    }

    setValue(updatedValue as CheckboxStates);
  };

  const onChangeOne = () => {
    let updatedValue;
    switch (value1) {
      case CHECKBOX_STATES.Checked: {
        updatedValue = CHECKBOX_STATES.Empty;
        break;
      }

      case CHECKBOX_STATES.Indeterminate: {
        if (allowIndeterminate) {
          updatedValue = CHECKBOX_STATES.Checked;
        }

        break;
      }

      case CHECKBOX_STATES.Empty: {
        if (allowIndeterminate) {
          updatedValue = CHECKBOX_STATES.Indeterminate;
        } else {
          updatedValue = CHECKBOX_STATES.Checked;
        }
        break;
      }
    }

    setValue1(updatedValue as CheckboxStates);
  };

  return (
    <Container>
      {allowIndeterminate && (
        <>
          <p style={{ marginBottom: "2rem" }}>
            The state for the checkboxes is managed by a custom state handler
            that cycles from:
          </p>
          <p style={{ marginBottom: "2rem" }}>
            <kbd>CHECKED</kbd> to <kbd>EMPTY</kbd>
          </p>
          <p style={{ marginBottom: "2rem" }}>
            <kbd>EMPTY</kbd> to <kbd>INDETERMINATE</kbd>
          </p>
          <p style={{ marginBottom: "2rem" }}>
            <kbd>INDETERMINATE</kbd> to <kbd>CHECKED</kbd>.
          </p>
        </>
      )}
      <Checkbox
        allowIndeterminate={allowIndeterminate}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        {...props}
      />
      <Checkbox
        allowIndeterminate={allowIndeterminate}
        value={value1}
        onChange={onChangeOne}
        id={`${id}-one`}
        label={`${label} One`}
        {...props}
      />
    </Container>
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  id: "basic-checkbox",
  label: "Default Checkbox",
};

export const Checked: Story = Template.bind({});
Checked.args = {
  id: "checked-checkbox",
  label: "Checked",
  value: CHECKBOX_STATES.Checked,
};

export const Indeterminate: Story = Template.bind({});
Indeterminate.args = {
  id: "indeterminate-checkbox",
  label: "Indeterminate",
  value: CHECKBOX_STATES.Indeterminate,
  allowIndeterminate: true,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  id: "basic-checkbox",
  label: "Disabled Checkbox",
  value: CHECKBOX_STATES.Checked,
  disabled: true,
};

export const Reverse: Story = Template.bind({});
Reverse.args = {
  id: "basic-checkbox",
  label: "Disabled Checkbox",
  value: CHECKBOX_STATES.Checked,
  reverse: true,
};
