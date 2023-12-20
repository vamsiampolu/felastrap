import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Flex/Box";
import { Grid, GridColumn } from "./Grid";

export type Story = StoryObj<typeof Grid>;
export type Metadata = Meta<typeof Grid>;

const meta: Metadata = {
  title: "components/Grid",
  component: Grid,
};

export default meta;

export const ThreeColumns: Story = {
  args: {
    columns: 12,
    children: (
      <>
        <GridColumn span={4}>
          <Box>g-col-4</Box>
        </GridColumn>
        <GridColumn span={4}>
          <Box>g-col-4</Box>
        </GridColumn>
        <GridColumn span={4}>
          <Box>g-col-4</Box>
        </GridColumn>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    columns: 12,
    style: {
      textAlign: "center",
    },
    children: (
      <>
        <GridColumn sm={6} lg={4}>
          <Box style={{ height: "6rem" }}>g-col-6 g-lg-4</Box>
        </GridColumn>
        <GridColumn sm={3} lg={4}>
          <Box style={{ height: "6rem" }}>g-col-6 g-lg-4</Box>
        </GridColumn>
        <GridColumn sm={3} lg={4}>
          <Box style={{ height: "6rem" }}>g-col-6 g-lg-4</Box>
        </GridColumn>
      </>
    ),
  },
};

export const Wrapping: Story = {
  args: {
    style: {
      textAlign: "center",
    },
    children: (
      <>
        <GridColumn span={6}>
          <Box>g-col-6</Box>
        </GridColumn>
        <GridColumn span={6}>
          <Box>g-col-6</Box>
        </GridColumn>
        <GridColumn span={6}>
          <Box>g-col-6</Box>
        </GridColumn>
        <GridColumn span={6}>
          <Box>g-col-6</Box>
        </GridColumn>
      </>
    ),
  },
};

export const Start: Story = {
  args: {
    style: { textAlign: "center" },
    children: (
      <>
        <GridColumn span={3} start={2}>
          <Box>g-col-3 g-start-2</Box>
        </GridColumn>
        <GridColumn span={4} start={6}>
          <Box>g-col-4 g-start-6</Box>
        </GridColumn>
      </>
    ),
  },
};

export const AutoColumns: Story = {
  args: {
    style: { textAlign: "center" },
    children: (
      <>
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>

        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>

        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
      </>
    ),
  },
};

export const Nesting: Story = {
  args: {
    style: { textAlign: "center" },
    columns: 3,
    children: (
      <>
        <Box style={{ height: "6rem" }}>
          First auto column
          <Grid>
            <div>
              <Box
                style={{
                  padding: 0,
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  textAlign: "center",
                  height: "50px",
                }}
              >
                Auto Column
              </Box>
            </div>
            <div>
              <Box
                style={{
                  padding: 0,
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                Auto Column
              </Box>
            </div>
          </Grid>
        </Box>
        <Box style={{ height: "6rem" }}>
          Second auto column
          <Grid columns={12}>
            <GridColumn span={6}>
              <Box
                style={{
                  padding: 0,
                  height: "50px",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  textAlign: "center",
                }}
              >
                6
              </Box>
            </GridColumn>
            <GridColumn span={4}>
              <Box
                style={{
                  padding: 0,
                  height: "50px",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  textAlign: "center",
                }}
              >
                4
              </Box>
            </GridColumn>
            <GridColumn span={2}>
              <Box style={{ padding: 0, height: "50px", textAlign: "center" }}>
                2
              </Box>
            </GridColumn>
          </Grid>
        </Box>
      </>
    ),
  },
};
