import { useFela } from "react-fela";
import { Column } from "../../../../../../components/Flex";
import { Link } from "../../../../../../components/Link/Link";
import { NavContainer } from "../../../../../../components/Nav/NavContainer";
import { NavItem } from "../../../../../../components/Nav/NavItem";
import { NavLink } from "../../../../../../components/Nav/NavLink";
import { Nav } from "../../../../../../components/Nav";
import { ClipboardButton } from "../../components/CodeSnippet/ClipboardButton";
import { BodyParagraph } from "../../components/Body";
import { ColumnHeader } from "../../components/ColumnHeader";
import { Preview } from "../../components/Preview";
import { CodeSnippet } from "../../components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../components/CodeSnippet/Highlight";
import { NavLinkProps } from "../../../../../../components/Nav/NavLink";
import { NavItemProps } from "../../../../../../components/Nav/NavItem";
import { useState } from "react";

export const Description = () => (
  <p>
    Apply any of our included utility classes to our components to customize
    their appearance, like the navigation example below. There are hundreds of
    classes available—from{" "}
    <Link href="/docs/5.3/utilities/position/">positioning</Link> and{" "}
    <Link href="/docs/5.3/utilities/sizing/">sizing</Link> to{" "}
    <Link href="/docs/5.3/utilities/colors/">colors</Link> and{" "}
    <Link href="/docs/5.3/utilities/shadows/">effects</Link>. Mix them with CSS
    variable overrides for even more control.
  </p>
);

const createNavLink = ({ id, label }: { id: string; label: string }) => [
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "  ",
        isAttrValue: false,
      },
      {
        token: "<",
        isAttrValue: false,
      },
      {
        token: "li",
        isAttrValue: false,
      },
      {
        token: " ",
        isAttrValue: false,
      },
      {
        token: "class",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"nav-item"',
        isAttrValue: false,
      },
      {
        token: " ",
        isAttrValue: false,
      },
      {
        token: "role",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"presentation"',
        isAttrValue: true,
      },
      {
        token: ">",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "    ",
        isAttrValue: false,
      },
      {
        token: "<",
        isAttrValue: false,
      },
      {
        token: "button",
        isAttrValue: false,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "       ",
        isAttrValue: false,
      },
      {
        token: "class",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"nav-link active rounded-5"',
        isAttrValue: true,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "       ",
        isAttrValue: false,
      },
      {
        token: "id",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: id,
        isAttrValue: true,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "       ",
        isAttrValue: false,
      },
      {
        token: "data-bs-toggle",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: 'tab"',
        isAttrValue: true,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "       ",
        isAttrValue: false,
      },
      {
        token: "type",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"button"',
        isAttrValue: true,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "       ",
        isAttrValue: false,
      },
      {
        token: "role",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"tab"',
        isAttrValue: true,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "       ",
        isAttrValue: false,
      },
      {
        token: "aria-selected",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"true"',
        isAttrValue: true,
      },
      {
        token: ">",
        isAttrValue: false,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "         ",
        isAttrValue: false,
      },
      {
        token: label,
        isAttrValue: false,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "     ",
        isAttrValue: false,
      },

      {
        token: "</",
        isAttrValue: false,
      },
      {
        token: "button",
        isAttrValue: false,
      },
      {
        token: ">",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "  ",
        isAttrValue: false,
      },
      {
        token: "</",
        isAttrValue: false,
      },
      {
        token: "li",
        isAttrValue: false,
      },
      {
        token: ">",
        isAttrValue: false,
      },
    ],
  },
];

const navFillRule = () => ({
  fontSize: "0.875em",
  gap: "0.5rem",
  borderTopLeftRadius: "2rem",
  borderTopRightRadius: "2rem",
  borderBottomRightRadius: "2rem",
  borderBottomLeftRadius: "2rem",
  padding: "0.25rem",
  boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
  backgroundColor: "rgba(13,110,253, 1)",
});

const Pills = () => {
  const { css } = useFela();
  return (
    <Nav
      className={`nav-pills ${css({ marginBottom: "2rem" })}`}
      variant="pills"
      id="pillNav"
      role="tablist"
      items={[
        {
          active: true,
          label: "Home",
        },
        {
          active: false,
          label: "Profile",
        },
        {
          active: false,
          label: "Contact",
        },
      ]}
    />
  );
};

const fillLinkRule = ({ active = false }) => ({
  borderTopLeftRadius: "2rem",
  borderTopRightRadius: "2rem",
  borderBottomRightRadius: "2rem",
  borderBottomLeftRadius: "2rem",
  width: "100%",
  color: active ? "#0d6efd !important" : "rgba(255,255,255, 0.75)",
  backgroundColor: active ? "#fff !important" : "inherit",
  borderColor: "rgba(13,110,253, 1)",
  ":hover": {
    color: "rgba(255,255,255,1)",
  },
});

