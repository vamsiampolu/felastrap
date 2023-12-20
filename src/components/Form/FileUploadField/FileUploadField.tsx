import { ReactNode } from "react";
import { useFela } from "react-fela";
import { Label } from "../Controls/Label";
import { FileUploadInput, FileUploadProps } from "./FileUploadInput";

const fieldRule = () => ({
  marginBottom: "1rem",
});

export type FileUploadFieldProps = {
  id: string;
  label?: ReactNode;
  className?: string;
} & FileUploadProps;

export const FileUploadField = ({
  id,
  label,
  className = "",
  size = "medium",
  ...props
}: FileUploadFieldProps) => {
  const { css } = useFela();
  const cx = `${css(fieldRule)} file-upload-field ${className}`;
  return (
    <div data-testid="file-upload-field" className={cx}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <FileUploadInput id={id} size={size} {...props} />
    </div>
  );
};
