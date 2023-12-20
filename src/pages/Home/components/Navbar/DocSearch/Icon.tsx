import { useFela } from "react-fela";

const docSearchIconRule = () => ({
  alignItems: "center",
  display: "flex",
  fontWeight: 500,
  userSelect: "none",
});

const placeholderRule = () => ({
  fontSize: "1rem",
  padding: "0 12px 0 6px",
});

const iconRule = () => ({
  opacity: "0.65",
  color: "#fff",
  strokeWidth: "1.6",
});

export const DocSearchIcon = () => {
  const { css } = useFela();
  const cx = `${css(docSearchIconRule)} DocSearch-Button-Container`;
  return (
    <span className={cx}>
      <svg
        width="20"
        height="20"
        className={`${css(iconRule)} DocSearch-Search-Icon`}
        viewBox="0 0 20 20"
      >
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <span className={`${css(placeholderRule)} DocSearch-Button-Placeholder`}>
        Search
      </span>
    </span>
  );
};
