import { useFela } from "react-fela";
import { Column } from "../../../../../../components/Flex";
import { Image as BaseImage } from "../../../../../../components/Image/Image";
import themes from "../../../../../../assets/bootstrap-themes.png";
import themes2x from "../../../../../../assets/bootstrap-themes@2x.png";

export const Image = () => {
  const { css } = useFela();
  return (
    <Column lg={6}>
      <BaseImage
        className={`${css({
          marginTop: "1rem",
          marginRight: "auto",
          marginLeft: "auto",
        })} bootstrap-themes-image`}
        fluid
        loading="lazy"
        alt="Bootstrap Themes"
        srcSet={`${themes}, ${themes2x}`}
        src={themes}
        width={700}
        height={500}
      />
    </Column>
  );
};
