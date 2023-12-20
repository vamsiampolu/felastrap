import { IRenderer } from "fela";
import { Accordion } from "./Accordion";
import { AccordionPanel } from "./AccordionPanel";
import { AccordionPanelContent } from "./AccordionPanelContent";
import { AccordionPanelHeader } from "./AccordionPanelHeader";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import getPanelKey from "./getPanelKey";
import { render, screen } from "@testing-library/react";

jest.mock("./getPanelKey");

describe("components/Accordion/Accordion", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();

    cssReboot(renderer);
    (getPanelKey as jest.Mock).mockReturnValue("z8nafbh2t");
  });

  afterEach(() => {
    (getPanelKey as jest.Mock).mockReset();
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it("should render an Accordion with items", async () => {
    const component = (
      <Accordion>
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
      </Accordion>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a flush Accordion with items", async () => {
    const component = (
      <Accordion flush>
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
      </Accordion>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
