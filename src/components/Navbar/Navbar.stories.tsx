import { StoryObj, Meta } from "@storybook/react";
import { Wrapper as Navbar } from "./Navbar";
import { Brand } from "./Brand";
import reactImage from "/react.svg";
import { NavbarCollapse } from "./NavbarCollapse";
import { Nav } from "./Nav";
import { NavbarText } from "./NavbarCollapse/NavbarText";

export type Story = StoryObj<typeof Navbar>;
export type Metadata = Meta<typeof Navbar>;

const meta: Metadata = {
  title: "components/Navbar/Navbar",
  component: Navbar,
};

export default meta;

export const Basic: Story = {
  args: {
    children: <Brand>Navbar</Brand>,
  },
};

export const BasicLogo: Story = {
  args: {
    children: (
      <Brand image={{ src: reactImage, width: "32px", height: "32px" }} />
    ),
  },
};

export const BasicLogoAndText: Story = {
  args: {
    children: (
      <Brand image={{ src: reactImage, width: "32px", height: "32px" }}>
        Navbar
      </Brand>
    ),
  },
};

export const NavbarWithMenu: Story = {
  args: {
    variant: "expand",
    size: "small",
    children: (
      <>
        <Brand image={{ src: reactImage, width: "32px", height: "32px" }}>
          Navbar
        </Brand>
        <NavbarCollapse>
          <Nav
            variant="expand"
            size="small"
            items={[
              {
                type: "link",
                label: "Home",
                active: true,
                href: "#",
              },
              {
                type: "link",
                label: "Disabled",
                active: false,
                disabled: true,
                href: "#",
              },
              {
                type: "dropdown",
                className: "dropdown-story-menu",
                label: "Dropdown",
                options: [
                  {
                    disabled: false,
                    type: "item",
                    text: "Action #1",
                  },
                  {
                    disabled: false,
                    type: "item",
                    text: "Action #2",
                  },
                  {
                    disabled: true,
                    type: "item",
                    text: "Action #3",
                  },
                ],
              },
            ]}
          />
        </NavbarCollapse>
      </>
    ),
  },
};

export const NavbarWithMenuScroll: Story = {
  args: {
    variant: "expand",
    size: "small",
    children: (
      <>
        <Brand image={{ src: reactImage, width: "32px", height: "32px" }}>
          Navbar
        </Brand>
        <NavbarCollapse>
          <Nav
            scroll
            variant="expand"
            size="small"
            items={[
              {
                type: "link",
                label: "Home",
                active: true,
                href: "#",
              },
              {
                type: "link",
                label: "Disabled",
                active: false,
                disabled: true,
                href: "#",
              },
              {
                type: "link",
                label: "Link 3",
                active: false,
                disabled: true,
                href: "#",
              },
              {
                type: "link",
                label: "Link 4",
                active: false,
                disabled: true,
                href: "#",
              },
              {
                type: "link",
                label: "Link 5",
                active: false,
                disabled: true,
                href: "#",
              },
              {
                type: "link",
                label: "Link 6",
                active: false,
                disabled: true,
                href: "#",
              },
              {
                type: "dropdown",
                className: "dropdown-story-menu",
                label: "Dropdown",
                options: [
                  {
                    disabled: false,
                    type: "item",
                    text: "Action #1",
                  },
                  {
                    disabled: false,
                    type: "item",
                    text: "Action #2",
                  },
                  {
                    disabled: true,
                    type: "item",
                    text: "Action #3",
                  },
                ],
              },
            ]}
          />
        </NavbarCollapse>
      </>
    ),
  },
};

export const FixedTopNavbar: Story = {
  args: {
    variant: "fixed",
    position: "top",
    size: "small",
    children: (
      <>
        <Brand image={{ src: reactImage, width: "32px", height: "32px" }}>
          Navbar
        </Brand>
        <NavbarText text="Inline text" />
      </>
    ),
  },
};

export const FixedBottomNavbar: Story = {
  args: {
    variant: "fixed",
    position: "bottom",
    size: "small",
    children: (
      <>
        <Brand image={{ src: reactImage, width: "32px", height: "32px" }}>
          Navbar
        </Brand>
      </>
    ),
  },
};

export const StickyTopNavbar: Story = {
  args: {
    variant: "sticky",
    position: "top",
    size: "small",
    children: (
      <>
        <Brand image={{ src: reactImage, width: "32px", height: "32px" }}>
          Navbar
        </Brand>
      </>
    ),
  },
};

export const StickyBottomNavbar: Story = {
  args: {
    variant: "sticky",
    position: "bottom",
    size: "small",
    children: (
      <>
        <Brand image={{ src: reactImage, width: "32px", height: "32px" }}>
          Navbar
        </Brand>
      </>
    ),
  },
};
