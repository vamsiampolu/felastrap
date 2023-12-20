import { CodeSnippet } from "../../../components/CodeSnippet/CodeSnippet";
import { ClipboardButton } from "../../../components/CodeSnippet/ClipboardButton";
import { Highlight } from "../../../components/CodeSnippet/Highlight";
import {
  createButton,
  createDropdownDivClose,
  createDropdownDivOpen,
  createListClose,
  createListItem,
  createListOpen,
  createNewline,
} from "./tokens";

export const DropdownCodeSnippet = () => {
  const lines = [
    createDropdownDivOpen(),
    createNewline(),
    ...createButton(),
    createNewline(),
    ...createListOpen(),
    createNewline(),
    ...createListItem(),
    createNewline(),
    ...createListItem(),
    createNewline(),
    ...createListItem(),
    createNewline(),
    ...createListClose(),
    createNewline(),
    createDropdownDivClose(),
  ];

  return (
    <CodeSnippet>
      {" "}
      <ClipboardButton />
      <Highlight language="html" tabIndex={0} lines={lines} />
    </CodeSnippet>
  );
};
