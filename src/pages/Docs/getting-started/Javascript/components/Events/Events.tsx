import { Link } from "../../../../../../components/Link/Link";
import { Title } from "../../../../components/Title";
import { ModalShowEventSnippet } from "./ModalShowEventSnippet";

const ShowEvent = () => (
  <>
    {"("}ex{"."} <code>show</code>
    {")"}
  </>
);
const PreventDefault = () => <code>preventDefault{"()"}</code>;
const PreventDefaultLink = () => (
  <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault">
    <code>preventDefault{"()"}</code>
  </Link>
);
const LeadContent = () => (
  <>
    <p>
      Bootstrap provides custom events for most plugins{"'"} unique actions.
      Generally, these come in an infinitive and past participle form - where
      the infinitive <ShowEvent /> is triggered at the start of an event, and
      its past participle form <ShowEvent /> is triggered on the completion of
      an action.
    </p>
    <p>
      All infinitive events provide <PreventDefaultLink /> functionality. This
      provides the ability to stop the execution of an action before it starts.
      Returning false from an event handler will also automatically call{" "}
      <PreventDefault />
      {"."}
    </p>
  </>
);

export const Events = () => {
  return (
    <>
      <Title id="events" aria-label="Link to this section: Events">
        Events
      </Title>
      <LeadContent />
      <ModalShowEventSnippet />
    </>
  );
};
