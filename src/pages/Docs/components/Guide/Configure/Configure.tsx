// import { Title } from "../../../../components/Title";
// import { AddHtmlBoilerplate } from "./AddHtmlBoilerplate";
// import { AddNpmScripts } from "./AddNpmScripts";
// import { Start{name} } from "./Start{name}";
import { PropsWithChildren, ReactNode } from "react";
import { HtmlBoilerplate } from "./HtmlBoilerplate";
import { Start } from "./Start";
import { Title } from "../../Title";
import { AddNpmScripts } from "./AddNpmScripts";

export type ConfigureProps = PropsWithChildren<{
  name: string;
  htmlBoilerplateInfo?: ReactNode;
  demoImage: ReactNode;
  start: string;
  build?: string;
  additionalConfiguration?: ReactNode;
}>;

const Steps = ({
  name,
  htmlBoilerplateInfo,
  demoImage,
  start,
  build = "",
  children,
}: ConfigureProps) => (
  <ol>
    <HtmlBoilerplate name={name}>{htmlBoilerplateInfo}</HtmlBoilerplate>
    <AddNpmScripts name={name} start={start} build={build} />
    <Start name={name} image={demoImage} />
    {children}
  </ol>
);

export const Configure = ({
  name,
  htmlBoilerplateInfo,
  demoImage,
  start,
  build = "",
  additionalConfiguration,
}: ConfigureProps) => {
  return (
    <>
      <Title
        id={`configure-${name}`}
        aria-label={`Link to this section: Configure ${name}`}
      >
        Configure {name}
      </Title>
      <p>
        With dependencies installed and our project folder ready for us to start
        coding, we can now configure {name} and run our project locally. {name}
        itself requires no configuration file by design, but we do need an npm
        script and an HTML file to start our server.
      </p>
      <Steps
        name={name}
        htmlBoilerplateInfo={htmlBoilerplateInfo}
        demoImage={demoImage}
        start={start}
        build={build}
      >
        {additionalConfiguration}
      </Steps>
      <p>
        In the next and final section to this guide, we{"'"}ll import all of
        Bootstrap{"'"}s CSS and JavaScript.
      </p>
    </>
  );
};
