import { useFela } from "react-fela";
import { Image } from "../../../../components/Image/Image";

const rule = () => ({
  borderRadius: "0.5rem",
  marginBottom: "1.5rem",
});

export const HeroImage = ({ src, src2x }: { src: string; src2x: string }) => {
  const { css } = useFela();
  return (
    <Image
      className={css(rule)}
      fluid
      width={800}
      height={500}
      src={src}
      srcSet={[src, src2x].join(", ")}
    />
  );
};
