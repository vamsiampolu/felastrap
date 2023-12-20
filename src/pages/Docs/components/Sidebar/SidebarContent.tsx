import { useFela } from "react-fela";
import { BookHalfIcon } from "../../../../components/Icons/BookHalfIcon";
import { BracesAsteriskIcon } from "../../../../components/Icons/BracesAsteriskIcon";
import { GlobeIcon2 } from "../../../../components/Icons/GlobeIcon2";
import { GridFillIcon } from "../../../../components/Icons/GridFillIcon";
import { MagicIcon } from "../../../../components/Icons/MagicIcon";
import { MenuButtonWideFill } from "../../../../components/Icons/MenuButtonWideFill";
import { PaletteIcon2 } from "../../../../components/Icons/PaletteIcon2";
import { RadiosIcon } from "../../../../components/Icons/RadiosIcon";
import { RichTextIcon } from "../../../../components/Icons/RichTextIcon";
import { ToolsIcon } from "../../../../components/Icons/ToolsIcon";
import { Content } from "./Content";
import { Divider } from "./Divider";
import { Group } from "./Group";
import { GroupHeader } from "./GroupHeader";
import { Groups } from "./Groups";
import { Item } from "./Item";
import { Items } from "./Items";
import { Nav } from "./Nav";
import {
  indigoRule,
  tealRule,
  blueRule,
  cyanRule,
  grayRule,
  orangeRule,
  pinkRule,
  redRule,
} from "./colors";

export const GettingStartedGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading">
        <BookHalfIcon className={css(indigoRule)} />
        Getting started
      </GroupHeader>

      <Items>
        <Item href="/docs/5.3/getting-started/introduction/">Introduction</Item>
        <Item href="/docs/5.3/getting-started/download/">Download</Item>
        <Item href="/docs/5.3/getting-started/contents/">Contents</Item>
        <Item href="/docs/5.3/getting-started/browsers-devices/">
          Browsers {"&"} devices
        </Item>
        <Item href="/docs/5.3/getting-started/javascript/">JavaScript</Item>
        <Item href="/docs/5.3/getting-started/webpack/">Webpack</Item>
        <Item href="/docs/5.3/getting-started/parcel/">Parcel</Item>
        <Item href="/docs/5.3/getting-started/vite/">Vite</Item>
        <Item href="/docs/5.3/getting-started/accessibility/">
          Accessibility
        </Item>
        <Item href="/docs/5.3/getting-started/rfs/">RFS</Item>
        <Item href="/docs/5.3/getting-started/rtl/">RTL</Item>
        <Item href="/docs/5.3/getting-started/contribute/">Contribute</Item>
      </Items>
    </Group>
  );
};

export const CustomizeGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader>
        <PaletteIcon2 className={css(pinkRule)} />
        Customize
      </GroupHeader>
      <Items>
        <Item href="/docs/5.3/customize/overview/">Overview</Item>
        <Item href="/docs/5.3/customize/sass/">Sass</Item>
        <Item href="/docs/5.3/customize/options/">Options</Item>
        <Item href="/docs/5.3/customize/color/">Color</Item>
        <Item href="/docs/5.3/customize/color-modes/">Color Modes</Item>
        <Item href="/docs/5.3/customize/components/">Components</Item>
        <Item href="/docs/5.3/customize/css-variables/">CSS variables</Item>
        <Item href="/docs/5.3/customize/optimize/">Optimize</Item>
      </Items>
    </Group>
  );
};

export const LayoutGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading">
        <GridFillIcon className={css(tealRule)} />
        Layout
      </GroupHeader>

      <Items>
        <Item href="/docs/5.3/layout/breakpoints/">Breakpoints</Item>
        <Item href="/docs/5.3/layout/containers/">Containers</Item>
        <Item href="/docs/5.3/layout/grid/">Grid</Item>
        <Item href="/docs/5.3/layout/columns/">Columns</Item>
        <Item href="/docs/5.3/layout/gutters/">Gutters</Item>
        <Item href="/docs/5.3/layout/utilities/">Utilities</Item>
        <Item href="/docs/5.3/layout/z-index/">Z-Index</Item>
        <Item href="/docs/5.3/layout/css-grid/">CSS Grid</Item>
      </Items>
    </Group>
  );
};

