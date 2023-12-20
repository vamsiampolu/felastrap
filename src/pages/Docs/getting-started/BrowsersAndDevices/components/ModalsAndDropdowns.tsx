import { Title } from "../../../components/Title";
import { IosTextFieldsAndScrolling } from "./IosTextFields";
import { NavbarDropdowns } from "./NavbarDropdowns";
import { OverflowAndScrolling } from "./OverflowAndScrolling";

export const ModalsAndDropdowns = () => (
  <>
    <Title
      id="modals-and-dropdowns-on-mobile"
      aria-label="Link to this section: Modals and dropdowns on mobile"
    >
      Modals and dropdowns on mobile
    </Title>
    <OverflowAndScrolling />
    <IosTextFieldsAndScrolling />
    <NavbarDropdowns />
  </>
);
