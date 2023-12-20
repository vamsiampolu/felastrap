import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card, CardBody } from "../Card";
import { Collapse } from "./Collapse";
import { Content } from "./Content";
import { Target } from "./Target";

export type Story = StoryObj<typeof Collapse>;
const meta: Meta<typeof Collapse> = {
  title: "components/Collapse/Collapse",
  component: Collapse,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;
export const Basic: Story = {
  args: {
    children: (
      <>
        <Target as={Button} variant="primary">
          Toggle Collapse
        </Target>
        <Content
          id="basic"
          style={{ position: "relative", right: "50%", top: "50px" }}
        >
          <Card style={{ width: "18rem" }}>
            <CardBody>This is some text within a card body</CardBody>
          </Card>
        </Content>
      </>
    ),
  },
};
