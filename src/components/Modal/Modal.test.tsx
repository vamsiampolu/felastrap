import { CSSProperties, useState } from "react";
import { Button } from "../Button";
import { Portal, PortalProps } from "../Portal";
import { Column, Row } from "../Flex";
import { Modal, ModalProps } from "./Modal";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Size } from "../common";

jest.mock("../Portal");

const MockPortal = ({ children, wrapperId, style = null }: PortalProps) => (
  <div data-testid="portal" style={style as CSSProperties} id={wrapperId}>
    {children}
  </div>
);

const ModalExample = (props: Partial<ModalProps>) => {
  const {
    title = "Modal Template",
    isOpen: initIsOpen = false,
    blocking = false,
    children,
    centered = false,
    size = "medium",
    scrollable = false,
  } = props;
  const [isOpen, setOpen] = useState(initIsOpen);
  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    closeModal();
  };

  const saveChanges = () => {
    console.log("Handle Save Changes");
    closeModal();
  };

  const footer = (
    <>
      <Button
        data-testid="close-modal-btn"
        variant="secondary"
        onClick={handleClose}
      >
        Close
      </Button>
      <Button variant="primary" onClick={saveChanges}>
        Save Changes
      </Button>
    </>
  );

  return (
    <Row>
      <Column span={2} offset={4}>
        <Button
          data-testid="open-modal-btn"
          variant="primary"
          onClick={openModal}
        >
          Open Modal
        </Button>
      </Column>
      <Modal
        scrollable={scrollable}
        size={size}
        blocking={blocking}
        centered={centered}
        title={title}
        footer={footer}
        isOpen={isOpen}
        handleClose={handleClose}
        saveChanges={saveChanges}
      >
        {children}
      </Modal>
    </Row>
  );
};

jest.mock("../Portal");

describe("components/Modal/Modal", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    (Portal as jest.Mock).mockImplementation(MockPortal);

    renderer = createRenderer();
    cssReboot(renderer);
    jest.clearAllMocks();
  });

  afterEach(() => {
    (Portal as jest.Mock).mockReset();
    renderer.clear();
  });

  it("should render a Modal", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <ModalExample title="Basic Modal">
          <p>Basic Modal Body.</p>
        </ModalExample>
      </Wrapper>
    );

    const user = userEvent.setup();

    render(component);
    expect(screen.getByTestId("open-modal-btn")).toBeInTheDocument();

    const toggle = screen.queryByTestId("open-modal-btn");
    await user.click(toggle!);

    expect(screen.getByTestId("modal-backdrop")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-backdrop")).toBeVisible();

    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-overlay")).toBeVisible();

    expect(screen.getByTestId("modal-body")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-body")).toBeVisible();
    expect(screen.queryByTestId("modal-body")).toHaveTextContent(
      "Basic Modal Body.",
    );

    expect(screen.getByTestId("modal-header")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-header")).toBeVisible();

    expect(screen.queryByTestId("modal-title")).toHaveTextContent(
      "Basic Modal",
    );

    expect(screen.getByTestId("modal-footer")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-footer")).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should render a Modal of size %s",
    async (size) => {
      const component = (
        <Wrapper renderer={renderer}>
          <ModalExample size={size as Size} title="Basic Modal">
            <p>Basic Modal Body.</p>
          </ModalExample>
        </Wrapper>
      );

      const user = userEvent.setup();

      render(component);
      expect(screen.getByTestId("open-modal-btn")).toBeInTheDocument();

      const toggle = screen.queryByTestId("open-modal-btn");
      await user.click(toggle!);

      expect(screen.getByTestId("modal-body")).toBeInTheDocument();
      expect(screen.queryByTestId("modal-body")).toBeVisible();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a vertically centered modal", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <ModalExample title="Centered Modal">
          <p>Vertically Centered Modal.</p>
        </ModalExample>
      </Wrapper>
    );

    const user = userEvent.setup();

    render(component);
    expect(screen.getByTestId("open-modal-btn")).toBeInTheDocument();

    const toggle = screen.queryByTestId("open-modal-btn");
    await user.click(toggle!);

    expect(screen.getByTestId("modal-body")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-body")).toBeVisible();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