const NavFillLink = ({ active = false, children: label }: NavLinkProps) => {
  const { css } = useFela({ active });
  return (
    <NavLink
      as="button"
      active={active}
      className={`${css(fillLinkRule)} nav-fill-link`}
      card={false}
      disabled={false}
      fill={true}
      justified={false}
      variant="pills"
    >
      {label}
    </NavLink>
  );
};

const NavFillItem = ({ children }: NavItemProps) => {
  return (
    <NavItem
      className="nav-fill-item"
      card={false}
      fill={true}
      justified={false}
    >
      {children}
    </NavItem>
  );
};

export const NavFill = () => {
  const { css } = useFela();
  const fillNavClassName = `${css(navFillRule)} nav-fill`;

  const [activeLabel, setActiveLabel] = useState("Home");
  return (
    <NavContainer
      role="tablist"
      id="pillNav2"
      variant="pills"
      className={fillNavClassName}
    >
      <NavFillItem active={activeLabel === "Home"}>
        <NavFillLink
          active={activeLabel === "Home"}
          onClick={() => setActiveLabel("Home")}
        >
          Home
        </NavFillLink>
      </NavFillItem>
      <NavFillItem active={activeLabel === "Profile"}>
        <NavFillLink
          active={activeLabel === "Profile"}
          onClick={() => setActiveLabel("Profile")}
        >
          Profile
        </NavFillLink>
      </NavFillItem>
      <NavFillItem active={activeLabel === "Contact"}>
        <NavFillLink
          active={activeLabel === "Contact"}
          onClick={() => setActiveLabel("Contct")}
        >
          Contact
        </NavFillLink>
      </NavFillItem>
    </NavContainer>
  );
};

export const NavPillsExample = () => {
  return (
    <Preview className="preview-customize-components">
      <Pills />
      <NavFill />
    </Preview>
  );
};

export const NavPillsCodeSnippet = () => {
  return (
    <CodeSnippet>
      <ClipboardButton />
      <Highlight
        tabIndex={0}
        language="html"
        lines={[
          {
            tokens: [
              {
                token: "<",
                isAttrValue: false,
              },
              {
                token: "ul",
                isAttrValue: false,
              },
              {
                token: "\n",
                isAttrValue: false,
              },
              {
                token: "  ",
                isAttrValue: false,
              },
              {
                token: "class",
                isAttrValue: false,
              },
              {
                token: "=",
                isAttrValue: false,
              },
              {
                token:
                  '"nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"',
                isAttrValue: true,
              },
              {
                token: "\n",
                isAttrValue: false,
              },
              {
                token: "  ",
                isAttrValue: false,
              },
              {
                token: "id",
                isAttrValue: false,
              },
              {
                token: "=",
                isAttrValue: false,
              },
              {
                token: '"pillNav2"',
                isAttrValue: true,
              },
              {
                token: "\n",
                isAttrValue: false,
              },
              {
                token: "  ",
                isAttrValue: false,
              },
              {
                token: "style",
                isAttrValue: false,
              },
              {
                token: `"\n    --bs-nav-link-color: var(--bs-white);\n    --bs-nav-pills-link-active-color: var(--bs-primary);\n    --bs-nav-pills-link-active-bg: var(--bs-white);"`,
                isAttrValue: true,
              },
              {
                token: "\n",
                isAttrValue: false,
              },
              {
                token: ">",
                isAttrValue: false,
              },
            ],
          },
          ...createNavLink({ id: '"home-tab2"', label: "Home" }),
          ...createNavLink({ id: '"profile-tab2', label: "Profile" }),
          ...createNavLink({ id: '"contact-tab2', label: "Contact" }),

          {
            tokens: [
              { token: "\n", isAttrValue: false },
              { token: "</", isAttrValue: false },
              { token: "ul", isAttrValue: false },
              { token: ">", isAttrValue: false },
            ],
          },
        ]}
      ></Highlight>
    </CodeSnippet>
  );
};

export const CustomizeComponents = () => {
  return (
    <Column lg={6} className="customize-components">
      <ColumnHeader as="h3" className="customize-components-header">
        Quickly customize components
      </ColumnHeader>
      <Description />
      <NavPillsExample />
      <NavPillsCodeSnippet />
      <BodyParagraph
        className="explore-utility-body"
        href="/docs/5.3/examples#snippets"
        linkText="Explore customized components"
      />
    </Column>
  );
};
