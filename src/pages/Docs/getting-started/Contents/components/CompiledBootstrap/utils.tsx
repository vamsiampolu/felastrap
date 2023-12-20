const FileGlob = () => <code>bootstrap{".*"}</code>;
const MinFileGlob = () => <code>bootstrap.min{".*"}</code>;
const SourceMapGlob = () => <code>bootstrap{".*."}map</code>;
const BundleJsFile = () => (
  <code>
    bootstrap{"."}bundle{"."}js
  </code>
);
const BundleMinJsFile = () => (
  <code>
    bootstrap{"."}bundle{"."}min{"."}js
  </code>
);

export { FileGlob, MinFileGlob, SourceMapGlob, BundleJsFile, BundleMinJsFile };
