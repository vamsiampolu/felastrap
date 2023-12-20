import { ReactNode } from "react";
import { Page, PageProps } from "../Page";
import { TableOfContents } from "./TableOfContents";
import { ContentWrapper } from "../ContentWrapper";
import { Tldr } from "./Tldr";
import { Setup } from "./Setup/Setup";
import { ProjectStructure } from "./ProjectStructure";
import { Configure } from "./Configure/Configure";
import { ImportBootstrap } from "./ImportBootstrap/ImportBootstrap";
import { Ruler } from "../Ruler";
import { Feedback } from "../Feedback";
import { HeroImage } from "./HeroImage";

export type GuidePageProps = Omit<PageProps, "toc"> & {
  heroImage: string;
  heroImage2x: string;
  name: string;
  toc?: ReactNode;
  example: ReactNode;
  playground: ReactNode;
  packages: string[];
  installInstructions?: ReactNode;
  additionalSteps?: ReactNode;
  configFile?: string;
  htmlBoilerplateInfo?: ReactNode;
  demoImage: ReactNode;
  start: string;
  build?: string;
  additionalConfiguration?: ReactNode;
};

export const GuidePage = ({
  title,
  description,
  name,
  toc,
  example,
  playground,
  packages,
  installInstructions,
  additionalSteps,
  configFile = "",
  htmlBoilerplateInfo,
  demoImage,
  start,
  build = "",
  heroImage,
  heroImage2x,
  additionalConfiguration,
  children,
}: GuidePageProps) => {
  const tocWithChildren = <TableOfContents name={name}>{toc}</TableOfContents>;
  return (
    <Page title={title} description={description} toc={tocWithChildren}>
      <ContentWrapper>
        <HeroImage src={heroImage} src2x={heroImage2x} />
        <Tldr example={example} playground={playground} />
        <Setup
          name={name}
          packages={packages}
          installInstructions={installInstructions}
          additionalSteps={additionalSteps}
        />
        <ProjectStructure name={name} configFile={configFile} />
        <Configure
          name={name}
          htmlBoilerplateInfo={htmlBoilerplateInfo}
          demoImage={demoImage}
          start={start}
          build={build}
          additionalConfiguration={additionalConfiguration}
        />
        <ImportBootstrap name={name} />
        {children}
        <Ruler />
        <Feedback />
      </ContentWrapper>
    </Page>
  );
};
