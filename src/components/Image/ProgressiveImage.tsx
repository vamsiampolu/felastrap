import {
  useRef,
  useEffect,
  type ComponentPropsWithoutRef,
  useState,
} from "react";
import { useFela } from "react-fela";

const placeholderRule = ({ variant = "default" }) =>
  variant === "default"
    ? {
        "0%": {
          backgroundColor: "#eee",
        },
        "50%": {
          backgroundColor: "#ccc",
        },
        "100%": {
          backgroundColor: "#eee",
        },
      }
    : {};

const fadeInRule = ({ variant = "default " }) =>
  variant === "default"
    ? {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: "100%",
        },
      }
    : {};

export type ProgressiveImageProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "loading"
> & { variant?: Variant };

export type Variant = "default" | "blur";
export const ProgressiveImage = ({
  src,
  width,
  height,
  variant = "default",
  ...props
}: ProgressiveImageProps) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const { css, renderer } = useFela();

  const placeholder = renderer.renderKeyframe(placeholderRule, { variant });
  const fadeIn = renderer.renderKeyframe(fadeInRule, { variant });

  const base = css({
    width,
    height,
    "> img": { width: "100%" },
  });

  const loadingAnimation = css({
    animation: `${placeholder} ease-in-out 2s infinite`,
  });

  const fadeInAnimation = `${css({ animation: `${fadeIn} linear 0.5s` })}`;

  const [source, setSource] = useState(src);
  const [className, setClassName] = useState(`${base} ${loadingAnimation}`);

  useEffect(() => {
    if (ref.current?.complete) {
      setClassName(base);
    }

    ref.current?.addEventListener("error", () => {
      setClassName(fadeInAnimation);
      setSource("/error-image.png");
    });
  }, [src, base, fadeInAnimation]);

  return (
    <div data-testid="progressive-image-wrapper" className={className}>
      <img
        data-testid="progressive-image"
        className={fadeInAnimation}
        src={source}
        ref={ref}
        loading="lazy"
        {...props}
      />
    </div>
  );
};
