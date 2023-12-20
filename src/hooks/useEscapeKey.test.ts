import { renderHook } from "@testing-library/react";
import { useEscapeKey } from "./useEscapeKey";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("hooks/useEscapeKey", () => {
  it("should invoke onEscapePressed when Esc is pressed", async () => {
    const onEscapePressed = jest.fn();
    const user = userEvent.setup();

    renderHook(() => useEscapeKey({ onEscapePressed }));

    await act(async () => {
      await user.keyboard("{Escape}");
    });

    expect(onEscapePressed).toHaveBeenCalled();
  });

  it("should invoke onEscapePressed when any other key is pressed", async () => {
    const onEscapePressed = jest.fn();
    const user = userEvent.setup();

    renderHook(() => useEscapeKey({ onEscapePressed, disabled: false }));

    await act(async () => {
      await user.keyboard("{Shift}");
    });

    expect(onEscapePressed).not.toHaveBeenCalled();
  });

  it("should not invoke onEscapePressed when disabled and Esc is pressed", async () => {
    const onEscapePressed = jest.fn();
    const user = userEvent.setup();

    renderHook(() => useEscapeKey({ onEscapePressed, disabled: true }));

    await act(async () => {
      await user.keyboard("{Escape}");
    });

    expect(onEscapePressed).not.toHaveBeenCalled();
  });

  it("should not invoke onEscapePressed when disabled and any other key is pressed", async () => {
    const onEscapePressed = jest.fn();
    const user = userEvent.setup();

    renderHook(() => useEscapeKey({ onEscapePressed, disabled: true }));

    await act(async () => {
      await user.keyboard("{Shift}");
    });

    expect(onEscapePressed).not.toHaveBeenCalled();
  });
});
