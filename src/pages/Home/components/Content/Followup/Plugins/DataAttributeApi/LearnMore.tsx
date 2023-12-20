import { Link } from "../../../../../../../components/Link/Link";

export const LearnMore = () => {
  return (
    <p>
      Learn more about{" "}
      <Link href="/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module">
        our JavaScript as modules
      </Link>{" "}
      and{" "}
      <Link href="/docs/5.3/getting-started/javascript/#programmatic-api">
        using the programmatic API
      </Link>
      {"."}
    </p>
  );
};
