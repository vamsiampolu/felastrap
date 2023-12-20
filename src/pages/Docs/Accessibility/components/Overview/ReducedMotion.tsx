import { Title } from "../../../components/Title";
import * as links from "../utils";

const LeadContent = () => (
  <p>
    Bootstrap includes support for the <links.PrefersReducedMotion />
    {"."} In browsers{"/"}environments that allow the user to specify their
    preference for reduced motion, most CSS transition effects in Bootstrap{" "}
    {"("}for instance, when a modal dialog is opened or closed, or the sliding
    animation in carousels{")"} will be disabled, and meaningful animations{" "}
    {"("}such as spinners{")"} will be slowed down.
  </p>
);

const BodyContent = () => {
  const prefersReducedMotion = <code>prefers-reduced-motion</code>;
  const noPreference = <code>prefers-reduced-motion: no-preference</code>;
  const scrollBehaviour = <code>scroll-behavior</code>;

  return (
    <p>
      On browsers that support {prefersReducedMotion}, and where the user has{" "}
      <em>not</em> explicitly signaled that they{"'"}d prefer reduced motion{" "}
      {"("}i.e. where
      {noPreference}
      {")"}, Bootstrap enables smooth scrolling using the
      {scrollBehaviour} property.
    </p>
  );
};

export const ReducedMotion = () => {
  return (
    <>
      <Title
        small
        id="reduced-motion"
        aria-label="Link to this section: Reduced motion"
      >
        Reduced motion
      </Title>
      <LeadContent />
      <BodyContent />
    </>
  );
};
