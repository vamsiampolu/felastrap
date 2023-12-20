/* eslint-disable react-refresh/only-export-components */
import { createRenderer } from "./createRenderer.js";
import { lightTheme } from "./reboot/lightTheme.js";
import {
  ArrowRightIcon,
  BookHalfIcon,
  BoxSeamIcon,
  BracesAsteriskIcon,
  BracesIcon,
  CheckIcon,
  ChevronDownIcon,
  CirclePopIcon,
  CloseIcon,
  CodeIcon,
  DropletIcon,
  EarthIcon,
  GithubIcon,
  GlobeIcon2,
  GreenCheck,
  GridFillIcon,
  HamburgerIcon,
  MagicIcon,
  MenuButtonWideFill,
  OpenCollectiveIcon,
  PaletteIcon2,
  PauseIcon,
  PhoneIcon,
  PlayIcon,
  PluginIcon,
  PlusAsteriskIcon,
  PlusIcon,
  RadiosIcon,
  RichTextIcon,
  SearchIcon,
  ToolsIcon,
  TwitterIcon,
  UnfoldIcon,
} from "./components/Icons";

export const Icons = {
  ArrowRight: ArrowRightIcon,
  BookHalf: BookHalfIcon,
  BoxSeam: BoxSeamIcon,
  BracesAsterisk: BracesAsteriskIcon,
  Braces: BracesIcon,
  EmptyCheck: CheckIcon,
  ChevronDown: ChevronDownIcon,
  CirclePop: CirclePopIcon,
  Close: CloseIcon,
  Code: CodeIcon,
  Droplet: DropletIcon,
  Earth: EarthIcon,
  Github: GithubIcon,
  Globe: GlobeIcon2,
  GreenCheck,
  GridFill: GridFillIcon,
  Hamburger: HamburgerIcon,
  Magic: MagicIcon,
  MenuButtonWideFill,
  OpenCollective: OpenCollectiveIcon,
  Palette: PaletteIcon2,
  Pause: PauseIcon,
  Phone: PhoneIcon,
  Play: PlayIcon,
  Plugin: PluginIcon,
  PlusAsterisk: PlusAsteriskIcon,
  Plus: PlusIcon,
  Radios: RadiosIcon,
  RichText: RichTextIcon,
  Search: SearchIcon,
  Tools: ToolsIcon,
  Twitter: TwitterIcon,
  Unfold: UnfoldIcon,
};

export const renderer = createRenderer();
renderer.renderStatic(lightTheme);

export {
  Accordion,
  AccordionPanel,
  AccordionPanelHeader,
  AccordionPanelContent,
  type AccordionProps,
  type AccordionPanelProps,
} from "./components/Accordion";

export { Alert, HeaderAlert, type AlertProps } from "./components/Alert";

export { Badge, type BadgeProps } from "./components/Badge";
export { Blockquote, type BlockquoteProps } from "./components/Blockquote";

export { Breadcrumb, type BreadcrumbProps } from "./components/Breadcrumb";
export {
  Button,
  ButtonToolbar,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  type ButtonProps,
  type ButtonGroupProps,
  type ToggleButtonProps,
  type ToggleGroupButtonItem,
  type ToggleButtonGroupProps,
} from "./components/Button";

export {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImage,
  CardSubtitle,
  CardText,
  CardTitle,
  type CardProps,
  type CardBodyProps,
  type CardHeaderProps,
  type CardImageProps,
  type CardSubtitleProps,
  type CardTitleProps,
} from "./components/Card";

export { Caret, type CaretProps } from "./components/Caret/";
export { CloseButton, type CloseButtonProps } from "./components/CloseButton";
export { Carousel, type CarouselProps } from "./components/Carousel";

export {
  Collapse,
  CollapseContext,
  useCollapse,
  Content as CollapseContent,
  Target as CollapseTarget,
  type CollapseProps,
  type CollapseContextValue,
  type UseCollapseOptions,
  type CollapseContentProps,
} from "./components/Collapse";

