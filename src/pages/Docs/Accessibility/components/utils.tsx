import { Link } from "../../../../components/Link/Link";

const WCAG = () => (
  <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>
);
const WAI = () => <abbr title="Web Accessibility Initiative">WAI</abbr>;
const ARIA = () => (
  <abbr title="Accessible Rich Internet Applications">ARIA</abbr>
);

export const WCAG2pt1 = () => (
  <Link href="https://www.w3.org/TR/WCAG/">
    <WCAG /> 2.1
  </Link>
);

export const Section508 = () => (
  <Link href="https://www.section508.gov/">Section 508</Link>
);

export const WaiARIAGuidelines = () => (
  <Link href="https://www.w3.org/WAI/standards-guidelines/aria/">
    <WAI />
    {"-"}
    <ARIA />
  </Link>
);

export const WcagContrastMinimum = () => (
  <Link href="https://www.w3.org/TR/WCAG/#contrast-minimum">
    <WCAG /> 2.1 text color contrast ratio of 4.5:1
  </Link>
);

export const WcagNonTextContrast = () => (
  <Link href="https://www.w3.org/TR/WCAG/#non-text-contrast">
    <WCAG /> 2{"."}1 non{"-"}text color contrast ratio of 3{":"}1
  </Link>
);

export const PrefersReducedMotion = () => (
  <Link href="https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion">
    <code>
      prefers{"-"}reduced{"-"}motion
    </code>
    media feature
  </Link>
);

export const A11YProject = () => (
  <Link href="https://www.a11yproject.com/">The A11Y Project</Link>
);
export const MDNA11yDocs = () => (
  <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
    MDN accessibility documentation
  </Link>
);

export const Tenon = () => (
  <Link href="https://tenon.io/">Tenon.io Accessibility Checker</Link>
);
export const ColorContrastAnalyzer = () => (
  <Link href="https://www.tpgi.com/color-contrast-checker/">
    Color Contrast Analyser (CCA)
  </Link>
);

export const WcagFull = () => (
  <Link href="">
    Web Content Accessibility Guidelines {"("}WCAG{")"} 2.1
  </Link>
);

export const HtmlCodeSniffer = () => (
  <Link href="https://github.com/squizlabs/HTML_CodeSniffer">
    {'"'}HTML Codesniffer{'"'} bookmarklet for identifying accessibility issues
  </Link>
);

export const A11yInsights = () => (
  <Link href="https://accessibilityinsights.io/">
    Microsoft Accessibility Insights
  </Link>
);

export const AxeTestingTools = () => (
  <Link href="https://www.deque.com/axe/">Deque Axe testing tools</Link>
);
export const W3WaiFundamentals = () => (
  <Link href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
    Introduction to Web Accessibility
  </Link>
);
