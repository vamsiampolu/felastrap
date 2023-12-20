import { Link } from "../../../../../../../components/Link/Link";

export const Description = () => (
  <p>
    <strong>Include Bootstrap{"'"}s CSS and JS.</strong> Place the{" "}
    <code>&lt;link&gt;</code> tag in the <code>{"<head>"}</code> for our CSS,
    and the <code>&lt;script&gt;</code> tag for our JavaScript bundle {"("}
    including Popper for positioning dropdowns, poppers, and tooltips{")"}{" "}
    before the closing <code>{"</body>"}</code>. Learn more about our{" "}
    <Link href="#cdn-links">CDN links</Link>.
  </p>
);
