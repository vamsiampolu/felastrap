import type { StoryFn, StoryObj, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { useState } from "react";
import { Column, Container, Row } from "../Flex";
import { Button } from "../Button";
import { ColumnProps } from "../Flex/Column";
import { useFela } from "react-fela";
import { RowProps } from "../Flex/Row";
import { TextField, TextareaField } from "../Form";

export type Story = StoryObj<typeof Modal>;
const meta: Meta<typeof Modal> = {
  title: "components/Modal",
  component: Modal,
};

export default meta;

export const Template: StoryFn<typeof Modal> = (args) => {
  const {
    title = "Modal Template",
    isOpen: initIsOpen = false,
    blocking = false,
    children,
    centered = false,
    size = "medium",
    scrollable = false,
  } = args;
  const [isOpen, setOpen] = useState(initIsOpen);
  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Handle Modal Close");
    closeModal();
  };

  const saveChanges = () => {
    console.log("Handle Save Changes");
    closeModal();
  };

  const footer = (
    <>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={saveChanges}>
        Save Changes
      </Button>
    </>
  );

  return (
    <Row>
      <Column span={2} offset={4}>
        <Button variant="primary" onClick={openModal}>
          Open Modal
        </Button>
      </Column>
      <Modal
        scrollable={scrollable}
        size={size}
        blocking={blocking}
        centered={centered}
        title={title}
        footer={footer}
        isOpen={isOpen}
        handleClose={handleClose}
        saveChanges={saveChanges}
      >
        {children}
      </Modal>
    </Row>
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  title: "Basic Modal",
  isOpen: false,
  children: <p>Basic Modal Body.</p>,
};

export const Small: Story = Template.bind({});
Small.args = {
  size: "small",
  title: "Basic Modal",
  isOpen: false,
  children: <p>Basic Modal Body.</p>,
};

export const Large: Story = Template.bind({});
Large.args = {
  size: "large",
  title: "Basic Modal",
  isOpen: false,
  children: <p>Basic Modal Body.</p>,
};

export const Centered: Story = Template.bind({});
Centered.args = {
  title: "Centered Modal",
  isOpen: false,
  children: <p>This modal is vertically centered.</p>,
};

const paddingRule = () => ({
  paddingTop: "0.75rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingBottom: "0.75rem",
});

const flexRule = () => ({
  flexShrink: "1 !important",
  flexGrow: "0 !important",
});

const colorRule = () => ({
  backgroundColor: "rgba(112.520718,44.062154,249.437846, 0.15)",
  border: "1px solid rgba(112.520718,44.062154,249.437846, 0.3)",
});

const marginLeftRule = ({ msAuto = false }) =>
  msAuto
    ? {
        marginLeft: "auto !important",
      }
    : {};

const DemoColumn = ({
  span,
  children,
  msAuto = false,
}: ColumnProps<"div"> & { msAuto?: boolean }) => {
  const { css } = useFela({ msAuto });
  const className = css([paddingRule, flexRule, colorRule, marginLeftRule]);
  return (
    <Column className={className} span={span}>
      {children}
    </Column>
  );
};

const DemoRow = ({ children }: RowProps) => {
  const { css } = useFela();
  return (
    <Row className={css({ paddingBottom: "1rem" })} gutter={3}>
      {children}
    </Row>
  );
};

export const UsingGrid: Story = Template.bind({});

UsingGrid.args = {
  title: "Grid Modal",
  isOpen: false,
  children: (
    <Container>
      <DemoRow>
        <DemoColumn span={4}>col-md-4</DemoColumn>
        <DemoColumn span={4} msAuto>
          col-md-4 ms-auto
        </DemoColumn>
      </DemoRow>
      <DemoRow>
        <DemoColumn msAuto span={3}>
          col-md-3 ms-auto
        </DemoColumn>
        <DemoColumn msAuto span={3}>
          col-md-3 ms-auto
        </DemoColumn>
      </DemoRow>
      <DemoRow>
        <DemoColumn msAuto span={6}>
          col-md-6 ms-auto
        </DemoColumn>
      </DemoRow>
      <DemoRow>
        <DemoColumn span={9}>
          <DemoRow>
            <DemoColumn span={8}>col-md-8</DemoColumn>
            <DemoColumn span={4}>col-md-4</DemoColumn>
          </DemoRow>
        </DemoColumn>
      </DemoRow>
    </Container>
  ),
};

export const Blocking: Story = Template.bind({});
Blocking.args = {
  title: "Basic Modal",
  blocking: true,
  isOpen: false,
  children: (
    <p>
      I will not close if you click outside of me. Don&apos;t even try to press
      escape key.
    </p>
  ),
};

export const ModalForm: Story = Template.bind({});
ModalForm.args = {
  isOpen: false,
  title: "Send message",
  children: (
    <form>
      <TextField
        disabled={false}
        readOnly={false}
        plainText={false}
        type="text"
        label="Recipient"
        floating
        id="recipient-name"
      />
      <TextareaField
        id="message-text"
        floating
        disabled={false}
        readOnly={false}
        plainText={false}
        label="Message"
      />
    </form>
  ),
};

export const ModalScrollableForm: Story = Template.bind({});
ModalScrollableForm.args = {
  title: "Scrollable Modal",
  isOpen: false,
  scrollable: true,
  children: (
    <>
      <p>
        This is some placeholder content to show the scrolling behavior for
        modals. Instead of repeating the text in the modal, we use an inline
        style to set a minimum height, thereby extending the length of the
        overall modal and demonstrating the overflow scrolling. When content
        becomes longer than the height of the viewport, scrolling will move the
        modal as needed.
      </p>
      <p>
        I had called upon my friend, Mr. Sherlock Holmes, one day in the autumn
        of last year and found him in deep conversation with a very stout,
        florid-faced, elderly gentleman with fiery red hair. With an apology for
        my intrusion, I was about to withdraw when Holmes pulled me abruptly
        into the room and closed the door behind me.
      </p>
    </>
  ),
};
