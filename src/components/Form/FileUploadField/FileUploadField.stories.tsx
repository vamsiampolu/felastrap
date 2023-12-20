import { type Meta, type StoryObj } from "@storybook/react";
import { FileUploadField } from "./FileUploadField";

export type Story = StoryObj<typeof FileUploadField>;
const meta: Meta<typeof FileUploadField> = {
  title: "components/Form/FileUploadField",
  component: FileUploadField,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Basic: Story = {
  args: {
    label: "Upload File",
    id: "file-upload-basic",
  },
};

export const Small: Story = {
  args: {
    label: "Upload File",
    id: "file-upload-small",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Upload File",
    id: "file-upload-large",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Upload File",
    id: "file-upload-basic",
    disabled: true,
  },
};
