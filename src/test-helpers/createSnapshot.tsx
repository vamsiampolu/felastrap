import { IRenderer } from "fela";
import { renderToString } from "fela-tools";
import { ReactElement, ReactNode } from "react";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import {
  type UserEvent,
  type UserEventApi,
} from "@testing-library/user-event/dist/types/setup/setup";
import * as prettier from "prettier";
import { renderToStaticMarkup } from "react-dom/server";
import { Wrapper } from "./Wrapper";

async function formatCSS(css: string) {
  return prettier.format(css, {
    parser: "css",
    useTabs: false,
    tabWidth: 2,
  });
}

function formatHTML(str: string) {
  return prettier.format(str, { parser: "html" });
}

function renderToMarkup(component: ReactElement): string {
  return renderToStaticMarkup(component);
}

export const createSnapshot = async ({
  component,
  renderer,
  theme = {},
}: {
  component: ReactNode;
  renderer: IRenderer;
  theme?: object;
}) => {
  // reset renderer to have a clean setup
  renderer.clear();

  const element = (
    <Wrapper theme={theme} renderer={renderer}>
      {component}
    </Wrapper>
  );

  const view = renderToMarkup(element);
  const str = renderToString(renderer);

  const css = await formatCSS(str);
  const html = await formatHTML(view);

  return `${css}\n\n${html}`;
};

export type EventName = keyof UserEventApi | "focus" | "focus-visible";
export type CreateUserEventType = {
  eventName: EventName;
  component: ReactElement;
  renderer: IRenderer;
  testId: string;
  theme?: object;
  donotWrap?: boolean;
};

export type SetupEvent = {
  user: UserEvent;
  eventName: EventName;
  element: HTMLElement;
};
const setupEvent = async ({ user, eventName, element }: SetupEvent) => {
  switch (eventName) {
    case "hover": {
      await user.hover(element);
      break;
    }

    case "focus": {
      element.focus();
      break;
    }

    case "focus-visible": {
      element.contentEditable = "true";
      element.focus();
      element.contentEditable = "false";
      break;
    }
  }
};

const clearEvent = async ({ eventName, user, element }: SetupEvent) => {
  switch (eventName) {
    case "hover": {
      await user.unhover(element);
      break;
    }

    case "focus":
    case "focus-visible": {
      element.blur();
      break;
    }
  }
};

export const createUserEventSnapshot = async ({
  eventName,
  component,
  testId,
  renderer,
  theme = {},
  donotWrap = false,
}: CreateUserEventType) => {
  renderer.clear();

  const user = userEvent.setup();
  let wrappedComponent = component;
  if (!donotWrap) {
    wrappedComponent = (
      <Wrapper theme={theme} renderer={renderer}>
        {component}
      </Wrapper>
    );
  }

  render(wrappedComponent);

  const element = await screen.findByTestId(testId);

  setupEvent({ element, eventName, user });
  const view = await renderToMarkup(wrappedComponent);
  const utils = renderToString(renderer);
  const css = await formatCSS(utils);
  const html = await formatHTML(view);

  clearEvent({ eventName, element, user });

  return `${css}\n\n${html}`;
};
