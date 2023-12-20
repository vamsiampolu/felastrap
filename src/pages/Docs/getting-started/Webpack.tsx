import heroImage from "../../../assets/bootstrap-webpack.png";
import heroImage2x from "../../../assets/bootstrap-webpack@2x.png";
import { Link } from "../../../components/Link/Link";
import { ClipboardButton } from "../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../Home/components/Content/components/CodeSnippet/Highlight";
import { GuidePage } from "../components/Guide/GuidePage";
import { Title } from "../components/Title";
import { TocListItem } from "../components/TocList/TocListItem";
import { TocNestedListItem } from "../components/TocList/TocNestedListItem";

import demo from "../../../assets/webpack-dev-server-bootstrap.png";
import { Image } from "../../../components/Image/Image";

const WebpackExample = () => (
  <Link href="https://github.com/twbs/examples/tree/main/webpack">
    the Webpack example project
  </Link>
);

const BuildChanges = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="text"
      lines={[
        {
          tokens: [
            {
              token: "--- a/dist/index.html",
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
              token: "+++ b/dist/index.html",
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
              token: "@@ -3,6 +3,7 @@",
            },
          ],
        },
        {
          tokens: [
            {
              token: "<head>",
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
              token: '<meta charset="utf-8">',
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
              token:
                '<meta name="viewport" content="width=device-width, initial-scale=1">',
            },
          ],
        },
        {
          tokens: [
            {
              token: '+    <link rel="stylesheet" href="./main.css">',
            },
          ],
        },
        {
          tokens: [
            {
              token: "<title>Bootstrap w/ Webpack</title>",
            },
          ],
        },
        {
          tokens: [
            {
              token: "   </head>",
            },
          ],
        },
        {
          tokens: [
            {
              token: "   <body>",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

const ExtractSvgSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="text"
      lines={[
        {
          tokens: [
            {
              token: "--- a/webpack.config.js",
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
              token: "--- a/webpack.config.js",
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
              token: "@@ -23,6 +23,14 @@ module.exports = {",
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
              token: "   ",
            },
            {
              token: "module",
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
        {
          tokens: [
            {
              token: "     ",
            },
            {
              token: "rules",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "[",
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
              token: "+      {",
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
              token: "+        mimetype: 'image/svg+xml',",
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
              token: "+        scheme: 'data',",
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
              token: "+        type: 'asset/resource',",
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
              token: "+        generator: {",
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
              token: "+          filename: 'icons/[hash].svg'",
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
              token: "+        }",
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
              token: "+      },",
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
              token: "       {",
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
              token: "         test: /.(scss)$/,",
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
              token: "         use: [",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

const WebpackConfigChanges = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="text"
      lines={[
        {
          tokens: [
            {
              token: "--- a/webpack.config.js",
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
              token: "+++ b/webpack.config.js",
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
              token: "@@ -3,6 +3,7 @@",
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
              token: " const path = require('path')",
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
              token: " const autoprefixer = require('autoprefixer')",
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
              token:
                " const HtmlWebpackPlugin = require('html-webpack-plugin')",
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
              token:
                "+const miniCssExtractPlugin = require('mini-css-extract-plugin')",
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
              token: " module.exports = {",
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
              token: "   mode: 'development',",
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
              token: "@@ -17,7 +18,8 @@ module.exports = {",
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
              token: "     hot: true",
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
              token: "   },",
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
              token: "   plugins: [",
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
              token:
                "-    new HtmlWebpackPlugin({ template: './src/index.html' })",
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
              token:
                "+    new HtmlWebpackPlugin({ template: './src/index.html' }),",
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
              token: "+    new miniCssExtractPlugin()",
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
              token: "   ],",
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
              token: "   module: {",
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
              token: "   module: {",
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
              token: "     rules: [",
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
              token: "@@ -25,8 +27,8 @@ module.exports = {",
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
              token: "         test: /.(scss)$/,",
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
              token: "         use: [",
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
              token: "           {",
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
              token:
                "-            // Adds CSS to the DOM by injecting a `<style>` tag",
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
              token: "-            loader: 'style-loader'",
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
              token:
                "+            // Extracts CSS for each JS file that includes CSS",
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
              token: "+            loader: miniCssExtractPlugin.loader",
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
              token: "           },",
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
              token: "           {",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

const InstallCssExtractPlugin = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: " npm install --save-dev mini-css-extract-plugin",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

const ExtractingSvg = () => {
  const runBuild = <code>npm run build</code>;
  const builtIcons = <code>dist/icons</code>;
  const dataUris = (
    <>
      <code>data:</code> URIs
    </>
  );

  return (
    <>
      <Title
        small
        id="extracting-svg-files"
        aria-label="Link to this section: Extracting SVG files"
      >
        Extracting SVG files
      </Title>
      <p>
        Bootstrap&apos;s CSS includes multiple references to SVG files via
        inline {dataUris}. If you define a Content Security Policy for your
        project that blocks {dataUris} for images, then these SVG files will not
        load. You can get around this problem by extracting the inline SVG files
        using Webpack{"'"}s asset modules feature.
      </p>
      <p>Configure Webpack to extract inline SVG files like this{":"}</p>
      <ExtractSvgSnippet />
      <p>
        After running {runBuild} again, you{"'"}ll find the SVG files extracted
        into {builtIcons} and properly referenced from CSS.
      </p>
    </>
  );
};

const ExtractingCss = () => {
  const runBuild = <code>npm run build</code>;
  const builtCss = <code>dist/main.css</code>;
  const builtJs = <code>src/js/main.js</code>;
  const builtPage = <code>dist/index.html</code>;
  const minCssExtractPlugin = <code>mini-css-extract-loader</code>;

  const styleLoader = <code>style-loader</code>;

  return (
    <>
      <Title
        small
        id="extracting-css"
        aria-label="Link to this section: Extracting CSS"
      >
        Extracting CSS
      </Title>
      <p>
        The {styleLoader} we configured above conveniently emits CSS into the
        bundle so that manually loading a CSS file in {builtPage} isn{"'"}t
        necessary. This approach may not work with a strict Content Security
        Policy, however, and it may become a bottleneck in your application due
        to the large bundle size.
      </p>
      <p>
        To separate the CSS so that we can load it directly from {builtPage},
        use the {minCssExtractPlugin} Webpack plugin.
      </p>
      <p>First, install the plugin{":"}</p>

      <InstallCssExtractPlugin />
      <p>
        Then instantiate and use the plugin in the Webpack configuration{":"}
      </p>

      <WebpackConfigChanges />
      <p>
        After running {runBuild} again, there will be a new file {builtCss},
        which will contain all of the CSS imported by {builtJs}. If you view{" "}
        {builtPage} in your browser now, the style will be missing, as it is now
        in {builtCss}. You can include the generated CSS in {builtPage} like
        this{":"}
      </p>

      <BuildChanges />
    </>
  );
};

const ProductionOptimization = () => {
  return (
    <>
      <Title
        id="production-optimizations"
        aria-label="Link to this section: Production optimizations"
      >
        Production optimizations
      </Title>
      <p>
        Depending on your setup, you may want to implement some additional
        security and speed optimizations useful for running the project in
        production. Note that these optimizations are not applied on{" "}
        <WebpackExample /> and are up to you to implement.
      </p>

      <ExtractingCss />
      <ExtractingSvg />
    </>
  );
};

const Example = () => (
  <Link href="https://github.com/twbs/examples/tree/main/webpack">
    twbs/examples repository
  </Link>
);

const Playground = () => (
  <Link href="https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html">
    open the example in StackBlitz
  </Link>
);

const InstallInstructions = () => (
  <p>
    Next we need to install our Webpack development dependencies: webpack for
    the core of Webpack, webpack-cli so we can run Webpack commands from the
    terminal, and webpack-dev-server so we can run a local development server.
    Additionally, we{"'"}ll install html-webpack-plugin to be able to store our
    index.html in src directory instead of the default dist one
  </p>
);

export const Snippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token:
                " npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const InstallAdditionalDependencies = () => (
  <li>
    <p>
      <strong>Install additional dependencies.</strong> In addition to Webpack
      and Bootstrap, we need a few more dependencies to properly import and
      bundle Bootstrap{"'"}s CSS and JS with Webpack. These include Sass, some
      loaders, and Autoprefixer.
    </p>
    <Snippet />
  </li>
);

const DevServerImage = () => {
  return <Image fluid src={demo} alt="Webpack dev server running" />;
};

const Toc = () => (
  <TocNestedListItem
    href="#production-optimizations"
    label="Production optimizations"
  >
    <TocListItem href="#extracting-css">Extracting CSS</TocListItem>
    <TocListItem href="#extracting-svg-files">Extracting SVG files</TocListItem>
  </TocNestedListItem>
);

const WebpackPage = () => (
  <GuidePage
    name="Webpack"
    build="webpack build --mode=production"
    start="webpack serve"
    example={<Example />}
    playground={<Playground />}
    heroImage={heroImage}
    heroImage2x={heroImage2x}
    title="Bootstrap and Webpack"
    description="The official guide for how to include and bundle Bootstrap's CSS and JavaScript in your project using Webpack."
    installInstructions={<InstallInstructions />}
    additionalSteps={<InstallAdditionalDependencies />}
    demoImage={<DevServerImage />}
    configFile="webpack.config.js"
    toc={<Toc />}
    packages={[
      "webpack",
      "webpack-cli",
      "webpack-dev-server",
      "html-webpack-plugin",
    ]}
  >
    <ProductionOptimization />
  </GuidePage>
);

export default WebpackPage;
