import { IRenderer } from "fela";
import { FileUploadInput } from "./FileUploadInput";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Size } from "../../common";
import userEvent from "@testing-library/user-event";

describe("components/FileUploadField/FileUploadInput", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a file upload input", async () => {
    const component = <FileUploadInput onChange={() => undefined} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("file-upload")).toBeInTheDocument();
    expect(screen.queryByTestId("file-upload")?.tagName).toEqual("INPUT");

    expect(screen.queryByTestId("file-upload")).toHaveAttribute("type", "file");
    expect(screen.queryByTestId("file-upload")).toHaveClass(
      "form-control file-upload",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a file upload input of size %s",
    async (size) => {
      const component = (
        <FileUploadInput size={size as Size} onChange={() => undefined} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("file-upload")).toBeInTheDocument();
      expect(screen.queryByTestId("file-upload")?.tagName).toEqual("INPUT");

      expect(screen.queryByTestId("file-upload")).toHaveAttribute(
        "type",
        "file",
      );
      expect(screen.queryByTestId("file-upload")).toHaveClass(
        "form-control file-upload",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should process a file upload", async () => {
    const onChange = jest.fn();
    const file = new File(["foo"], "foo.txt", { type: "text/plain" });

    const user = userEvent.setup();
    const component = <FileUploadInput id="file-upload" onChange={onChange} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("file-upload")).toBeInTheDocument();
    const input = screen.queryByTestId("file-upload");

    await user.upload(input!, file);
    expect((input as HTMLInputElement).files).toHaveLength(1);
    expect(onChange).toHaveBeenCalled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should allow multiple file upload with the multiple prop", async () => {
    const onChange = jest.fn();
    const files = [
      new File(["hello"], "hello.png", { type: "image/png" }),
      new File(["there"], "there.png", { type: "image/png" }),
    ];

    const user = userEvent.setup();
    const component = (
      <FileUploadInput multiple id="file-upload" onChange={onChange} />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("file-upload")).toBeInTheDocument();

    const input = screen.queryByTestId("file-upload");
    await user.upload(input!, files);

    expect((input as HTMLInputElement).files).toHaveLength(2);
    expect(onChange).toHaveBeenCalled();
  });
});
