import { useState } from "react";
import { useFela } from "react-fela";
import { AutoplayControls } from "./AutoplayControls";
import { Control } from "./Control";
import { Indicator } from "./Indicator";
import { Indicators } from "./Indicators";
import { Item, type ItemProps } from "./Item";
import { Items } from "./Items";
import { Wrapper } from "./Wrapper";

import {
  slideInLeft,
  slideInRight,
  slideOutLeft,
  slideOutRight,
} from "./animations";
import { useAutoplay } from "./useAutoplay";

export type CarouselProps = {
  items: ItemProps[];
  showIndicators?: boolean;
  crossFade?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
};

export const Carousel = ({
  items = [],
  showIndicators = false,
  autoplay: initialAutoplay = false,
  autoplayDuration = 2000,
  crossFade,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(initialAutoplay);
  const { renderer } = useFela();

  let enter = "";
  let exit = "";

  const toggleAutoplay = () => {
    setAutoplay((value) => !value);
  };

  const onNextClick = () => {
    if (activeIndex < items.length - 1) {
      enter = renderer.renderKeyframe(slideInLeft, {});
      exit = renderer.renderKeyframe(slideOutRight, {});
      setActiveIndex((idx) => idx + 1);
    }
  };

  const onPrevClick = () => {
    if (activeIndex > 0) {
      enter = renderer.renderKeyframe(slideInRight, {});
      exit = renderer.renderKeyframe(slideOutLeft, {});
      setActiveIndex((idx) => idx - 1);
    }
  };

  const onIndicatorClick = (index: number) => () => {
    if (index === activeIndex) {
      return undefined;
    }

    if (index < activeIndex) {
      enter = renderer.renderKeyframe(slideInRight, {});
      exit = renderer.renderKeyframe(slideOutLeft, {});
    }

    if (index > activeIndex) {
      enter = renderer.renderKeyframe(slideInLeft, {});
      exit = renderer.renderKeyframe(slideOutRight, {});
    }

    return setActiveIndex(index);
  };

  useAutoplay({
    autoplay,
    setActiveIndex,
    items,
    autoplayDuration,
    activeIndex,
  });

  return (
    <Wrapper>
      {showIndicators ? (
        <Indicators>
          {items.map((_, index) => {
            return (
              <Indicator
                key={`carousel-indicator-${index}`}
                active={activeIndex === index}
                label={`Slide ${index + 1}`}
                onClick={onIndicatorClick(index)}
              />
            );
          })}
        </Indicators>
      ) : null}
      <Items>
        {items.map((item, index) => {
          return (
            <Item
              crossFade={crossFade}
              className={index === activeIndex ? enter : exit}
              active={index === activeIndex}
              key={`carousel-item-${index}`}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Items>
      <Control
        disabled={activeIndex === items.length - 1}
        name="next"
        label="Next"
        onClick={onNextClick}
      />
      <Control
        disabled={activeIndex === 0}
        name="prev"
        label="Previous"
        onClick={onPrevClick}
      />
      <AutoplayControls
        duration={autoplayDuration}
        enabled={initialAutoplay}
        autoplay={autoplay}
        onClick={toggleAutoplay}
      />
    </Wrapper>
  );
};
