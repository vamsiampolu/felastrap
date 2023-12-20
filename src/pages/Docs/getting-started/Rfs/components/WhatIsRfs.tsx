import { Title } from "../../../components/Title";
import { links, code } from "./utils";

export const WhatIsRfs = () => {
  return (
    <>
      <Title id="what-is-rfs" aria-label="Link to this section: What is RFS?">
        What is RFS?
      </Title>
      <p>
        Bootstrap{"'"}s side project {<links.RFS />} is a unit resizing engine
        which was initially developed to resize font sizes {"("}hence its
        abbreviation for Responsive Font Sizes{")"}. Nowadays RFS is capable of
        rescaling most CSS properties with unit values like {<code.Margin />},{" "}
        {<code.Padding />}, {code.borderRadius}, or even {code.boxShadow}.
      </p>
      <p>
        The mechanism automatically calculates the appropriate values based on
        the dimensions of the browser viewport. It will be compiled into{" "}
        {code.calc} functions with a mix of {code.rem} and viewport units to
        enable the responsive scaling behavior.
      </p>
    </>
  );
};
