import { JQueryEventsSnippet } from "./JqueryEventsSnippet";

export const JQueryEvents = () => (
  <>
    <h3 id="jquery-events">
      jQuery events{" "}
      <a
        className="anchor-link"
        href="#jquery-events"
        aria-label="Link to this section: jQuery events"
      ></a>
    </h3>
    <p>
      Bootstrap will detect jQuery if <code>jQuery</code> is present in the{" "}
      <code>window</code> object and there is no <code>data-bs-no-jquery</code>{" "}
      attribute set on <code>&lt;body&gt;</code>. If jQuery is found, Bootstrap
      will emit events thanks to jQuery’s event system. So if you want to listen
      to Bootstrap’s events, you’ll have to use the jQuery methods (
      <code>.on</code>, <code>.one</code>) instead of{" "}
      <code>addEventListener</code>.
    </p>
    <JQueryEventsSnippet />
  </>
);
