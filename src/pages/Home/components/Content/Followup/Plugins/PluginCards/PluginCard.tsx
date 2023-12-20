import { useFela } from "react-fela";
import { Column } from "../../../../../../../components/Flex";
import { Header } from "../../../../../../../components/Header/Header";
import { Link } from "../../../../../../../components/Link/Link";

const cardRule = () => ({
  display: "block",
  textDecoration: "none",
  lineHeight: 1.25,
  "@media (min-width: 992px)": {
    paddingRight: "1.5rem",
  },
});

const cardHeaderRule = () => ({
  fontWeight: 600,
  fontSize: "1.25rem",
  marginBottom: 0,
});

const cardTextRule = () => ({
  color: "rgba(33, 37, 41, 0.75)",
  fontSize: "0.875em",
  lineHeight: 1.25,
});

export type PluginCardProps = {
  header: string;
  text: string;
  href: string;
};

export const PluginCard = ({ header, text, href }: PluginCardProps) => {
  const { css } = useFela();
  const linkClassName = `${css(cardRule)} plugin-card`;
  const headerClassName = `${css(cardHeaderRule)} plugin-card-header`;
  const textClassName = `${css(cardTextRule)} plugin-card-text`;
  return (
    <Column sm={6} className={css({ marginBottom: "0.5rem" })}>
      <Link className={linkClassName} href={href}>
        <Header as="h4" className={headerClassName}>
          {header}
        </Header>
        <small className={textClassName}>{text}</small>
      </Link>
    </Column>
  );
};
