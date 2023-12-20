import { useFela } from "react-fela";
import { Table } from "../../../../../../../components/Table";

export const CdnLinksTable = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const cx = `${css({
    overflowX: "auto",
    overflowScrolling: "touch",
  })} table-responsive ${className}`.trim();

  return (
    <div className={cx}>
      <Table
        header={{
          cols: [
            {
              value: "Description",
            },
            {
              value: "URL",
            },
          ],
        }}
        rows={[
          {
            cols: [
              {
                rowHeader: false,
                value: "CSS",
              },
              {
                rowHeader: false,
                value: (
                  <code>
                    https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css
                  </code>
                ),
              },
            ],
          },
          {
            cols: [
              {
                rowHeader: false,
                value: "JS",
              },
              {
                rowHeader: false,
                value: (
                  <code>
                    https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js
                  </code>
                ),
              },
            ],
          },
        ]}
      />
    </div>
  );
};
