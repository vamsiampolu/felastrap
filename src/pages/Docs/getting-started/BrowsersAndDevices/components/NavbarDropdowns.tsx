import { Link } from "../../../../../components/Link/Link";
import { Title } from "../../../components/Title";

const DropdownBackdrop = () => <code>{"."}dropdown-backdrop</code>;
const LeadContent = () => (
  <p>
    The <DropdownBackdrop /> element isn{"'"}t used on iOS in the nav because of
    the complexity of z-indexing. Thus, to close dropdowns in navbars, you must
    directly click the dropdown element (or{" "}
    <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile">
      any other element which will fire a click event in iOS
    </Link>
    ){"."}
  </p>
);

export const NavbarDropdowns = () => (
  <>
    <Title
      small
      id="navbar-dropdowns"
      aria-label="Link to this section: Navbar Dropdowns"
    >
      Navbar Dropdowns
    </Title>
    <LeadContent />
  </>
);
