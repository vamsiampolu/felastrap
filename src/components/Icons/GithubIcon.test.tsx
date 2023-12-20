import { IRenderer } from "fela";
import { createRenderer, createSnapshot } from "../../test-helpers";
import { GithubIcon } from "./GithubIcon";

describe("components/Icons/GithubIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a github icon", async () => {
    const component = <GithubIcon />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
