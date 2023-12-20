import { PropsWithChildren, ReactNode } from "react";
import { Title } from "../../Title";
import { CreateProject } from "./CreateProject";
import { Install } from "./Install";
import { InstallBootstrap } from "./InstallBootsrap";

export type SetupProps = {
  name: string;
  packages: string[];
  installInstructions?: ReactNode;
  additionalSteps?: ReactNode;
};

export type StepsProps = PropsWithChildren<{
  name: string;
  packages: string[];
  installInstructions?: ReactNode;
}>;

const Steps = ({
  name,
  packages,
  installInstructions,
  children,
}: StepsProps) => (
  <ol>
    <CreateProject />
    <Install name={name} packages={packages}>
      {installInstructions}
    </Install>
    <InstallBootstrap />
    {children}
  </ol>
);

export const Setup = ({
  name,
  packages,
  installInstructions,
  additionalSteps,
}: SetupProps) => (
  <>
    <Title id="setup" aria-label="Link to this section: Setup">
      Setup
    </Title>
    <p>
      We{"'"}re building a {name} project with Bootstrap from scratch, so there
      are some prerequisites and up front steps before we can really get
      started. This guide requires you to have Node.js installed and some
      familiarity with the terminal.
    </p>
    <Steps
      name={name}
      packages={packages}
      installInstructions={installInstructions}
    >
      {additionalSteps}
    </Steps>
    <p>
      Now that we have all the necessary dependencies installed, we can get to
      work creating the project files and importing Bootstrap.
    </p>
  </>
);
