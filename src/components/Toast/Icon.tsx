import { useFela } from "react-fela";

const rule = () => ({
  marginRight: "0.5rem",
  borderRadius: "0.375rem",
});

export const Icon = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  return (
    <svg
      data-testid="toast-icon"
      className={`${css(rule)} toast-icon ${className}`}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <rect width="100%" height="100%" fill="#007aff"></rect>
    </svg>
  );
};
