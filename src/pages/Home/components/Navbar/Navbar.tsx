import { useFela } from "react-fela";
import { Container } from "../../../../components/Flex";
import { Brand, Nav, Navbar } from "../../../../components/Navbar";
import { Divider } from "./Divider";
import { DocSearch } from "./DocSearch/DocSearch";
import { GithubIcon } from "../../../../components/Icons/GithubIcon";
import { OpenCollectiveIcon } from "../../../../components/Icons/OpenCollectiveIcon";
import { TwitterIcon } from "../../../../components/Icons/TwitterIcon";
import { Logo } from "./Logo";

const rule = () => ({
  transition: "transform 0.2s ease-in-out",
  color: "#fff !important",
  marginRight: 0,
  padding: 0,
  "@media (min-width: 992px)": {
    marginRight: "0.5rem !important",
  },
});

const containerRule = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  "@media (min-width: 992px)": {
    flexWrap: "no-wrap",
  },
});

const navRule = () => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  paddingLeft: 0,
  marginBottom: 0,
});

const navRuleRight = () => ({
  marginLeft: "auto !important",
});

const navItemRule = () => ({
  flex: "0 0 auto",
  width: "50%",
  "@media((min-width: 992px)": {
    flex: "0 0 auto",
    width: "auto",
    marginTop: "0.25rem",
  },
  "> a": {
    paddingTop: "0.5rem !important",
    paddingBottom: "0.5rem !important",
    paddingRight: "0 !important",
    paddingLeft: "0 !important",
    color: "rgba(255,255,255,0.85)",
    ":hover": {
      color: "#fff",
    },
    "@media (min-width: 992px)": {
      paddingRight: "0.25rem !important",
      paddingLeft: "0.25rem !important",
    },
  },
});

export const PageNavbar = () => {
  const { css } = useFela();
  return (
    <Navbar
      className={`${css({
        backgroundColor: "#712cf9 !important",
        color: "rgba(255,255,255,0.85) !important",
        height: "4rem",
      })} page-navbar`}
    >
      <Container className={css(containerRule)}>
        <Brand
          href="/"
          className={`${css(rule)} bootstrap-navbar-brand`.trim()}
        >
          <Logo />
        </Brand>
        <Nav
          className={`${css(navRule)} bootstrap-navbar-nav`}
          items={[
            {
              type: "link",
              className: css(navItemRule),
              label: "Docs",
              href: "/docs",
            },
            {
              type: "link",
              className: css(navItemRule),
              label: "Examples",
              href: "/examples",
            },
            {
              type: "link",
              className: css(navItemRule),
              label: "Icons",
              href: "/icons",
            },
            {
              type: "link",
              className: css(navItemRule),
              label: "Themes",
              href: "/themes",
            },
            {
              type: "link",
              label: "Blog",
              className: css(navItemRule),
              href: "/blog",
            },
            {
              type: "link",
              label: <Divider />,
              className: css(navItemRule),
              href: "#",
            },
          ]}
        />
        <DocSearch />
        <Nav
          className={`${css([navRule, navRuleRight])} bootstrap-navbar-nav`}
          items={[
            {
              type: "link",
              className: css(navItemRule),
              label: <GithubIcon />,
              href: "https://github.com/twbs",
            },
            {
              type: "link",
              className: css(navItemRule),
              label: <TwitterIcon />,
              href: "https://twitter.com/getbootstrap",
            },
            {
              type: "link",
              className: css(navItemRule),
              label: <OpenCollectiveIcon />,
              href: "https://opencollective.com/bootstrap",
            },
          ]}
        />
      </Container>
    </Navbar>
  );
};
