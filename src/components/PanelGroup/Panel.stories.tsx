import { Panel } from "./Panel";
import type { StoryObj, Meta } from "@storybook/react";

export type Story = StoryObj<typeof Panel>;
const meta: Meta<typeof Panel> = {
  title: "components/PanelGroup/Panel",
  component: Panel,
};

export default meta;

export const Basic = {
  args: {
    first: true,
    last: true,
    label: "Accordion Item #1",
    children: (
      <p>
        <strong>This is the first item&apos;s accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate classes
        that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It&apos;s also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does
        limit overflow.
      </p>
    ),
  },
};
