import { Table } from "../../../../../../components/Table";
import { Title } from "../../../../components/Title";

const LeadContent = () => (
  <p>
    Generally speaking, Bootstrap supports the latest versions of each major
    platform{"'"}s default browsers. Note that proxy browsers {"("}such as Opera
    Mini, Opera Mobile{"'"}s Turbo mode, UC Browser Mini, Amazon Silk{")"} are
    not supported.
  </p>
);

const MobileBrowserSupport = () => (
  <Table
    header={{
      cols: [
        {
          value: "Chrome",
        },
        {
          value: "Firefox",
        },
        {
          value: "Safari",
        },
        {
          value: "Android Browser & WebView",
        },
      ],
    }}
    rows={[
      {
        cols: [
          {
            value: <strong>Android</strong>,
          },
          {
            value: "Supported",
          },
          {
            value: (
              <span style={{ color: "rgba(33, 37, 41, 0.75)" }}>{"-"}</span>
            ),
          },
          {
            value: "v6.0+",
          },
        ],
      },
      {
        cols: [
          {
            value: <strong>iOS</strong>,
          },
          {
            value: "Supported",
          },
          {
            value: "Supported",
          },
          {
            value: (
              <span style={{ color: "rgba(33, 37, 41, 0.75)" }}>{"-"}</span>
            ),
          },
        ],
      },
    ]}
  />
);

export const MobileDevices = () => (
  <>
    <Title
      small
      id="mobile-devices"
      aria-label="Link to this section: Mobile devices"
    >
      Mobile devices
    </Title>
    <LeadContent />
    <MobileBrowserSupport />
  </>
);
