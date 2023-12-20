import { HtmlLine, type HtmlLineProps } from "./HtmlLine";
import { JsLine, JsLineProps } from "./JsLine";
import { RubyLine, RubyLineProps } from "./RubyLine";
import { ScssLine, type ScssLineProps } from "./ScssLine";
import { ShellLine, ShellTokenProps } from "./ShellLine";
import { TextLine, TextTokenProps } from "./TextLine";

export type LineProps =
  | ({ language: "html" } & HtmlLineProps)
  | ({ language: "scss" } & ScssLineProps)
  | { language: "sh"; tokens: { token: string }[] }
  | ({ language: "ruby" } & RubyLineProps)
  | ({ language: "text" } & TextTokenProps)
  | ({ language: "js" | "javascript" } & JsLineProps);

export const Line = ({ language, ...props }: LineProps) => {
  if (language === "html") {
    return <HtmlLine {...(props as HtmlLineProps)} />;
  }

  if (language === "scss") {
    return <ScssLine {...(props as ScssLineProps)} />;
  }

  if (language === "sh") {
    return <ShellLine {...(props as ShellTokenProps)} />;
  }

  if (language === "ruby") {
    return <RubyLine {...(props as RubyLineProps)} />;
  }

  if (language === "js" || language === "javascript") {
    return <JsLine {...(props as JsLineProps)} />;
  }

  return <TextLine {...(props as TextTokenProps)} />;
};
