import { Table } from "../../../../../../components/Table";

export const SupportedVersions = () => (
  <Table
    header={{
      cols: [
        {
          value: "",
        },
        {
          value: "Chrome",
        },
        {
          value: "Firefox",
        },
        {
          value: "Microsoft Edge",
        },
        {
          value: "Opera",
        },
        {
          value: "Safari",
        },
      ],
    }}
    rows={[
      {
        cols: [
          {
            value: <strong>Mac</strong>,
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
        ],
      },
      {
        cols: [
          {
            value: <strong>Windows</strong>,
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
          {
            value: (
              <span style={{ color: "rgba(33, 37, 41, 0.75)" }}>{"—"}</span>
            ),
          },
        ],
      },
    ]}
  />
);
