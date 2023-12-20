import { Link } from "../../../../../components/Link/Link";
import { Title } from "../../../components/Title";

const WebkitBug153856 = () => (
  <Link href="https://bugs.webkit.org/show_bug.cgi?id=153856">
    WebKit bug #153856
  </Link>
);

const TextareaEl = () => (
  <code>
    {"<"}textarea{">"}
  </code>
);
const InputEl = () => (
  <code>
    {"<i"}nput{">"}
  </code>
);
const BodyEl = () => (
  <code>
    {"<"}body{">"}
  </code>
);

const LeadContent = () => (
  <p>
    As of iOS 9{"."}2, while a modal is open{","} if the initial touch of a
    scroll gesture is within the boundary of a textual <InputEl /> or a{" "}
    <TextareaEl />
    {","} the <BodyEl /> content underneath the modal will be scrolled instead
    of the modal itself{"."} See <WebkitBug153856 />
    {"."}
  </p>
);

export const IosTextFieldsAndScrolling = () => (
  <>
    <Title
      small
      id="ios-text-fields-and-scrolling"
      aria-label="Link to this section: iOS text fields and scrolling"
    >
      iOS text fields and scrolling
    </Title>
    <LeadContent />
  </>
);
