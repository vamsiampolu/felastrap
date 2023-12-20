import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  margin: 0,
  lineHeight: 1.42857143,
  textAlign: "center",
});

export type ModalTitleProps = ComponentPropsWithoutRef<"h4"> & {
  title: string;
};

export const ModalTitle = ({
  className = "",
  title,
  ...props
}: ModalTitleProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} bs-modal-title ${className}`.trim();
  return (
    <h4 data-testid="modal-title" className={cx} {...props}>
      {title}
    </h4>
  );
};
