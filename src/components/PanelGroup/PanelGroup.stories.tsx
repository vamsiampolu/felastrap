import type { StoryObj, Meta } from "@storybook/react";
import { PanelGroup } from "./PanelGroup";

export type Story = StoryObj<typeof PanelGroup>;
const meta: Meta<typeof PanelGroup> = {
  title: "components/PanelGroup/PanelGroup",
  component: PanelGroup,
};

export default meta;

export const Simple = {
  args: {
    items: [
      {
        label: "Panel Group Item #1",
        content: (
          <>
            <strong>This is the first item&apos;s panel group body.</strong> It
            is shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
      {
        label: "Panel Group Item #2",
        content: (
          <>
            <strong>This is the second item&apos;s panel group body.</strong> It
            is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
      {
        label: "Panel Group Item #3",
        content: (
          <>
            <strong>This is the third item&apos;s panel group body.</strong> It
            is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
    ],
  },
};

export const Flush = {
  args: {
    flush: true,
    items: [
      {
        label: "Panel Group Item #1",
        content: (
          <>
            <strong>This is the first item&apos;s panel group body.</strong> It
            is shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
      {
        label: "Panel Group Item #2",
        content: (
          <>
            <strong>This is the second item&apos;s panel group body.</strong> It
            is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
      {
        label: "Panel Group Item #3",
        content: (
          <>
            <strong>This is the third item&apos;s panel group body.</strong> It
            is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
    ],
  },
};
