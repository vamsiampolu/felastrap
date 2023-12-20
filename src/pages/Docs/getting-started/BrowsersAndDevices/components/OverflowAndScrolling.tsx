import { Link } from "../../../../../components/Link/Link";
import { Title } from "../../../components/Title";

const OverflowHidden = () => (
  <code>
    overflow{":"} hidden{";"}
  </code>
);
const BodyEl = () => (
  <code>
    {"<"}body{">"}
  </code>
);
const ChromeBug175502 = () => (
  <Link href="https://bugs.chromium.org/p/chromium/issues/detail?id=175502">
    Chrome bug #175502
  </Link>
);

const WebkitBug153852 = () => (
  <Link href="https://bugs.webkit.org/show_bug.cgi?id=153852">
    WebKit bug #153852
  </Link>
);

const Caveats = () => (
  <p>
    Support for <OverflowHidden /> on the <BodyEl /> element is quite limited in
    iOS and Android{". "}To that end{","} when you scroll past the top or bottom
    of a modal in either of those devices{"'"} browsers, the <BodyEl /> content
    will begin to scroll. See <ChromeBug175502 /> {" ("}fixed in Chrome v40{")"}{" "}
    and <WebkitBug153852 />
    {"."}
  </p>
);

export const OverflowAndScrolling = () => (
  <>
    <Title
      small
      id="overflow-and-scrolling"
      aria-label="Link to this section: Overflow and scrolling"
    >
      Overflow and scrolling
    </Title>
    <Caveats />
  </>
);
