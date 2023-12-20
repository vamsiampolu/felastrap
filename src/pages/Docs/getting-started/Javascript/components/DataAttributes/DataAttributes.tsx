import { ReactNode } from "react";
import { Title } from "../../../../components/Title";

const AttributeExample = () => (
  <code>
    data{"-"}bs{"-"}animation{"="}
    {'"'}
    {"{"}value{"}"}
    {'"'}
  </code>
);
const KebabCaseExample = () => (
  <code>
    data{"-"}bs{"-"}custom{"-"}class{"="}
    {'"'}beautifier{'"'}
  </code>
);
const CamelCaseExample = () => (
  <code>
    data{"-"}bs{"-"}custom{"-"}Class{"="}
    {'"'}beautifier{'"'}
  </code>
);
const DataDash = () => (
  <code>
    data{"-"}bs{"-"}
  </code>
);
const Experimental = () => <strong>experimental</strong>;

const DataBsConfig = () => (
  <code>
    data{"-"}bs{"-"}config
  </code>
);
const DataBsConfigExample = () => (
  <code>
    data{"-"}bs{"-"}config{"="}
    {"'"}
    {"{"}
    {'"'}delay{'"'}
    {":"}0, {'"'}title{'"'}:123{"}"}
    {"'"}
  </code>
);
const DataBsDelayExample = () => (
  <code>
    data{"-"}bs{"-"}delay{"='"}
    {'{"'}show{'"'}:0,{'"'}hide{'"'}:150{"}'"}
  </code>
);
const DataBsTitleAttribute = () => (
  <code>
    data-bs-title{"="}
    {'"'}456{'"'}
  </code>
);

const InQuotes = ({ value }: { value: ReactNode }) => (
  <>
    {'"'}
    <em>{value}</em>
    {'"'}
  </>
);

const LeadContent = () => (
  <>
    <p>
      Nearly all Bootstrap plugins can be enabled and configured through HTML
      alone with data attributes {"("}our preferred way of using JavaScript
      functionality{")"}. Be sure to{" "}
      <strong>only use one set of data attributes on a single element</strong>{" "}
      {"("}e.g., you cannot trigger a tooltip and modal from the same button.
      {")"}
    </p>
    <p>
      As options can be passed via data attributes or JavaScript, you can append
      an option name to <DataDash />, as in <AttributeExample />. Make sure to
      change the case type of the option name from{" "}
      <InQuotes value="camelCase" /> to <InQuotes value="kebab-case" /> when
      passing the options via data attributes. For example, use{" "}
      <KebabCaseExample /> instead of <CamelCaseExample />
      {"."}
    </p>
  </>
);

const BodyContent = () => (
  <>
    <p>
      As of Bootstrap 5{"."}2{"."}0{","} all components support an{" "}
      <Experimental /> reserved data attribute <DataBsConfig /> that can house
      simple component configuration as a JSON string. When an element has{" "}
      <DataBsConfigExample /> and <DataBsTitleAttribute /> attributes, the final{" "}
      <code>title</code> value will be <code>456</code> and the separate data
      attributes will override values given on <DataBsConfig />
      {". "}
      In addition{","} existing data attributes are able to house JSON values
      like <DataBsDelayExample />.
    </p>
    <p>
      The final configuration object is the merged result of <DataBsConfig />,{" "}
      <DataDash />, and <code>js object</code> where the latest given key-value
      overrides the others.
    </p>
  </>
);

export const DataAttributes = () => (
  <>
    <Title
      id="data-attributes"
      aria-label="Link to this section: Data attributes"
    >
      Data attributes
    </Title>
    <LeadContent />
    <BodyContent />
  </>
);
