import { Title } from "../../../../components/Title";
import { AsyncFunctionsAndTransitions } from "./AsyncFunctionsAndTransitions/AsyncFunctionsAndTransitions";
import { DefaultSettings } from "./DefaultSettings";
import { GetInstanceSnippet } from "./GetInstanceSnippet";
import { GetOrCreateInstanceSnippet } from "./GetOrCreateInstanceSnippet";
import { ModalConfigSnippet } from "./ModalConfigSnippet";
import { SelectorsInConstructors } from "./SelectorsInConstructors";

const Subtitle = () => (
  <p>
    All constructors accept an optional options object or nothing {"("}which
    initiates a plugin with its default behavior{"):"}
  </p>
);

export const ProgrammaticApi = () => (
  <>
    <Title
      id="programmatic-api"
      aria-label="Link to this section: Programmatic API"
    >
      Programmatic API
    </Title>
    <Subtitle />
    <ModalConfigSnippet />
    <p>
      If you{"'"}d like to get a particular plugin instance, each plugin exposes
      a <code>getInstance</code> method. For example, to retrieve an instance
      directly from an element{":"}
    </p>
    <GetInstanceSnippet />
    <p>
      This method will return <code>{"null"}</code> if an instance is not
      initiated over the requested element.
    </p>
    <p>
      Alternatively, <code>getOrCreateInstance</code> can be used to get the
      instance associated with a DOM element, or create a new one in case it
      wasn{"'"}t initialized.
    </p>
    <GetOrCreateInstanceSnippet />
    <p>
      In case an instance wasn{"'"}t initialized, it may accept and use an
      optional configuration object as second argument.
    </p>
    <SelectorsInConstructors />
    <AsyncFunctionsAndTransitions />
    <DefaultSettings />
  </>
);
