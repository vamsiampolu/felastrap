import { StoryObj, Meta } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionPanel } from "./AccordionPanel";
import { AccordionPanelHeader } from "./AccordionPanelHeader";
import { AccordionPanelContent } from "./AccordionPanelContent";

export type Story = StoryObj<typeof Accordion>;
const meta: Meta<typeof Accordion> = {
  title: "components/Accordion",
  component: Accordion,
};

export default meta;

export const Basic: Story = {
  args: {
    flush: false,
    children: (
      <>
        <AccordionPanel first>
          <AccordionPanelHeader>Accordion Item #1</AccordionPanelHeader>
          <AccordionPanelContent>
            This is the first item&apos;s accordion body. It is shown by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default
            variables.
          </AccordionPanelContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionPanelHeader>Accordion Item #2</AccordionPanelHeader>
          <AccordionPanelContent>
            This is the second item&apos;s accordion body. It is hidden by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default
            variables.
          </AccordionPanelContent>
        </AccordionPanel>
        <AccordionPanel last>
          <AccordionPanel>
            <AccordionPanelHeader>Accordion Item #3</AccordionPanelHeader>
            <AccordionPanelContent>
              This is the third item&apos;s accordion body. It is hidden by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the
              overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables.
            </AccordionPanelContent>
          </AccordionPanel>
        </AccordionPanel>
      </>
    ),
  },
};

export const Flush: Story = {
  args: {
    flush: true,
    children: (
      <>
        <AccordionPanel first>
          <AccordionPanelHeader>Accordion Item #1</AccordionPanelHeader>
          <AccordionPanelContent>
            This is the first item&apos;s accordion body. It is shown by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default
            variables.
          </AccordionPanelContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionPanelHeader>Accordion Item #2</AccordionPanelHeader>
          <AccordionPanelContent>
            This is the second item&apos;s accordion body. It is hidden by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default
            variables.
          </AccordionPanelContent>
        </AccordionPanel>
        <AccordionPanel last>
          <AccordionPanel>
            <AccordionPanelHeader>Accordion Item #3</AccordionPanelHeader>
            <AccordionPanelContent>
              This is the third item&apos;s accordion body. It is hidden by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the
              overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables.
            </AccordionPanelContent>
          </AccordionPanel>
        </AccordionPanel>
      </>
    ),
  },
};
