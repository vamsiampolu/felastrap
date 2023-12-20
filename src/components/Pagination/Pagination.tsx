import { useState } from "react";
import { PageItem } from "./Item";
import { Next, NextProps } from "./Next";
import { Prev, type PrevProps } from "./Prev";
import { Wrapper } from "./Wrapper";
import type { Size } from "../common";
import { range } from "./range";

export type PaginationProps = {
  end: number;
  next: NextProps & Partial<{ show: boolean }>;
  page: number;
  previous: PrevProps & Partial<{ show: boolean }>;
  size: Size;
  start: number;
  disabledPages: number[];
};

const defaultPreviousLabel = "\u00AB";
const defaultNextLabel = "\u00BB";
export const Pagination = ({
  start = 1,
  end = 5,
  page = 1,
  disabledPages = [],
  previous,
  next,
  size = "medium",
}: PaginationProps) => {
  const length = end - start + 1;
  const pages = range({ start, length }).map((num) => ({
    label: `${num}`,
    disabled: disabledPages.includes(num),
  }));

  const [activeIndex, setActiveIndex] = useState(page - 1);

  const {
    disabled: previousDisabled = false,
    show: previousShow = true,
    label: previousLabel = defaultPreviousLabel,
  } = previous;

  const {
    disabled: nextDisabled = false,
    show: nextShow = true,
    label: nextLabel = defaultNextLabel,
  } = next;
  return (
    <Wrapper>
      {previousShow && (
        <Prev
          size={size}
          onClick={() =>
            !previousDisabled &&
            activeIndex > 0 &&
            setActiveIndex(activeIndex - 1)
          }
          label={previousLabel}
          disabled={previousDisabled || activeIndex === 0}
        />
      )}
      {pages.map((page, index) => {
        const first = previousShow ? false : index === 0;
        const last = nextShow ? false : index === pages.length - 1;
        const { disabled = false, label = `${index + 1}`, ...other } = page;
        return (
          <PageItem
            size={size}
            key={`page-item-${label}`}
            onClick={() => !disabled && setActiveIndex(index)}
            active={activeIndex === index}
            disabled={disabled}
            first={first}
            last={last}
            label={label}
            {...other}
          />
        );
      })}
      {nextShow && (
        <Next
          size={size}
          onClick={() =>
            !nextDisabled &&
            activeIndex < pages.length - 1 &&
            setActiveIndex(activeIndex + 1)
          }
          label={nextLabel}
          disabled={nextDisabled || activeIndex === pages.length - 1}
        />
      )}
    </Wrapper>
  );
};
