import heroImage from "../../../../assets/bootstrap-parcel.png";
import heroImage2x from "../../../../assets/bootstrap-parcel@2x.png";
import { Link } from "../../../components/Link/Link";
import { GuidePage } from "../components/Guide/GuidePage";

import demo from "../../../assets/parcel-dev-server.png";
import { Image } from "../../../components/Image/Image";

const DevServerImage = () => (
  <Image fluid src={demo} alt="Parcel dev server running" />
);

/*
heroImage: string;
  heroImage2x: string;
  name: string;
  toc?: ReactNode;
  example: ReactNode;
  playground: ReactNode;
  packages: string[];
  installInstructions?: ReactNode;
  additionalSteps?: ReactNode;
  configFile?: string;
  htmlBoilerplateInfo?: ReactNode;
  demoImage: ReactNode;
  start: string;
  build?: string;
*/

const SassPlugin = () => (
  <Link href="https://parceljs.org/languages/sass/">Sass Parcel plugin</Link>
);

const InstallSassPlugin = () => (
  <code>npm i --save-dev @parcel/transformer-sass</code>
);

const ParcelExample = () => (
  <Link href="https://github.com/twbs/examples/tree/main/parcel">
    twbs/examples repository
  </Link>
);

const StackBlitzParcelExample = () => (
  <Link href="https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index.html">
    but not run it because Parcel isn{"'"}t currently supported there.
  </Link>
);

const InstallInstructions = () => (
  <p>
    Parcel will automatically detect we{"'"}re using Sass and install the{" "}
    <SassPlugin /> to support it. However, if you wish, you can also manually
    run <InstallSassPlugin />.
  </p>
);

const Parcel = () => (
  <GuidePage
    title="Bootstrap and Parcel"
    description="The official guide for how to include and bundle Bootstrap’s CSS and JavaScript in your project using Parcel."
    name="Parcel"
    example={<ParcelExample />}
    playground={<StackBlitzParcelExample />}
    heroImage={heroImage}
    heroImage2x={heroImage2x}
    packages={["parcel"]}
    installInstructions={<InstallInstructions />}
    demoImage={<DevServerImage />}
    start="parcel serve src/index.html --public-url / --dist-dir dist"
  />
);

export default Parcel;
