import { Table } from "../../../../../../components/Table";

const FilesColumn = ({ filename }: { filename: string }) => (
  <>
    <code>
      {filename}
      {"."}js
    </code>
    <br />
    <code>
      {filename}
      {"."}min{"."}js
    </code>
    <br />
  </>
);

export const JsFileTable = () => (
  <Table
    header={{
      cols: [
        {
          value: "JS Files",
        },
        {
          value: "Popper",
        },
      ],
    }}
    rows={[
      {
        cols: [
          {
            value: <FilesColumn filename="bootstrap.bundle" />,
          },
          {
            value: "Included",
          },
        ],
      },
      {
        cols: [
          {
            value: <FilesColumn filename="bootstrap" />,
          },
          {
            value: "-",
          },
        ],
      },
    ]}
  />
);
