import { Title } from "../../../components/Title";
import * as CodeSnippets from "../CodeSnippets";

const LeadContent = () => {
  const visuallyHidden = <code>.visually-hidden</code>;
  return (
    <p>
      Content which should be visually hidden, but remain accessible to
      assistive technologies such as screen readers, can be styled using the{" "}
      {visuallyHidden} class. This can be useful in situations where additional
      visual information or cues {"("}such as meaning denoted through the use of
      color{")"} need to also be conveyed to non{"-"}visual users.
    </p>
  );
};

const BodyContent = () => {
  const visuallyHiddenFocusable = <code>.visually-hidden-focusable</code>;
  const visuallyHidden = <code>.visually-hidden</code>;
  const srOnly = <code>.sr-only</code>;
  const srOnlyFocusable = <code>.sr-only-focusable</code>;

  return (
    <p>
      For visually hidden interactive controls, such as traditional {'"'}skip
      {'"'}
      links, use the {visuallyHiddenFocusable} class. This will ensure that the
      control becomes visible once focused {"("}for sighted keyboard users
      {")"}.{" "}
      <strong>
        Watch out, compared to the equivalent {srOnly} and {srOnlyFocusable}{" "}
        classes in past versions, Bootstrap 5{"'"}s {visuallyHiddenFocusable} is
        a standalone class, and must not be used in combination with the{" "}
        {visuallyHidden} class.
      </strong>
    </p>
  );
};

export const VisuallyHidden = () => {
  return (
    <>
      <Title
        small
        id="visually-hidden-content"
        aria-label="Link to this section: Visually hidden content"
      >
        Visually hidden content
      </Title>
      <LeadContent />
      <CodeSnippets.VisuallyHidden />
      <BodyContent />
      <CodeSnippets.VisuallyHiddenFocusable />
    </>
  );
};
