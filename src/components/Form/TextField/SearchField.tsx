import { useFela } from "react-fela";
import { TextInput, type TextInputProps } from "./TextInput";
import search from "/search.svg";

const searchInputRule = () => ({
  paddingLeft: "2rem",
});

const searchSpan = () => ({
  position: "absolute",
  zIndex: 2,
  display: "block",
  width: "2.375rem",
  height: "2.375rem",
  lineHeight: "2.375rem",
  textAlign: "center",
  pointerEvents: "none",
  color: "#aaa",
  backgroundImage: `url(${search})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left center",
  backgroundSize: "30px 30px",
  marginLeft: "2px",
});

export type SearchFieldProps = Omit<TextInputProps, "type">;
export const SearchField = ({
  size = "medium",
  ...props
}: SearchFieldProps) => {
  const { css } = useFela();
  return (
    <div data-testid="search-field" className={css({ marginBottom: "1rem" })}>
      <span data-testid="search-icon" className={`${css(searchSpan)} search`} />
      <TextInput
        size={size}
        className={css(searchInputRule)}
        type="search"
        placeholder="Search"
        {...props}
      />
    </div>
  );
};
