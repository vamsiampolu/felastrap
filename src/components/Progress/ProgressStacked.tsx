import { useFela } from "react-fela";
import { type DivProps } from "../common";
import { Progress, type ProgressProps } from "./Progress";

export type ProgressStackedProps = DivProps & {
  progressBars: ProgressProps[];
};

const stackedRule = () => ({
  display: "flex",
  height: "1rem",
  overflow: "hidden",
  fontSize: "0.75rem",
  backgroundColor: "#e9ecef",
  borderRadius: "0.375rem",
});

export const ProgressStacked = ({
  className = "",
  progressBars = [],
  ...other
}: ProgressStackedProps) => {
  const { css } = useFela();
  const cx = `${css(stackedRule)} progress-stacked ${className}`;

  if (!progressBars.length) {
    return null;
  }

  return (
    <div data-testid="progress-stacked" className={cx} {...other}>
      {progressBars.map((item, index) => {
        const key = `progress-bar-${index}`;
        const label = `Segment ${index + 1}`;
        const { variant = "default", value = 0 } = item;
        return (
          <Progress
            stacked
            showLabel={false}
            key={key}
            label={label}
            variant={variant}
            value={value}
          />
        );
      })}
    </div>
  );
};
