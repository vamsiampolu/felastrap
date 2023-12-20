import { useFela } from "react-fela";
import { SidebarContent } from "./SidebarContent";
import { Offcanvas } from "../../../../components/Offcanvas/Offcanvas";

const rule = () => ({
  gridArea: "sidebar",

  "@media (min-width: 992px)": {
    position: "sticky",
    top: "5rem",
    left: 0,
    display: "block !important",
    height: "calc(100vh - 6rem)",
    paddingLeft: ".25rem",
    marginLeft: "-.25rem",
    overflowY: "auto",
    width: "100px",
  },
});

export const Sidebar = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const cx = `${css(rule)} bd-sidebar ${className}`.trim();
  return (
    <aside className={cx}>
      <Offcanvas
        showCloseButton={false}
        noPortal
        isOpen
        width="200px"
        tabIndex={-2}
        id="bdSidebar"
        title=""
        titleId="sidebar-label"
        minBreakpoint="lg"
        showBackdrop={false}
        onClose={() => undefined}
        body={<SidebarContent />}
      />
    </aside>
  );
};
