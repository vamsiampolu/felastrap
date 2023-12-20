import { FontSize, HeaderTypes } from "../common";

export const fontSizeByName: Record<HeaderTypes, FontSize> = {
  h1: "calc(1.375rem + 1.5vw)",
  h2: "calc(1.325rem + 0.9vw)",
  h3: "calc(1.3rem + 0.6vw)",
  h4: "calc(1.275rem + 0.3vw)",
  h5: "1.25rem",
  h6: "1rem",
};

export const displayFontSizeByName: Record<HeaderTypes, FontSize> = {
  h1: "5rem",
  h2: "4.5rem",
  h3: "4rem",
  h4: "3.5rem",
  h5: "3rem",
  h6: "2.5rem",
};

export const mediaQueryFontSize: Record<HeaderTypes, FontSize> = {
  h1: "2.5rem",
  h2: "2rem",
  h3: "1.75rem",
  h4: "1.5rem",
  h5: "1.25rem",
  h6: "1rem",
};
