import { Title } from "../../../../components/Title";
import { JQueryEvents } from "./JqueryEvents";
import { JquerySnippet } from "./JquerySnippet";
import { NoConflict } from "./NoConflict";

const YouDontNeedjQuery = () => (
  <strong>You don{"'"}t need jQuery in Bootstrap 5</strong>
);
const Jquery = () => <code>jQuery</code>;
const GlobalWindow = () => <code>window</code>;
const Subtitle = () => (
  <p>
    <YouDontNeedjQuery />, but it{"'"}s still possible to use our components
    with jQuery. If Bootstrap detects <Jquery /> in the <GlobalWindow /> object,
    it{"'"}ll add all of our components in jQuery{"'"}s plugin system. This
    allows you to do the following:
  </p>
);

export const UsingJquery = () => (
  <>
    <Title
      id="optionally-using-jquery"
      aria-label="Link to this section: Optionally using jQuery"
    >
      Optionally using jQuery
    </Title>
    <Subtitle />
    <JquerySnippet />
    <p>The same goes for our other components.</p>
    <NoConflict />
    <p>
      Bootstrap does not officially support third-party JavaScript libraries
      like Prototype or jQuery UI. Despite <code>{"."}noConflict</code> and
      namespaced events, there may be compatibility problems that you need to
      fix on your own.
    </p>
    <JQueryEvents />
  </>
);
