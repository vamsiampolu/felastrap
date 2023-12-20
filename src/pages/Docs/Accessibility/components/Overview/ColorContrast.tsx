import { Title } from "../../../components/Title";
import * as links from "../utils";

export const ColorContrast = () => (
  <>
    <Title
      small
      id="color-contrast"
      aria-label="Link to this section: Color contrast"
    >
      Color contrast
    </Title>
    <p>
      Some combinations of colors that currently make up Bootstrap{"'"}s default
      palette{"—"}used throughout the framework for things such as button
      variations, alert variations, form validation indicators{"—"}may lead to
      <em>insufficient</em> color contrast {"("}below the recommended{" "}
      <links.WcagContrastMinimum /> and the <links.WcagNonTextContrast /> {")"},
      particularly when used against a light background. Authors are encouraged
      to test their specific uses of color and, where necessary, manually modify
      {"/"}extend these default colors to ensure adequate color contrast ratios.
    </p>
  </>
);
