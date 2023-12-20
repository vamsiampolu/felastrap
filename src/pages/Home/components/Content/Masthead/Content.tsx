import { useFela } from "react-fela";
import { Column } from "../../../../../components/Flex";
import { Link } from "../../../../../components/Link/Link";
import { Header } from "./Header";
import { HeroDetails } from "./HeroDetails";
import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";
import { Lead } from "./Lead";

const rule = () => ({
  color: "rgba(33, 37, 41, 0.75)",
  marginBottom: 0,
  marginTop: 0,
});

const linkRule = () => ({
  color: "rgba(108,117,125, 1)",
  textDecorationColor: "rgba(108,117,125, 1)",
});

const linkWhiteSpaceRule = () => ({
  whiteSpace: "nowrap !important",
});

export const HeroSubtext = () => {
  const { css } = useFela();
  const cx = `${css(rule)} hero-subtext`;
  return (
    <p className={cx}>
      Currently <strong>v5.3.2</strong>
      <span
        className={css({ paddingRight: "0.25rem", paddingLeft: "0.25rem" })}
      >
        .
      </span>
      <Link
        className={css(linkRule)}
        href="/docs/5.3/getting-started/download/"
      >
        Download
      </Link>
      <span
        className={css({ paddingRight: "0.25rem", paddingLeft: "0.25rem" })}
      >
        .
      </span>
      <Link
        className={css([linkRule, linkWhiteSpaceRule])}
        href="/docs/versions/"
      >
        Download
      </Link>
    </p>
  );
};

export const Content = () => {
  const { css } = useFela();
  const columnCx = css({
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
  });

  return (
    <Column md={8} className={columnCx}>
      <Header
        title="New in v5.3"
        href="https://blog.getbootstrap.com/"
        text="Color mode support, expanded color palette, and more!"
      />
      <HeroImage />
      <HeroText>Build fast, responsive sites with Bootstrap</HeroText>
      <Lead>
        Powerful, extensible, and feature-packed frontend toolkit. Build and
        customize with Sass, utilize prebuilt grid system and components, and
        bring projects to life with powerful JavaScript plugins.
      </Lead>
      <HeroDetails />
      <HeroSubtext />
    </Column>
  );
};
