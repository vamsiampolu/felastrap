import { ClipboardButton } from "../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../Home/components/Content/components/CodeSnippet/Highlight";

export const CreateProjectSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: " mkdir my-project && cd my-project",
            },
            {
              token: "\n",
            },
          ],
        },

        {
          tokens: [
            {
              token: " npm init -y",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const InstallSnippet = ({ packages = [] }: { packages: string[] }) => (
  <CodeSnippet className="bd-code-snippet">
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: ` npm i --save-dev ${packages.join(" ")}`,
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const InstallBootstrapSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: " npm i --save bootstrap @popperjs/core",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const CreateFiles = ({ configFile = "" }: { configFile?: string }) => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: ` touch src/index.html src/js/main.js src/scss/styles.scss ${configFile}`,
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const ProjectStructure = ({
  configFile = "",
}: {
  configFile?: string;
}) => {
  const lines = [
    {
      tokens: [
        {
          token: "my-project/",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "├──",
        },
        {
          token: " ",
        },
        {
          token: "src/",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "├──",
        },
        {
          token: " ",
        },
        {
          token: "src/",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "│",
        },
        {
          token: "   ",
        },
        {
          token: "├──",
        },
        {
          token: " ",
        },
        {
          token: "js/",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "│",
        },
        {
          token: "   ",
        },
        {
          token: "│",
        },
        {
          token: "   ",
        },
        {
          token: "└──",
        },
        {
          token: " ",
        },
        {
          token: "main.js",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "│",
        },
        {
          token: "   ",
        },
        {
          token: "├──",
        },
        {
          token: " ",
        },
        {
          token: "scss/",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "│",
        },
        {
          token: "   ",
        },
        {
          token: "│",
        },
        {
          token: "   ",
        },
        {
          token: "└──",
        },
        {
          token: " ",
        },
        {
          token: "styles.scss",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "│",
        },
        {
          token: "   ",
        },
        {
          token: "└──",
        },
        {
          token: " ",
        },
        {
          token: "index.html",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "├──",
        },
        {
          token: " ",
        },
        {
          token: "package-lock.json",
        },
      ],
    },
  ];

  if (configFile) {
    lines.push(
      {
        tokens: [
          {
            token: "\n",
          },
        ],
      },
      {
        tokens: [
          {
            token: "├──",
          },
          {
            token: " ",
          },
          {
            token: "package.json",
          },
        ],
      },
      {
        tokens: [
          {
            token: "\n",
          },
        ],
      },
      {
        tokens: [
          {
            token: "└──",
          },
          {
            token: " ",
          },
          {
            token: configFile,
          },
        ],
      },
    );
  } else {
    lines.push({
      tokens: [
        {
          token: "└──",
        },
        {
          token: " ",
        },
        {
          token: "package.json",
        },
      ],
    });
  }

  return (
    <CodeSnippet>
      {" "}
      <ClipboardButton />
      <Highlight language="text" lines={lines} />
    </CodeSnippet>
  );
};

export const HtmlBoilerplate = ({ name }: { name: string }) => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="html"
      lines={[
        {
          tokens: [
            {
              token: "<!doctype html>",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "<",
            },
            {
              token: "html",
            },
            {
              token: " ",
            },
            {
              token: "lang",
            },
            {
              token: "=",
            },
            {
              token: '"en"',
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
            },
            {
              token: "<",
            },
            {
              token: "head",
            },

            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
            },
            {
              token: "<",
            },
            {
              token: "meta",
            },
            {
              token: " ",
            },
            {
              token: "charset",
            },
            {
              token: "=",
            },
            {
              token: '"utf8"',
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
            },
            {
              token: "<",
            },
            {
              token: "meta",
            },
            {
              token: " ",
            },
            {
              token: "name",
            },
            {
              token: "=",
            },
            {
              token: '"viewport"',
            },
            {
              token: " ",
            },
            {
              token: "content",
            },
            {
              token: "=",
            },
            {
              token: '"width=device-width, initial-scale=1"',
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
            },
            {
              token: "<",
            },
            {
              token: "title",
            },
            {
              token: ">",
            },

            {
              token: "Bootstrap w/ Webpack",
            },
            {
              token: "</",
            },
            {
              token: "title",
            },
            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
            },
            {
              token: "</",
            },
            {
              token: "head",
            },
            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
            },
            {
              token: "<",
            },
            {
              token: "body",
            },
            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
            },
            {
              token: "<",
            },
            {
              token: "div",
            },
            {
              token: " ",
            },
            {
              token: "class",
            },
            {
              token: "=",
            },
            {
              token: " ",
            },
            {
              token: '"container py-4 px-3 mx-auto"',
            },
            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "      ",
            },
            {
              token: "<",
            },
            {
              token: "h1",
            },
            {
              token: ">",
            },
            {
              token: `Hello, Bootstrap and ${name}!`,
            },
            {
              token: "</",
            },
            {
              token: "h1",
            },
            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "      ",
            },
            {
              token: "<",
            },
            {
              token: "button",
            },
            {
              token: " ",
            },
            {
              token: "class",
            },
            {
              token: "=",
            },
            {
              token: '"btn btn-primary"',
            },
            {
              token: ">",
            },

            {
              token: "Primary button",
            },
            {
              token: "</",
            },
            {
              token: "button",
            },
            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
            },
            {
              token: "</",
            },
            {
              token: "body",
            },
            {
              token: ">",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "</",
            },
            {
              token: "html",
            },
            {
              token: ">",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const NpmStart = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: " npm start",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const NpmScripts = ({
  start,
  build = "",
}: {
  start: string;
  build?: string;
}) => {
  const testScript = {
    tokens: [
      {
        token: "    ",
      },
      {
        token: '"test"',
      },
      {
        token: ":",
      },
      {
        token: " ",
      },
      {
        token: '"echo "Error: no test specified" && exit 1"',
      },
    ],
  };

  const startScript = {
    tokens: [
      {
        token: "    ",
      },
      {
        token: '"start"',
      },
      {
        token: ":",
      },
      {
        token: " ",
      },
      {
        token: `"${start}",`,
      },
    ],
  };

  const buildScript = {
    tokens: [
      {
        token: "    ",
      },
      {
        token: '"build"',
      },
      {
        token: ":",
      },
      {
        token: " ",
      },
      {
        token: `"${build}",`,
      },
    ],
  };

  const newLine = {
    tokens: [
      {
        token: "\n",
      },
    ],
  };

  const scripts = build
    ? [startScript, newLine, buildScript, newLine, testScript]
    : [startScript, newLine, testScript];

  const lines = [
    {
      tokens: [
        {
          token: "{",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "  ",
        },
        {
          token: "// ...",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "  ",
        },
        {
          token: '"scripts"',
        },
        {
          token: ":",
        },
        {
          token: " ",
        },
        {
          token: "{",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    ...scripts,
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "  ",
        },
        {
          token: "}",
        },
        {
          token: ",",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "  ",
        },
        {
          token: "// ...",
        },
      ],
    },
    {
      tokens: [
        {
          token: "\n",
        },
      ],
    },
    {
      tokens: [
        {
          token: "}",
        },
      ],
    },
  ];

  return (
    <CodeSnippet>
      {" "}
      <ClipboardButton />
      <Highlight language="js" lines={lines} />
    </CodeSnippet>
  );
};

export const ImportScssStyles = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: "// Import all of Bootstrap's CSS",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "@import",
            },
            {
              token: " ",
            },
            {
              token: '"bootstrap/scss/bootstrap";',
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const ImportStar = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "// Import all of Bootstrap's JS",
              // import * as bootstrap from 'bootstrap''
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "import",
            },
            {
              token: " ",
            },
            {
              token: "*",
            },
            {
              token: " ",
            },
            {
              token: "as",
            },
            {
              token: " ",
            },
            {
              token: "bootstrap",
            },
            {
              token: "from",
            },
            {
              token: " ",
            },
            {
              token: "'bootstrap'",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const ImportPlugins = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "import",
            },
            {
              token: " ",
            },
            {
              token: "Alert",
            },
            {
              token: " ",
            },
            {
              token: "from",
            },
            {
              token: " ",
            },
            {
              token: "'bootstrap/js/dist/alert'",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "// or, specify which plugins you need:",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "import",
            },
            {
              token: " ",
            },
            {
              token: "{",
            },
            {
              token: " ",
            },
            {
              token: "Tooltip",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "Toast",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "Popover",
            },
            {
              token: " ",
            },
            {
              token: "}",
            },
            {
              token: " ",
            },
            {
              token: "from",
            },
            {
              token: " ",
            },
            {
              token: "'bootstrap'",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
