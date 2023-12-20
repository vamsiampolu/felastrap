import { render, screen } from "@testing-library/react";
import { FileUploadField } from "./FileUploadField";
import { Wrapper } from "../../../test-helpers/Wrapper";
import { IRenderer } from "fela";
import {
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Size } from "../../common";

describe("components/Form/FileUploadField", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a file upload field without a label", async () => {
    const component = <FileUploadField id="file-upload" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("file-upload-field")).toBeInTheDocument();
    expect(screen.queryByTestId("file-upload-field")).toHaveClass(
      "file-upload-field",
    );

    expect(screen.getByTestId("file-upload")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a file upload field with a label", async () => {
    const component = <FileUploadField id="file-upload" label="Upload File" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("file-upload-field")).toBeInTheDocument();
    expect(screen.queryByTestId("file-upload-field")).toHaveClass(
      "file-upload-field",
    );

    expect(screen.getByTestId("file-upload")).toBeInTheDocument();
    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveTextContent("Upload File");

    expect(screen.queryByTestId("form-label")).toHaveAttribute(
      "for",
      "file-upload",
    );
    expect(screen.queryByTestId("file-upload")).toHaveAttribute(
      "id",
      "file-upload",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a file upload of size %s",
    async (size) => {
      const component = (
        <FileUploadField
          size={size as Size}
          id="file-upload"
          label="Upload File"
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("file-upload-field")).toBeInTheDocument();
      expect(screen.queryByTestId("file-upload-field")).toHaveClass(
        "file-upload-field",
      );

      expect(screen.getByTestId("file-upload")).toBeInTheDocument();
      expect(screen.getByTestId("form-label")).toBeInTheDocument();
      expect(screen.queryByTestId("form-label")).toHaveTextContent(
        "Upload File",
      );

      expect(screen.queryByTestId("form-label")).toHaveAttribute(
        "for",
        "file-upload",
      );
      expect(screen.queryByTestId("file-upload")).toHaveAttribute(
        "id",
        "file-upload",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
