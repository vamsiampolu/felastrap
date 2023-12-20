export const FilesColumn = ({ filename }: { filename: string }) => {
  return (
    <>
      <code>
        {filename}
        {"."}css
      </code>
      <br />
      <code>
        {filename}
        {"."}min{"."}css
      </code>
      <br />
      <code>
        {filename}
        {"."}rtl{"."}css
      </code>
      <br />
      <code>
        {filename}
        {"."}rtl{"."}min{"."}css
      </code>
    </>
  );
};
