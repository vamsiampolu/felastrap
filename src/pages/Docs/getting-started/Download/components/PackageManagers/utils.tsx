export const CommonJsRequire = () => (
  <code>const bootstrap = require(&apos;bootstrap&apos;)</code>
);
export const EsmImport = () => (
  <code>import bootstrap from &apos;bootstrap&apos;</code>
);
export const BootstrapObject = () => <code>bootstrap</code>;
export const DistJsGlob = () => (
  <code>
    {"/"}js{"/"}dist{"/*."}js
  </code>
);
export const ManifestFile = () => <code>package{"."}json</code>;
