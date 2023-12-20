import { PopperLink, SourceMapsLink } from "../../../../components/Links";
import {
  BundleJsFile,
  BundleMinJsFile,
  FileGlob,
  MinFileGlob,
  SourceMapGlob,
} from "./utils";

export const BodyContent = () => (
  <p>
    This is the most basic form of Bootstrap: compiled files for quick drop-in
    usage in nearly any web project. We provide compiled CSS and JS (
    <FileGlob />
    ), as well as compiled and minified CSS and JS (<MinFileGlob />){"."}
    <SourceMapsLink /> (<SourceMapGlob />) are available for use with certain
    browsers{"'"} developer tools. Bundled JS files (<BundleJsFile /> and
    minified <BundleMinJsFile />) include <PopperLink />
    {"."}
  </p>
);
