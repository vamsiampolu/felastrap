import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useFela } from "react-fela";
import { Column, Container, Row } from "../../../../components/Flex";

const rule = () => ({
  backgroundColor: "rgba(248,249,250, 1)",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  marginTop: "3rem",
  "@media (min-width: 768px)": {
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
});

const mb2 = () => ({
  marginBottom: "0.5rem",
});

const ml1 = () => ({
  marginLeft: "0.5rem",
});

const mb3 = () => ({
  marginBottom: "1rem",
});

const lgOffset = () => ({
  "@media (min-width: 992px)": {
    marginLeft: "8.33333333%",
  },
});

const listUnstyled = () => ({
  paddingLeft: 0,
  listStyle: "none",
});

const small = () => ({
  fontSize: "0.875em",
});

const ListItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { css } = useFela();
  return <li className={`${css(mb2)} ${className}`.trim()}>{children}</li>;
};

const List = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { css } = useFela();
  return <ul className={`${css(listUnstyled)} ${className}`}>{children}</ul>;
};

const FooterColumn = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { css } = useFela();
  return (
    <Column span={6} lg={2} className={`${css(mb3)} ${className}`}>
      {children}
    </Column>
  );
};

const Guides = () => {
  return (
    <FooterColumn>
      <h5>Guides</h5>
      <List>
        <ListItem>
          <a href="/docs/5.3/getting-started/">Getting started</a>
        </ListItem>
        <ListItem>
          <a href="/docs/5.3/examples/starter-template/">Starter template</a>
        </ListItem>
        <ListItem>
          <a href="/docs/5.3/getting-started/webpack/">Webpack</a>
        </ListItem>
        <ListItem>
          <a href="/docs/5.3/getting-started/parcel/">Parcel</a>
        </ListItem>
        <ListItem>
          <a href="/docs/5.3/getting-started/vite/">Vite</a>
        </ListItem>
      </List>
    </FooterColumn>
  );
};

export const Projects = () => {
  return (
    <FooterColumn>
      <h5>Projects</h5>
      <List>
        <ListItem>
          <a
            href="https://github.com/twbs/bootstrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap 5
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/twbs/bootstrap/tree/v4-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap 4
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/twbs/icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/twbs/rfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            RFS
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/twbs/examples/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples repo
          </a>
        </ListItem>
      </List>
    </FooterColumn>
  );
};

export const Community = () => {
  return (
    <FooterColumn>
      <h5>Community</h5>
      <List>
        <ListItem>
          <a
            href="https://github.com/twbs/bootstrap/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Issues
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/twbs/bootstrap/discussions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discussions
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/sponsors/twbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Corporate sponsors
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://opencollective.com/bootstrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Collective
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://stackoverflow.com/questions/tagged/bootstrap-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow
          </a>
        </ListItem>
      </List>
    </FooterColumn>
  );
};

export const Links = () => {
  const { css } = useFela();
  return (
    <FooterColumn className={css(lgOffset)}>
      <h5>Links</h5>
      <List>
        <ListItem>
          <a href="/">Home</a>
        </ListItem>
        <ListItem>
          <a href="/docs/5.3/">Docs</a>
        </ListItem>
        <ListItem>
          <a href="/docs/5.3/examples/">Examples</a>
        </ListItem>
        <ListItem>
          <a href="https://icons.getbootstrap.com/">Icons</a>
        </ListItem>
        <ListItem>
          <a href="https://themes.getbootstrap.com/">Themes</a>
        </ListItem>
        <ListItem>
          <a href="https://blog.getbootstrap.com/">Blog</a>
        </ListItem>
        <ListItem>
          <a
            href="https://cottonbureau.com/people/bootstrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swag Store
          </a>
        </ListItem>
      </List>
    </FooterColumn>
  );
};

export const BootstrapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="32"
    className="d-block me-2"
    viewBox="0 0 118 94"
    role="img"
  >
    <title>Bootstrap</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
      fill="currentColor"
    ></path>
  </svg>
);

const bsIconRule = () => ({
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
});

const emphasisColor = () => ({
  color: "#000",
});

const fs5 = () => ({ fontSize: "1.25rem" });
const FooterLogo = () => {
  const { css } = useFela();
  return (
    <a
      className={css([bsIconRule, mb2, emphasisColor])}
      href="/"
      aria-label="Bootstrap"
    >
      <BootstrapIcon />
      <span className={css([fs5, ml1])}>Bootstrap</span>
    </a>
  );
};

export const FooterDetails = () => {
  const { css } = useFela();
  return (
    <List className={css(small)}>
      <ListItem>
        Designed and built with all the love in the world by the{" "}
        <a style={{ color: "black" }} href="/docs/5.3/about/team/">
          Bootstrap team
        </a>{" "}
        with the help of{" "}
        <a
          style={{ color: "black" }}
          href="https://github.com/twbs/bootstrap/graphs/contributors"
        >
          our contributors
        </a>
        .
      </ListItem>
      <ListItem>
        Code licensed{" "}
        <a
          style={{ color: "black" }}
          href="https://github.com/twbs/bootstrap/blob/main/LICENSE"
          target="_blank"
          rel="license noopener noreferrer"
        >
          MIT
        </a>
        , docs{" "}
        <a
          href="https://creativecommons.org/licenses/by/3.0/"
          style={{ color: "black" }}
          target="_blank"
          rel="license noopener noreferrer"
        >
          CC BY 3.0
        </a>
        .
      </ListItem>
      <ListItem>Currently v5.3.2.</ListItem>
    </List>
  );
};

export const Footer = ({
  className = "",
}: ComponentPropsWithoutRef<"footer">) => {
  const { css } = useFela();
  return (
    <footer className={`${css(rule)} bd-footer ${className}`.trim()}>
      <Container className="py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <Row>
          <Column lg={3} className={css(mb3)}>
            <FooterLogo />
            <FooterDetails />
          </Column>
          <Links />
          <Guides />
          <Projects />
          <Community />
        </Row>
      </Container>
    </footer>
  );
};
