import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

export type Story = StoryObj<typeof Carousel>;
export type Metadata = Meta<typeof Carousel>;

const meta: Metadata = {
  title: "components/Carousel/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Simple: Story = {
  args: {
    items: [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ],
  },
};

export const Indicators: Story = {
  args: {
    showIndicators: true,
    items: [
      {
        src: "https://picsum.photos/seed/kraken/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/siren/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/mermaid/450/300",
        alt: "Placeholder Image 3",
      },
    ],
  },
};

export const Captions: Story = {
  args: {
    items: [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
        title: "First Image",
        description: "The first image in the carousel",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
        title: "Second Image",
        description: "The second image in the carousel",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
        title: "Third Image",
        description: "The third image in the carousel",
      },
    ],
  },
};

export const CrossFade: Story = {
  args: {
    crossFade: true,
    items: [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ],
  },
};

export const Autoplay: Story = {
  args: {
    autoplay: true,
    crossFade: true,
    items: [
      {
        src: "https://picsum.photos/seed/picsum/450/300",
        alt: "Placeholder Image 1",
      },
      {
        src: "https://picsum.photos/seed/charmed/450/300",
        alt: "Placeholder Image 2",
      },
      {
        src: "https://picsum.photos/seed/crazed/450/300",
        alt: "Placeholder Image 3",
      },
    ],
  },
};
