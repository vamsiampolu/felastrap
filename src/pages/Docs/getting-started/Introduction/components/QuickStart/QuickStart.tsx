import { useFela } from "react-fela";
import { CdnLinks } from "./CdnLinks/CdnLinks";
import { Community } from "./IncludeBootstrap/Community/Community";
import { FirstSteps } from "./IncludeBootstrap/FirstSteps";
import { ImportantGlobals } from "./IncludeBootstrap/ImportantGlobals/ImportantGlobals";
import { JsComponents } from "./JsComponents";
import { NextSteps } from "./NextSteps";
import { Reboot } from "./Reboot";

const rule = () => ({
  gridArea: "content",
  minWidth: "1px",
  display: "block",
  "@media (min-width: 992px)": {
    paddingLeft: "0.5rem",
  },
});

export const QuickStart = () => {
  const { css } = useFela();
  const cx = `${css(rule)} bd-content`;
  return (
    <div className={cx}>
      <FirstSteps />
      <CdnLinks />
      <NextSteps />
      <JsComponents />
      <ImportantGlobals />
      <Reboot />
      <Community />
    </div>
  );
};
