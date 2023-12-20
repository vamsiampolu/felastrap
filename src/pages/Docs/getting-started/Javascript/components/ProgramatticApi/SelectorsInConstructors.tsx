import { Title } from "../../../../components/Title";
import { SelectorsLink } from "../utils";
import { SelectorsInConstructorsSnippet } from "./SelectorsInConstructorSnippet";

export const SelectorsInConstructors = () => {
  const querySelector = <code>querySelector</code>;
  const getInstance = <code>getInstance</code>;
  const getOrCreateInstance = <code>getOrCreateInstance</code>;

  return (
    <>
      <Title
        small
        id="css-selectors-in-constructors"
        aria-label="Link to this section: CSS selectors in constructors"
      >
        CSS selectors in constructors
      </Title>
      <p>
        In addition to the {getInstance} and {getOrCreateInstance} methods, all
        plugin constructors can accept a DOM element or a valid{" "}
        <SelectorsLink /> as the first argument. Plugin elements are found with
        the {querySelector} method since our plugins only support a single
        element.
      </p>
      <SelectorsInConstructorsSnippet />
    </>
  );
};
