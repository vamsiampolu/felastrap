import { GuidePage } from "../components/Guide/GuidePage";
import vite from "../../../../assets/bootstrap-vite.png";
import vite2x from "../../../../assets/bootstrap-vite@2x.png";
import demo from "../../../../assets/vite-dev-server.png";
import { Image } from "../../../components/Image/Image";
import { Link } from "../../../components/Link/Link";
import { ClipboardButton } from "../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../Home/components/Content/components/CodeSnippet/Highlight";

const ViteExample = () => (
  <Link href="https://github.com/twbs/examples/tree/main/vite">
    twbs/examples repository
  </Link>
);

const StackBlitzViteExample = () => (
  <Link href="https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index.html">
    open the example in StackBlitz
  </Link>
);

const InstallSass = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: " npm i --save-dev sass",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

const DevServerImage = () => (
  <Image fluid src={demo} alt="Vite dev server running" />
);

const AdditionalSteps = () => (
  <li>
    <p>
      <strong>Install additional dependency.</strong> In addition to Vite and
      Bootstrap, we need another dependency {"("}Sass{")"} to properly import
      and bundle Bootstrap{"'"}s CSS.
    </p>
    <InstallSass />
  </li>
);

const VitePage = () => (
  <GuidePage
    title="Bootstrap and Vite"
    description="The official guide for how to include and bundle Bootstrap's CSS and JavaScript in your project using Vite."
    heroImage={vite}
    heroImage2x={vite2x}
    name="vite"
    example={<ViteExample />}
    playground={<StackBlitzViteExample />}
    packages={["vite"]}
    additionalSteps={<AdditionalSteps />}
    configFile="vite.config.js"
    demoImage={<DevServerImage />}
    start="vite"
  />
);

export default VitePage;
