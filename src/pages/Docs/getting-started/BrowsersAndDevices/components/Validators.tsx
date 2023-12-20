import { Link } from "../../../../../components/Link/Link";
import { Title } from "../../../components/Title";

const BrowserHacks = () => (
  <Link href="http://browserhacks.com/">CSS browser hacks</Link>
);
const FirefoxBug = () => (
  <Link href="https://bugzilla.mozilla.org/show_bug.cgi?id=654072">
    a certain Firefox bug
  </Link>
);

export const LeadContent = () => (
  <p>
    In order to provide the best possible experience to old and buggy browsers,
    Bootstrap uses <BrowserHacks /> in several places to target special CSS to
    certain browser versions in order to work around bugs in the browsers
    themselves. These hacks understandably cause CSS validators to complain that
    they are invalid. In a couple places, we also use bleeding-edge CSS features
    that aren{"'"}t yet fully standardized, but these are used purely for
    progressive enhancement.
  </p>
);

const BodyContent = () => (
  <>
    <p>
      These validation warnings don{"'"}t matter in practice since the non{"-"}
      hacky portion of our CSS does fully validate and the hacky portions don
      {"'"}t interfere with the proper functioning of the non-hacky portion,
      hence why we deliberately ignore these particular warnings.
    </p>
    <p>
      Our HTML docs likewise have some trivial and inconsequential HTML
      validation warnings due to our inclusion of a workaround for{" "}
      <FirefoxBug />
      {"."}
    </p>
  </>
);

export const Validators = () => (
  <>
    <Title id="validators" aria-label="Link to this section: Validators">
      Validators
    </Title>
    <LeadContent />
    <BodyContent />
  </>
);
