import { ButtonLink } from "../../../components/ButtonLink";

const Source = () => (
  <p>
    <ButtonLink
      variant="primary"
      as="a"
      href="https://github.com/twbs/bootstrap/archive/v5.3.2.zip"
      className="btn-bd-primary"
    >
      Download source
    </ButtonLink>
  </p>
);

const Example = () => (
  <p>
    <ButtonLink
      variant="primary"
      as="a"
      href="https://github.com/twbs/bootstrap/releases/download/v5.3.2/bootstrap-5.3.2-examples.zip"
      className="btn-bd-primary"
    >
      Download Examples
    </ButtonLink>
  </p>
);

const DistZip = () => (
  <p>
    <ButtonLink
      variant="primary"
      as="a"
      href="https://github.com/twbs/bootstrap/releases/download/v5.3.2/bootstrap-5.3.2-dist.zip"
      className="btn-bd-primary"
    >
      Download
    </ButtonLink>
  </p>
);

export { Source, Example, DistZip };
