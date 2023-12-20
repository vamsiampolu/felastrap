import { Link } from "../../../../../components/Link/Link";

export const DistJsGlob = () => (
  <code>
    js{"/"}dist{"/*."}js
  </code>
);
export const BootstrapJs = () => <code>bootstrap{"."}js</code>;
export const BootstrapMinJs = () => (
  <code>
    bootstrap{"."}min{"."}js
  </code>
);

export const NextJsExamples = () => (
  <Link href="https://github.com/twbs/examples/tree/main/react-nextjs">
    twbs{"/"}examples repository
  </Link>
);

export const NextJsExampleStackblitz = () => (
  <Link href="https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx">
    open the example in StackBlitz
  </Link>
);

export const ReactBootstrapLink = () => (
  <Link href="https://react-bootstrap.github.io/">React Bootstrap</Link>
);
export const VueBootstrapLink = () => (
  <Link href="https://bootstrap-vue.org/">BootstrapVue</Link>
);
export const VueBootstrapNextLink = () => (
  <Link href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/">
    BootstrapVueNext
  </Link>
);
export const NgBootstrapLink = () => (
  <Link href="https://ng-bootstrap.github.io/">ng{"-"}bootstrap</Link>
);

export const BootstrapEsmExamples = () => (
  <Link href="https://github.com/twbs/examples/tree/main/sass-js-esm">
    twbs/examples repository
  </Link>
);
export const BootstrapEsmStackblitz = () => (
  <Link href="https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html">
    open the example in StackBlitz
  </Link>
);
export const BrowserSupportsEsm = () => (
  <Link href="https://caniuse.com/es6-module">
    targeted browsers support it
  </Link>
);

export const BrowserSupportsImportmap = () => (
  <Link href="https://caniuse.com/?search=importmap">targeted browsers</Link>
);

export const EsModuleShims = () => (
  <Link href="https://github.com/guybedford/es-module-shims">
    es-module-shims
  </Link>
);

export const PopperJs = () => <Link href="https://popper.js.org/">Popper</Link>;
export const ValidSelectors = () => (
  <Link href="https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier">
    valid selectors
  </Link>
);

export const NoscriptLink = () => (
  <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript">
    <code>
      {"<"}noscript{">"}
    </code>
  </Link>
);

export const SelectorsLink = () => <Link href="#selectors">CSS selector</Link>;
