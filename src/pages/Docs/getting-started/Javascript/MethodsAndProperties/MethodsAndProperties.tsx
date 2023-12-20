import { Table } from "../../../../../components/Table";
import { Title } from "../../../components/Title";

const CommonApiMethods = () => (
  <Table
    header={{
      cols: [
        {
          value: "Method",
        },
        {
          value: "Description",
        },
      ],
    }}
    rows={[
      {
        cols: [
          {
            value: <code>dispose</code>,
          },
          {
            value:
              "Destroys an element's modal. (Removes stored data on the DOM element)",
          },
        ],
      },
      {
        cols: [
          {
            value: <code>getInstance</code>,
          },
          {
            value: (
              <>
                <em>Static</em> method which allows you to get the modal
                instance associated with a DOM element{"."}
              </>
            ),
          },
        ],
      },
      {
        cols: [
          {
            value: <code>getOrCreateInstance</code>,
          },
          {
            value: (
              <>
                <em>Static</em> method which allows you to get the modal
                instance associated with a DOM element, or create a new one in
                case it wasn{"'"}t initialized.
              </>
            ),
          },
        ],
      },
    ]}
  />
);

const CommonApiProperties = () => (
  <Table
    header={{
      cols: [
        {
          value: "Static Property",
        },
        {
          value: "Description",
        },
      ],
    }}
    rows={[
      {
        cols: [
          {
            value: <code>NAME</code>,
          },
          {
            value: (
              <>
                Returns the plugin name. {"("}Example:{" "}
                <code>
                  bootstrap{"."}Tooltip{"."}NAME
                </code>
                {")"}
              </>
            ),
          },
        ],
      },
      {
        cols: [
          {
            value: <code>VERSION</code>,
          },
          {
            value: (
              <>
                The version of each of Bootstrap{"'"}s plugins can be accessed
                via the VERSION property of the plugin{"'"}s constructor {"("}
                Example:{" "}
                <code>
                  bootstrap{"."}Tooltip{"."}VERSION
                </code>
                {")"}
              </>
            ),
          },
        ],
      },
    ]}
  />
);

export const MethodsAndProperties = () => (
  <>
    <Title
      id="methods-and-properties"
      aria-label="Link to this section: Methods and properties"
    >
      Methods and properties
    </Title>
    <p>
      Every Bootstrap plugin exposes the following methods and static
      properties.
    </p>
    <CommonApiMethods />
    <CommonApiProperties />
  </>
);
