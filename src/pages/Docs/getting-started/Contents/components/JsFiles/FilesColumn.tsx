export const FilesColumn = ({ filename }: { filename: string }) => (
  <>
    <code>
      {filename}
      {"."}js
    </code>
    <br />
    <code>
      {filename}
      {"."}min{"."}js
    </code>
    <br />
  </>
);
