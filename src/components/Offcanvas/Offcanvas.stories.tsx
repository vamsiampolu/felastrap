import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Offcanvas, OffcanvasProps } from "./Offcanvas";
import { useState } from "react";
import { Container } from "../Flex";
import { omit } from "../../utils";
import { Button } from "../Button";

export type Story = StoryObj<typeof Offcanvas>;

const meta: Meta<typeof Offcanvas> = {
  title: "components/Offcanvas",
  component: Offcanvas,
};

export default meta;

export const Basic: Story = {
  args: {
    isOpen: true,
    id: "basic-offcanvas",
    titleId: "basic-offcanvas-title",
    title: "Offcanvas",
    body: (
      <p>
        Content for the offcanvas goes here. You can place just about any
        Bootstrap component or custom elements here.
      </p>
    ),
  },
};

export const Template: StoryFn<typeof Offcanvas> = (args) => {
  const {
    isOpen: initialOpen = false,
    title,
    titleId,
    body,
    id,
    minBreakpoint,
    ...props
  } = args;

  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggle = () => setIsOpen((x: boolean) => !x);
  const rest = omit(props as unknown as Record<string, object>, ["onClose"]);
  return (
    <Container>
      <Button style={{ marginLeft: "50%" }} variant="primary" onClick={toggle}>
        {isOpen ? "Close" : "Open"}
      </Button>
      {(id ?? "").includes("atleast-tablet") && (
        <p style={{ textAlign: "justify", marginTop: "1rem" }}>
          The offcanvas menu will only be displayed for the breakpoint md and
          above. Before that the offcanvas menu will not be displayed.
        </p>
      )}
      <Offcanvas
        onClose={(() => setIsOpen(false)) as OffcanvasProps["onClose"]}
        isOpen={isOpen}
        title={title}
        titleId={titleId}
        body={body}
        id={id}
        minBreakpoint={minBreakpoint}
        {...rest}
      />
    </Container>
  );
};

export const LiveExample: Story = Template.bind({});
LiveExample.args = {
  isOpen: false,
  id: "live-example-offcanvas",
  title: "Offcanvas",
  titleId: "live-example-offcanvas-id",
  body: (
    <p>
      Content for the offcanvas goes here. You can place just about any
      Bootstrap component or custom elements here.
    </p>
  ),
};

export const WithBackdrop: Story = Template.bind({});
WithBackdrop.args = {
  isOpen: false,
  id: "live-example-offcanvas",
  title: "Offcanvas",
  titleId: "live-example-offcanvas-id",
  showBackdrop: true,
  body: (
    <p>
      Content for the offcanvas goes here. The backdrop prevents interaction
      with the content without closing the offcanvas side nav. To close the
      backdrop, press <kbd>Esc</kbd> or click outside.
    </p>
  ),
};

export const WithStaticBackdrop: Story = Template.bind({});
WithStaticBackdrop.args = {
  isOpen: false,
  id: "live-example-offcanvas",
  title: "Offcanvas",
  titleId: "live-example-offcanvas-id",
  showBackdrop: true,
  blocking: true,
  body: (
    <p>
      Content for the offcanvas goes here. The backdrop prevents interaction
      with the content without closing the offcanvas side nav. <br />
      Pressing
      <kbd>Esc</kbd> or clicking outside will not dismiss the component.
    </p>
  ),
};

export const OnlyTabletAndAbove: Story = Template.bind({});
OnlyTabletAndAbove.args = {
  isOpen: false,
  minBreakpoint: "md",
  id: "atleast-tablet-offcanvas",
  title: "Offcanvas",
  titleId: "atleast-table-offcanvas-id",
  body: (
    <p>
      Content for the offcanvas goes here. You can place just about any
      Bootstrap component or custom elements here.
    </p>
  ),
};

export const EndOffcanvas: Story = Template.bind({});
EndOffcanvas.args = {
  isOpen: false,
  placement: "end",
  id: "end-placed-offcanvas",
  titleId: "end-placed-offcanvas-title",
  title: "Right Offcanvas",
  body: (
    <p>
      Content for the offcanvas goes here. You can place just about any
      Bootstrap component or custom elements here.
    </p>
  ),
};

export const TopOffcanvas: Story = Template.bind({});
TopOffcanvas.args = {
  isOpen: false,
  placement: "top",
  id: "top-placed-offcanvas",
  titleId: "top-placed-offcanvas-title",
  title: "Top Offcanvas",
  body: (
    <p>
      Content for the offcanvas goes here. You can place just about any
      Bootstrap component or custom elements here.
    </p>
  ),
};

export const BottomOffcanvas: Story = Template.bind({});
BottomOffcanvas.args = {
  isOpen: false,
  placement: "bottom",
  id: "bottom-placed-offcanvas",
  titleId: "bottom-placed-offcanvas-title",
  title: "Bottom Offcanvas",
  body: (
    <p>
      Content for the offcanvas goes here. You can place just about any
      Bootstrap component or custom elements here.
    </p>
  ),
};