export const ContentGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading">
        <RichTextIcon className={css(grayRule)} />
        Content
      </GroupHeader>
      <Items>
        <Item href="/docs/5.3/content/reboot/">Reboot</Item>
        <Item href="/docs/5.3/content/typography/">Typography</Item>
        <Item href="/docs/5.3/content/images/">Images</Item>
        <Item href="/docs/5.3/content/tables/">Tables</Item>
        <Item href="/docs/5.3/content/figures/">Figures</Item>
      </Items>
    </Group>
  );
};

export const FormsGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading">
        <RadiosIcon className={css(blueRule)} />
        Forms
      </GroupHeader>
      <Items>
        <Item href="/docs/5.3/forms/overview/">Overview</Item>
        <Item href="/docs/5.3/forms/form-control/">Form Control</Item>
        <Item href="/docs/5.3/forms/select/">Select</Item>
        <Item href="/docs/5.3/forms/checks-radios/">Checks {"&"} radios</Item>
        <Item href="/docs/5.3/forms/range/">Range</Item>
        <Item href="/docs/5.3/forms/input-group/">Input Group</Item>
        <Item href="/docs/5.3/forms/floating-labels/">Floating Labels</Item>
        <Item href="/docs/5.3/forms/layout/">Layout</Item>
        <Item href="/docs/5.3/forms/validation/">Validation</Item>
      </Items>
    </Group>
  );
};

export const ComponentsGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
        <MenuButtonWideFill className={css(cyanRule)} />
        Components
      </GroupHeader>

      <Items>
        <Item href="/docs/5.3/components/accordion/">Accordion</Item>
        <Item href="/docs/5.3/components/alerts/">Alerts</Item>
        <Item href="/docs/5.3/components/badge/">Badge</Item>
        <Item href="/docs/5.3/components/breadcrumb/">Breadcrumb</Item>
        <Item href="/docs/5.3/components/buttons/">Buttons</Item>
        <Item href="/docs/5.3/components/button-group/">Button Group</Item>
        <Item href="/docs/5.3/components/card/">Card</Item>
        <Item href="/docs/5.3/components/carousel/">Carousel</Item>
        <Item href="/docs/5.3/components/close-button/">Close Button</Item>
        <Item href="/docs/5.3/components/collapse/">Collapse</Item>
        <Item href="/docs/5.3/components/dropdowns/">Dropdowns</Item>
        <Item href="/docs/5.3/components/list-group/">List group</Item>
        <Item href="/docs/5.3/components/modal/">Modal</Item>
        <Item href="/docs/5.3/components/navbar/">Navbar</Item>
        <Item href="/docs/5.3/components/navs-tabs/">Navs {"&"} Tabs</Item>
        <Item href="/docs/5.3/components/offcanvas/">Offcanvas</Item>
        <Item href="/docs/5.3/components/pagination/">Pagination</Item>
        <Item href="/docs/5.3/components/placeholders/">Placeholders</Item>
        <Item href="/docs/5.3/components/popovers/">Popovers</Item>
        <Item href="/docs/5.3/components/progress/">Progress</Item>
        <Item href="/docs/5.3/components/scrollspy/">Scrollspy</Item>
        <Item href="/docs/5.3/components/spinners/">Spinners</Item>
        <Item href="/docs/5.3/components/toasts/">Toasts</Item>
        <Item href="/docs/5.3/components/tooltips/">Tooltips</Item>
      </Items>
    </Group>
  );
};

