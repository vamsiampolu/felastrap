import { Title } from "../../../../components/Title";

export const Subtitle = () => (
  <p>
    Internet Explorer is not supported.{" "}
    <strong>
      If you require Internet Explorer support, please use Bootstrap v4{"."}
    </strong>
  </p>
);

export const IESupport = () => (
  <>
    <Title
      id="internet-explorer"
      aria-label="Link to this section: Internet Explorer"
    >
      Internet Explorer
    </Title>
    <Subtitle />
  </>
);
