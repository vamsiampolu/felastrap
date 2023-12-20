import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

export type Story = StoryObj<typeof Table>;
const meta: Meta<typeof Table> = {
  title: "components/Table",
  component: Table,
};

export default meta;

export const Default: Story = {
  args: {
    bordered: false,
    borderless: false,
    variant: "default",
    striped: false,
    hover: false,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Striped: Story = {
  args: {
    striped: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const PrimaryStriped: Story = {
  args: {
    striped: true,
    variant: "primary",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const SecondaryStriped: Story = {
  args: {
    striped: true,
    variant: "secondary",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const SuccessStriped: Story = {
  args: {
    variant: "success",
    striped: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const InfoStriped: Story = {
  args: {
    striped: true,
    variant: "info",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const WarningStriped: Story = {
  args: {
    striped: true,
    variant: "warning",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const DangerStriped: Story = {
  args: {
    striped: true,
    variant: "danger",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Hover: Story = {
  args: {
    striped: false,
    hover: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const HoverPrimary: Story = {
  args: {
    striped: false,
    hover: true,
    variant: "primary",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const HoverSecondary: Story = {
  args: {
    striped: false,
    hover: true,
    variant: "secondary",
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const HoverInfo: Story = {
  args: {
    variant: "info",
    striped: false,
    hover: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const HoverSuccess: Story = {
  args: {
    variant: "success",
    striped: false,
    hover: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const HoverWarning: Story = {
  args: {
    variant: "warning",
    striped: false,
    hover: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const HoverDanger: Story = {
  args: {
    variant: "danger",
    striped: false,
    hover: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Bordered: Story = {
  args: {
    bordered: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Borderless: Story = {
  args: {
    borderless: true,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};

export const Active: Story = {
  args: {
    bordered: false,
    borderless: false,
    variant: "default",
    striped: false,
    hover: false,
    header: {
      cols: [
        {
          value: "#",
        },
        {
          value: "First",
        },
        {
          value: "Last",
        },
        {
          value: "Handle",
        },
      ],
    },
    rows: [
      {
        active: true,
        cols: [
          {
            rowHeader: true,
            value: "1",
          },
          {
            rowHeader: false,
            value: "Mark",
          },
          {
            rowHeader: false,
            value: "Otto",
          },
          {
            rowHeader: false,
            value: "@mdo",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "2",
          },
          {
            rowHeader: false,
            value: "Jacob",
          },
          {
            active: true,
            rowHeader: false,
            value: "Thornton",
          },
          {
            rowHeader: false,
            value: "@fat",
          },
        ],
      },
      {
        cols: [
          {
            rowHeader: true,
            value: "3",
          },
          {
            rowHeader: false,
            value: "Larry Cole Bird",
            colSpan: 2,
          },
          {
            rowHeader: false,
            value: "@twitter",
          },
        ],
      },
    ],
  },
};