export { DropdownMenu, type DropdownMenuProps } from "./components/Dropdown";

export { Figure, type FigureProps } from "./components/Figure";
export {
  Row,
  Container,
  Column,
  type RowProps,
  type ColumnProps,
  type ContainerProps,
} from "./components/Flex";

export {
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  ColorPicker,
  FileUploadField,
  FileUploadInput,
  FloatingGroupButton,
  FloatingGroupText,
  FloatingLabel,
  FloatingSelect,
  FloatingSelectLabel,
  FloatingTextarea,
  FloatingTextField,
  FloatingTextInput,
  FormText,
  GroupButton,
  GroupInput,
  GroupText,
  GroupTextarea,
  InputGroup,
  Label,
  RadioButton,
  RadioInput,
  RadioLabel,
  Range,
  SearchField,
  Select,
  Switch,
  Textarea,
  TextareaField,
  TextField,
  TextInput,
  useFloatingTextContext,
  useFloatingTextField,
  type CheckboxInputProps,
  type CheckboxLabelProps,
  type CheckboxProps,
  type ColorPickerProps,
  type FileUploadFieldProps,
  type FileUploadProps,
  type FloatingLabelProps,
  type FloatingSelectLabelProps,
  type FloatingSelectProps,
  type FloatingTextareaProps,
  type FloatingTextFieldProps,
  type FloatingTextInputProps,
  type GroupButtonProps,
  type GroupInputProps,
  type GroupTextareaProps,
  type GroupTextProps,
  type InputGroupProps,
  type LabelProps,
  type RadioButtonProps,
  type RadioInputProps,
  type RadioLabelProps,
  type RangeProps,
  type SearchFieldProps,
  type SelectProps,
  type SwitchProps,
  type TextareaFieldProps,
  type TextareaProps,
  type TextFieldProps,
  type TextInputProps,
} from "./components/Form";

export {
  Grid,
  type GridProps,
  GridColumn,
  type GridColumnProps,
} from "./components/Grid/";

export { IconWrapper } from "./components/Icons/IconWrapper.js";

export {
  Image,
  ProgressiveImage,
  type ImageProps,
  type ProgressiveImageProps,
} from "./components/Image";

export {
  DataListGroup,
  ListGroup,
  ListGroupItem,
  ListGroupItemAction,
  type ListGroupProps,
  type ListGroupItemProps,
  type ListGroupItemActionProps,
  type DataListGroupProps,
} from "./components/ListGroup";

export { Link, type LinkProps } from "./components/Link";
export { Modal, type ModalProps } from "./components/Modal";

export { Nav, type NavProps } from "./components/Nav";
export {
  Navbar,
  Nav as NavbarNav,
  NavbarCollapse,
  Brand,
  type NavbarProps,
  type NavProps as NavbarNavProps,
  type BrandProps,
  type NavbarSize,
  type NavbarBg,
} from "./components/Navbar";

export { Offcanvas, type OffcanvasProps } from "./components/Offcanvas";
export { Pagination, type PaginationProps } from "./components/Pagination";

export {
  PanelGroup,
  type PanelGroupProps,
  type PanelGroupItem,
} from "./components/PanelGroup";

export {
  Progress,
  ProgressStacked,
  type ProgressProps,
  type ProgressStackedProps,
} from "./components/Progress";

export {
  SegmentedButton,
  type SegmentedButtonProps,
} from "./components/SegmentedButton";
export { Spinner, type SpinnerProps } from "./components/Spinner";

export { Table, type TableProps } from "./components/Table";
export {
  Toast,
  ToastStack,
  type ToastPlacement,
  type ToastProps,
  type ToastStackProps,
} from "./components/Toast";

export { Tooltip, type TooltipProps } from "./components/Tooltip";
export { Portal, type PortalProps } from "./components/Portal";
export { Provider, type ProviderProps } from "./components/Provider";

export {
  useWrapperElement,
  useClickOutside,
  useEscapeKey,
  useWindowSize,
  useMediaQuery,
} from "./hooks";