export const HelpersGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading">
        <MagicIcon className={css(orangeRule)} />
        Helpers
      </GroupHeader>

      <Items>
        <Item href="/docs/5.3/helpers/clearfix/">Clearfix</Item>
        <Item href="/docs/5.3/helpers/color-background/">
          Color {"&"} background
        </Item>
        <Item href="/docs/5.3/helpers/colored-links/">Colored links</Item>
        <Item href="/docs/5.3/helpers/focus-ring/">Focus ring</Item>
        <Item href="/docs/5.3/helpers/icon-link/">Icon link</Item>
        <Item href="/docs/5.3/helpers/position/">Position</Item>
        <Item href="/docs/5.3/helpers/ratio/">Ratio</Item>
        <Item href="/docs/5.3/helpers/stacks/">Stacks</Item>
        <Item href="/docs/5.3/helpers/stretched-link/">Stretched link</Item>
        <Item href="/docs/5.3/helpers/text-truncation/">Text truncation</Item>
        <Item href="/docs/5.3/helpers/vertical-rule/">Vertical rule</Item>
        <Item href="/docs/5.3/helpers/visually-hidden/">Visually hidden</Item>
      </Items>
    </Group>
  );
};

const UtilitiesGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading">
        <BracesAsteriskIcon className={css(redRule)} />
        Utilities
      </GroupHeader>

      <Items>
        <Item href="/docs/5.3/utilities/api/">API</Item>
        <Item href="/docs/5.3/utilities/background/">Background</Item>
        <Item href="/docs/5.3/utilities/borders/">Borders</Item>
        <Item href="/docs/5.3/utilities/colors/">Colors</Item>
        <Item href="/docs/5.3/utilities/display/">Display</Item>
        <Item href="/docs/5.3/utilities/flex/">Flex</Item>
        <Item href="/docs/5.3/utilities/float/">Float</Item>
        <Item href="/docs/5.3/utilities/interactions/">Interactions</Item>
        <Item href="/docs/5.3/utilities/link/">Link</Item>
        <Item href="/docs/5.3/utilities/object-fit/">Object fit</Item>
        <Item href="/docs/5.3/utilities/opacity/">Opacity</Item>
        <Item href="/docs/5.3/utilities/overflow/">Overflow</Item>
        <Item href="/docs/5.3/utilities/position/">Position</Item>
        <Item href="/docs/5.3/utilities/shadows/">Shadows</Item>
        <Item href="/docs/5.3/utilities/sizing/">Sizing</Item>
        <Item href="/docs/5.3/utilities/spacing/">Spacing</Item>
        <Item href="/docs/5.3/utilities/text/">Text</Item>
        <Item href="/docs/5.3/utilities/vertical-align/">Vertical align</Item>
        <Item href="/docs/5.3/utilities/visibility/">Visibility</Item>
        <Item href="/docs/5.3/utilities/z-index/">Z-index</Item>
      </Items>
    </Group>
  );
};

const ExtendGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading">
        <ToolsIcon className={css(blueRule)} />
        Extend
      </GroupHeader>

      <Items>
        <Item href="/docs/5.3/extend/approach/">Approach</Item>
        <Item href="/docs/5.3/extend/icons/">Icons</Item>
      </Items>
    </Group>
  );
};

const AboutGroup = () => {
  const { css } = useFela();
  return (
    <Group className="bd-links-group">
      <GroupHeader className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
        <GlobeIcon2 className={css(indigoRule)} />
        About
      </GroupHeader>
      <Items>
        <Item href="/docs/5.3/about/overview/">Overview</Item>
        <Item href="/docs/5.3/about/team/">Team</Item>
        <Item href="/docs/5.3/about/brand/">Brand</Item>
        <Item href="/docs/5.3/about/license/">License</Item>
        <Item
          href="/docs/5.3/about/translations/"
          className="bd-links-link d-inline-block rounded"
        >
          Translations
        </Item>
      </Items>
    </Group>
  );
};

export const SidebarContent = () => (
  <Content>
    <Nav id="bd-docs-nav">
      <Groups>
        <GettingStartedGroup />
        <CustomizeGroup />
        <LayoutGroup />
        <ContentGroup />
        <FormsGroup />
        <ComponentsGroup />
        <HelpersGroup />
        <UtilitiesGroup />
        <ExtendGroup />
        <AboutGroup />
        <Divider />
        <Item href="/docs/5.3/migration/">Migration</Item>
      </Groups>
    </Nav>
  </Content>
);
