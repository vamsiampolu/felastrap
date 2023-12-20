import { Container } from "./Container";
import { Row } from "./Row";
import { Column } from "./Column";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Box } from "./Box";

export type Story = StoryObj<typeof Row>;
const meta: Meta<typeof Row> = {
  title: "components/Flex",
  component: Row,
};

export default meta;

export const Template: StoryFn<typeof Row> = (args) => {
  const { children } = args;
  return <Container style={{ textAlign: "center" }}>{children}</Container>;
};

export const Basic: Story = Template.bind({});
Basic.args = {
  id: "basic-row",
  children: (
    <Row id="basic-row">
      <Column>
        <Box>Column</Box>
      </Column>
      <Column>
        <Box>Column</Box>
      </Column>
      <Column>
        <Box>Column</Box>
      </Column>
    </Row>
  ),
};

export const EqualWidth = Template.bind({});
EqualWidth.args = {
  children: (
    <>
      <Row id="equal-width-2-col">
        <Column>
          <Box>1 of 2</Box>
        </Column>
        <Column>
          <Box>2 of 2</Box>
        </Column>
      </Row>
      <Row id="equal-width-3-col">
        <Column>
          <Box>1 of 3</Box>
        </Column>
        <Column>
          <Box>2 of 3</Box>
        </Column>
        <Column>
          <Box>3 of 3</Box>
        </Column>
      </Row>
    </>
  ),
};

export const OneColumnWidth = Template.bind({});
OneColumnWidth.args = {
  children: (
    <>
      <Row id="equal-width-2-col">
        <Column>
          <Box>1 of 3</Box>
        </Column>
        <Column span={6}>
          <Box>2 of 3</Box>
        </Column>
        <Column>
          <Box>3 of 3</Box>
        </Column>
      </Row>
      <Row id="equal-width-3-col">
        <Column>
          <Box>1 of 3</Box>
        </Column>
        <Column span={5}>
          <Box>2 of 3</Box>
        </Column>
        <Column>
          <Box>3 of 3</Box>
        </Column>
      </Row>
    </>
  ),
};

export const VariableWidth: Story = Template.bind({});
VariableWidth.args = {
  children: (
    <>
      <Row style={{ justifyContent: "center !important" }}>
        <Column span={2}>
          <Box>1 of 3</Box>
        </Column>
        <Column span="auto">
          <Box>Variable Width Content</Box>
        </Column>
        <Column span={2}>
          <Box>3 of 3</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>1 of 3</Box>
        </Column>
        <Column span="auto">
          <Box>Variable Width Content</Box>
        </Column>
        <Column span={2}>
          <Box>3 of 3</Box>
        </Column>
      </Row>
    </>
  ),
};

export const RowColsBasic: Story = Template.bind({});
RowColsBasic.args = {
  children: (
    <Row cols={4}>
      <Column span={2}>
        <Box>Column</Box>
      </Column>
      <Column span={2}>
        <Box>Column</Box>
      </Column>
      <Column span={2}>
        <Box>Column</Box>
      </Column>
      <Column span={2}>
        <Box>Column</Box>
      </Column>
    </Row>
  ),
};

export const OneMoreColumn: Story = Template.bind({});
OneMoreColumn.args = {
  children: (
    <Row cols={3}>
      <Column>
        <Box>Column</Box>
      </Column>
      <Column>
        <Box>Column</Box>
      </Column>
      <Column>
        <Box>Column</Box>
      </Column>
      <Column>
        <Box>Column</Box>
      </Column>
    </Row>
  ),
};

export const OneColWidthRowCols: Story = Template.bind({});
OneColWidthRowCols.args = {
  children: (
    <Row cols={4}>
      <Column>
        <Box>Column</Box>
      </Column>
      <Column>
        <Box>Column</Box>
      </Column>
      <Column span={6}>
        <Box>Column</Box>
      </Column>
      <Column>
        <Box>Column</Box>
      </Column>
    </Row>
  ),
};

export const Responsive: Story = Template.bind({});
Responsive.args = {
  children: (
    <Row>
      <Column sm={8}>
        <Box>col-sm-8</Box>
      </Column>
      <Column sm={4}>
        <Box>col-sm-4</Box>
      </Column>
    </Row>
  ),
};

export const ResponsiveLarge: Story = Template.bind({});
ResponsiveLarge.args = {
  children: (
    <Row>
      <Column md={8} lg={4}>
        <Box>col-md-8 col-lg-4</Box>
      </Column>
      <Column md={8} lg={4}>
        <Box>col-md-8 col-lg-4</Box>
      </Column>
      <Column md={8} lg={4}>
        <Box>col-md-8 col-lg-4</Box>
      </Column>
    </Row>
  ),
};

export const MixAndMatchResponsive: Story = Template.bind({});
MixAndMatchResponsive.args = {
  children: (
    <Row>
      <Column lg={8}>
        <Box>col-lg-8</Box>
      </Column>
      <Column span={6} lg={4}>
        <Box>col-6 col-lg-4</Box>
      </Column>
      <Column span={6} lg={4}>
        <Box>col-6 col-lg-4</Box>
      </Column>
      <Column span={6} lg={4}>
        <Box>col-6 col-lg-4</Box>
      </Column>
      <Column span={6} lg={4}>
        <Box>col-6 col-lg-4</Box>
      </Column>
      <Column span={6}>
        <Box>col-6</Box>
      </Column>
      <Column span={6}>
        <Box>col-6</Box>
      </Column>
    </Row>
  ),
};

export const Nesting: Story = Template.bind({});
Nesting.args = {
  children: (
    <Row>
      <Column sm={3}>
        <Box style={{ height: "6rem" }}>Level 1: col-sm-3</Box>
      </Column>
      <Column sm={9}>
        <Box style={{ height: "6rem" }}>
          Level 1: col-sm-9
          <Row>
            <Column span={8} md={6}>
              <Box style={{ height: "2rem", padding: 0 }}>
                Level 2: col-8 col-md-6
              </Box>
            </Column>
            <Column span={4} md={6}>
              <Box style={{ height: "2rem", padding: 0 }}>
                Level 2: col-4 col-md-6
              </Box>
            </Column>
          </Row>
        </Box>
      </Column>
    </Row>
  ),
};
