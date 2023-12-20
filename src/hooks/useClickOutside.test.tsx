import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MutableRefObject, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

export type Options = Parameters<typeof useClickOutside>[1];

const HookWrapper = ({ callback, disabled }: Options) => {
  const ref = useRef(null);
  useClickOutside(ref as unknown as MutableRefObject<HTMLElement>, {
    callback,
    disabled,
  });

  return (
    <div data-testid="parent">
      Parent
      <div data-testid="child" ref={ref}>
        Child
      </div>
    </div>
  );
};

describe("hooks/useClickOutside", () => {
  it("should invoke a handler when user clicks outside", async () => {
    const callback = jest.fn();
    render(<HookWrapper callback={callback} />);

    const parent = screen.queryByTestId("parent");
    expect(parent).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(parent!);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not invoke handler when user clicks inside", async () => {
    const callback = jest.fn();
    render(<HookWrapper callback={callback} />);

    const child = screen.queryByTestId("child");
    expect(child).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(child!);

    expect(callback).not.toHaveBeenCalled();
  });

  it("should not invoke handler when disabled", async () => {
    const callback = jest.fn();
    render(<HookWrapper callback={callback} disabled />);

    const parent = screen.queryByTestId("parent");
    expect(parent).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(parent!);

    expect(callback).not.toHaveBeenCalled();
  });
});
