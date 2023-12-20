import { Link } from "../../../../../../components/Link/Link";
import { Table } from "../../../../../../components/Table";
import { FilesColumn } from "./FilesColumn";

export const CssFilesTable = () => {
  const header = {
    cols: [
      {
        value: "CSS Files",
      },
      {
        value: "Layout",
      },
      {
        value: "Component",
      },
      {
        value: "Utilities",
      },
    ],
  };

  const rows = [
    {
      cols: [
        {
          value: <FilesColumn filename="bootstrap" />,
        },
        {
          value: "Included",
        },
        {
          value: "Included",
        },
        {
          value: "Included",
        },
        {
          value: "Included",
        },
      ],
    },
    {
      cols: [
        { value: <FilesColumn filename="bootstrap-grid" /> },
        { value: <Link href="/docs/5.3/layout/grid/">Only grid system</Link> },
        { value: "-" },
        { value: "-" },
        {
          value: (
            <Link href="/docs/5.3/utilities/flex/">Only flex utilities</Link>
          ),
        },
      ],
    },
    {
      cols: [
        {
          value: <FilesColumn filename="bootstrap-utilities" />,
        },
        {
          value: "-",
        },
        {
          value: "-",
        },
        {
          value: "-",
        },
        {
          value: "Included",
        },
      ],
    },
    {
      cols: [
        {
          value: <FilesColumn filename="bootstrap-reboot" />,
        },
        {
          value: "-",
        },
        {
          value: <Link href="/docs/5.3/content/reboot/">Only Reboot</Link>,
        },
        {
          value: "-",
        },
        {
          value: "-",
        },
      ],
    },
  ];

  return <Table header={header} rows={rows} />;
};
