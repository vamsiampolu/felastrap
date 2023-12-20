import { Title } from "../../../../components/Title";
import { Subtitle } from "./Subtitle";
import { SupportedVersions } from "./SupportedVersions";
import { FirefoxESR } from "./utils";

const FirefoxSupport = () => (
  <p>
    For Firefox, in addition to the latest normal stable release, we also
    support the latest <FirefoxESR /> version of Firefox.
  </p>
);

const UnofficialSupport = () => (
  <p>
    Unofficially, Bootstrap should look and behave well enough in Chromium and
    Chrome for Linux, and Firefox for Linux, though they are not officially
    supported{"."}
  </p>
);

export const DesktopBrowsers = () => (
  <>
    <Title
      small
      id="desktop-browsers"
      aria-label="Link to this section: Desktop browsers"
    >
      Desktop browsers
    </Title>
    <Subtitle />
    <SupportedVersions />
    <FirefoxSupport />
    <UnofficialSupport />
  </>
);
