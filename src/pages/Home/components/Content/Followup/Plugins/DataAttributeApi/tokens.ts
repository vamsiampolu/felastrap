const createListItem = () => [
  {
    tokens: [
      {
        token: "    ",
        isAttrValue: false,
      },
      { token: "<", isAttrValue: false },
      { token: "li", isAttrValue: false },
      { token: ">", isAttrValue: false },
    ],
  },
  {
    tokens: [{ token: "\n", isAttrValue: false }],
  },
  {
    tokens: [
      { token: "      ", isAttrValue: false },
      { token: "<", isAttrValue: false },
      { token: "button", isAttrValue: false },
      { token: " ", isAttrValue: false },
      { token: "class", isAttrValue: false },
      { token: "=", isAttrValue: false },
      { token: '"dropdown-item"', isAttrValue: true },
      { token: " ", isAttrValue: false },
      { token: "type", isAttrValue: false },
      { token: "=", isAttrValue: false },
      { token: '"button"', isAttrValue: true },
      { token: ">", isAttrValue: false },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      { token: "        ", isAttrValue: false },
      {
        token: "Dropdown item",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      { token: "      ", isAttrValue: false },
      { token: "</", isAttrValue: false },
      { token: "button", isAttrValue: false },
      { token: ">", isAttrValue: false },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      { token: "    ", isAttrValue: false },
      { token: "</", isAttrValue: false },
      { token: "li", isAttrValue: false },
      { token: ">", isAttrValue: false },
    ],
  },
];

const createNewline = () => ({
  tokens: [
    {
      token: "\n",
      isAttrValue: false,
    },
  ],
});

const createButton = () => [
  {
    tokens: [
      {
        token: "  ",
        isAttrValue: false,
      },
      {
        token: "<",
        isAttrValue: false,
      },
      {
        token: "button",
        isAttrValue: false,
      },
      {
        token: " ",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "    ",
        isAttrValue: false,
      },
      {
        token: "class",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"btn btn-primary dropdown-toggle"',
        isAttrValue: true,
      },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "    ",
        isAttrValue: false,
      },
      {
        token: "type",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"button"',
        isAttrValue: true,
      },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "    ",
        isAttrValue: false,
      },
      {
        token: "data-bs-toggle",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"dropdown"',
        isAttrValue: true,
      },
    ],
  },
  {
    tokens: [
      {
        token: "\n",
        isAttrValue: false,
      },
    ],
  },
  {
    tokens: [
      {
        token: "    ",
        isAttrValue: false,
      },
      {
        token: "aria-expanded",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"false"',
        isAttrValue: true,
      },
      {
        token: ">",
        isAttrValue: false,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "    ",
        isAttrValue: false,
      },
      {
        token: "Dropdown",
        isAttrValue: false,
      },
      {
        token: "\n",
        isAttrValue: false,
      },
      {
        token: "  ",
        isAttrValue: false,
      },
      {
        token: "</",
        isAttrValue: false,
      },
      {
        token: "button",
        isAttrValue: false,
      },
      {
        token: ">",
        isAttrValue: false,
      },
    ],
  },
];

const createListOpen = () => [
  {
    tokens: [
      {
        token: "  ",
        isAttrValue: false,
      },
      {
        token: "<",
        isAttrValue: false,
      },
      {
        token: "ul",
        isAttrValue: false,
      },
      {
        token: " ",
        isAttrValue: false,
      },
      {
        token: "class",
        isAttrValue: false,
      },
      {
        token: "=",
        isAttrValue: false,
      },
      {
        token: '"dropdown-menu"',
        isAttrValue: true,
      },
      {
        token: ">",
        isAttrValue: false,
      },
    ],
  },
];

const createListClose = () => [
  {
    tokens: [
      {
        token: "  ",
        isAttrValue: false,
      },
      {
        token: "</",
        isAttrValue: false,
      },
      {
        token: "ul",
        isAttrValue: false,
      },
      {
        token: ">",
        isAttrValue: false,
      },
    ],
  },
];

const createDropdownDivOpen = () => ({
  tokens: [
    {
      token: "<",
      isAttrValue: false,
    },
    {
      token: "div",
      isAttrValue: false,
    },
    {
      token: " ",
      isAttrValue: false,
    },
    {
      token: "class",
      isAttrValue: false,
    },
    {
      token: "=",
      isAttrValue: false,
    },
    {
      token: '"dropdown"',
      isAttrValue: true,
    },
    {
      token: ">",
      isAttrValue: false,
    },
  ],
});

const createDropdownDivClose = () => ({
  tokens: [
    {
      token: "</",
      isAttrValue: false,
    },
    {
      token: "div",
      isAttrValue: false,
    },
    {
      token: ">",
      isAttrValue: false,
    },
  ],
});

export {
  createListItem,
  createNewline,
  createButton,
  createDropdownDivClose,
  createDropdownDivOpen,
  createListOpen,
  createListClose,
};
