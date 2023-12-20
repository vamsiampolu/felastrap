import { Meta, StoryObj } from "@storybook/react";
import { useFela } from "react-fela";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Breakpoints } from "./mediaQuery";

const rule = ({ matched = false }) => ({
  backgroundColor: "rgba(112.520718,44.062154,249.437846, 0.15)",
  border: "1px solid rgba(112.520718,44.062154,249.437846, 0.3)",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  display: matched ? "block" : "none",
  marginLeft: "50%",
  width: "4rem",
  height: "4rem",
});

const dimRule = () => ({
  textAlign: "center",
  width: "100%",
  marginBottom: "1.25rem",
});

const Box = ({
  breakpoint = "sm",
  isMinWidth = true,
}: {
  breakpoint: Breakpoints;
  isMinWidth?: boolean;
}) => {
  const { width, height } = useWindowSize();
  const matched = useMediaQuery({ breakpoint, isMinWidth });
  const { css } = useFela({ matched });
  return (
    <>
      <div className={css(dimRule)}>
        Dimensions: {width}px x {height}px
      </div>
      <div
        id="box"
        className={`${css(rule)} box-${matched ? "showing" : "hidden"}`.trim()}
      />
    </>
  );
};

export type Story = StoryObj<typeof Box>;
const meta: Meta<typeof Box> = {
  title: "components/MediaQuery",
  component: Box,
};

export default meta;

export const UntilSmall: Story = {
  args: {
    breakpoint: "sm",
    isMinWidth: false,
  },
};

export const AtLeastSmall: Story = {
  args: {
    breakpoint: "sm",
  },
};

export const UntilMedium: Story = {
  args: {
    breakpoint: "md",
    isMinWidth: false,
  },
};

export const AtLeastMedium: Story = {
  args: {
    breakpoint: "md",
  },
};

export const UntilLarge: Story = {
  args: {
    breakpoint: "lg",
    isMinWidth: false,
  },
};

export const AtLeastLarge: Story = {
  args: {
    breakpoint: "lg",
  },
};

export const UntilXLarge: Story = {
  args: {
    breakpoint: "xl",
    isMinWidth: false,
  },
};

export const AtleastXLarge: Story = {
  args: {
    breakpoint: "xl",
  },
};
