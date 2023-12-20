import { Link } from "../../../components/Link/Link";

const OpenAGithubIssue = () => (
  <Link href="https://github.com/twbs/bootstrap/issues/new/choose">
    open an issue on GitHub
  </Link>
);
const FindDiscussions = () => (
  <Link href="https://github.com/twbs/bootstrap/discussions">
    Search or start a discussion
  </Link>
);

export const Feedback = () => (
  <p>
    <em>
      See something wrong or out of date here? Please <OpenAGithubIssue />
      {"."} Need help troubleshooting? <FindDiscussions /> on GitHub.
    </em>
  </p>
);
