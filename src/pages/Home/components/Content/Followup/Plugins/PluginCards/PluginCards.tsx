import { useFela } from "react-fela";
import { Column, Row } from "../../../../../../../components/Flex";
import { ColumnHeader } from "../../../components/ColumnHeader";
import { PluginCard } from "./PluginCard";

export const Lead = () => (
  <p>
    Bootstrap features a dozen plugins that you can drop into any project. Drop
    them in all at once, or choose just the ones you need
    {"."}
  </p>
);

export const PluginCards = () => {
  const { css } = useFela();

  const plugins = [
    {
      href: "/docs/5.3/components/alerts/#javascript-behavior",
      header: "Alert",
      text: "Show and hide alert messages to your users.",
    },
    {
      href: "/docs/5.3/components/buttons/#button-plugin",
      header: "Button",
      text: "Programmatically control the active state for buttons.",
    },
    {
      href: "/docs/5.3/components/carousel/",
      header: "Carousel",
      text: "Add slideshows to any page, including support for crossfade.",
    },
    {
      href: "/docs/5.3/components/collapse/",
      header: "Collapse",
      text: "Expand and collapse areas of content, or create accordions.",
    },
    {
      href: "/docs/5.3/components/dropdowns/",
      header: "Dropdown",
      text: "Create menus of links, actions, forms, and more.",
    },
    {
      href: "/docs/5.3/components/modal/",
      header: "Modal",
      text: "Add flexible and responsive dialogs to your project.",
    },
    {
      href: "/docs/5.3/components/offcanvas/",
      header: "Offcanvas",
      text: "Build and toggle hidden sidebars into any page.",
    },
    {
      href: "/docs/5.3/components/popovers/",
      header: "Popover",
      text: "Create custom overlays. Built on Popper.",
    },
    {
      href: "/docs/5.3/components/scrollspy/",
      header: "Scrollspy",
      text: "Automatically update active nav links based on page scroll.",
    },
    {
      href: "/docs/5.3/components/navs-tabs/",
      header: "Tab",
      text: "Allow Bootstrap nav components to toggle contents.",
    },
    {
      href: "/docs/5.3/components/toasts/",
      header: "Toasts",
      text: "Show and hide notifications to your visitors.",
    },
    {
      href: "/docs/5.3/components/tooltips/",
      header: "Tooltip",
      text: "Replace browser tooltips with custom ones. Built on Popper.",
    },
  ];

  return (
    <Column lg={6} className={css({ marginBottom: "1rem" })}>
      <ColumnHeader
        as="h3"
        className={`${css({ fontWeight: 600 })} plugin-list-header`}
      >
        Comprehensive set of plugins
      </ColumnHeader>
      <Lead />
      <hr className={css({ marginTop: "1.5rem", marginBottom: "1.5rem" })} />
      <Row gutter={3}>
        {plugins.map((plugin, index) => (
          <PluginCard {...plugin} key={`plugin-card-${index}`} />
        ))}
      </Row>
    </Column>
  );
};
