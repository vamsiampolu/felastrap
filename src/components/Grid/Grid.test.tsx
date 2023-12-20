import { IRenderer } from "fela";
import { Grid, GridColumn } from "./Grid";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Box } from "../Flex/Box";

describe("components/Grid", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it("should render a grid with 3 columns", async () => {
    const component = (
      <Grid columns={12}>
        <GridColumn span={4}>g-col-4</GridColumn>
        <GridColumn span={4}>g-col-4</GridColumn>
        <GridColumn span={4}>g-col-4</GridColumn>
      </Grid>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("grid")).toBeInTheDocument();
    expect(screen.queryByTestId("grid")).toHaveClass("grid");
    expect(screen.getAllByTestId("grid-column")).toHaveLength(3);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should automatically designate column size based on the number of items", async () => {
    const component = (
      <Grid>
        <Box>box</Box>
        <Box>box</Box>
        <Box>box</Box>
        <Box>box</Box>
      </Grid>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("grid")).toBeInTheDocument();
    expect(screen.queryByTestId("grid-column")).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should create a responsive grid that uses different sizes per breakpoint", async () => {
    const component = (
      <Grid columns={12}>
        <GridColumn span={2} sm={6} lg={4}>
          g-col-2 g-sm-6 g-lg-4
        </GridColumn>
        <GridColumn span={2} sm={6} lg={4}>
          g-col-2 g-sm-6 g-lg-4
        </GridColumn>
        <GridColumn span={4} sm={6} lg={4}>
          g-col-2 g-sm-6 g-lg-4
        </GridColumn>
      </Grid>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("grid")).toBeInTheDocument();
    expect(screen.getAllByTestId("grid-column")).toHaveLength(3);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should create a responsive grid that uses different start points per breakpoint", async () => {
    const component = (
      <Grid columns={12}>
        <GridColumn span={2} startSm={4} start={2} startLg={1} sm={6} lg={4}>
          g-col-2 g-sm-6 g-lg-4
        </GridColumn>
        <GridColumn span={2} startSm={4} startLg={2} sm={6} lg={4}>
          g-col-2 g-sm-6 g-lg-4
        </GridColumn>
        <GridColumn span={4} startSm={4} startLg={3} sm={6} lg={4}>
          g-col-2 g-sm-6 g-lg-4
        </GridColumn>
      </Grid>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("grid")).toBeInTheDocument();
    expect(screen.getAllByTestId("grid-column")).toHaveLength(3);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
