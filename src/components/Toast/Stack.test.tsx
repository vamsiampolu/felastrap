import { render, screen } from "@testing-library/react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ToastStack } from "./Stack";
import { Portal, PortalProps } from "../Portal";

import { IRenderer } from "fela";
import { CSSProperties } from "react";
import { ToastPlacement } from "./Container";

jest.mock("../Portal");

const MockPortal = ({ children, wrapperId, style = null }: PortalProps) => (
  <div data-testid="portal" style={style as CSSProperties} id={wrapperId}>
    {children}
  </div>
);

describe("components/Toast/Stack", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    (Portal as jest.Mock).mockImplementation(MockPortal);

    renderer = createRenderer();
    cssReboot(renderer);

    jest.clearAllMocks();
  });

  afterEach(() => {
    renderer.clear();
    (Portal as jest.Mock).mockReset();
  });

  const placements = [
    "top-left",
    "top-center",
    "top-right",
    "middle-left",
    "middle-center",
    "middle-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  it.each(placements)(
    "should display a toast stack placed at %s",
    async (placement) => {
      const component = (
        <ToastStack
          placement={placement as ToastPlacement}
          toasts={[
            {
              close: () => undefined,
              isOpen: true,
              body: "Heads, up! Toasts will stack automatically.",
              header: {
                title: "Bootstrap",
                right: "2 seconds ago",
              },
            },
            {
              close: () => undefined,
              isOpen: true,
              body: "See? Just like this.",
              header: {
                title: "Bootstrap",
                right: "now",
              },
            },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("toast-container")).toBeInTheDocument();
      expect(screen.getAllByTestId("toast")).toHaveLength(2);

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
