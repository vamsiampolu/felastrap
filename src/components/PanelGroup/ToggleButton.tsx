import { useFela } from "react-fela";
import { Button, ButtonProps } from "../Button";
import { StyleProps } from "../common";

const base = () => ({
  position: "relative",
  display: "flex !important",
  alignItems: "center",
  width: "100%",
  padding: "1.25rem 1rem",
  fontSize: "1rem",
  color: "#212529",
  textAlign: "left",
  backgroundColor: "#fff",
  border: 0,
  borderRadius: 0,
  overflowAnchor: "none",
  transition:
    "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  ":focus": {
    zIndex: 3,
    borderColor: "#86b7fe",
    outline: 0,
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
  },
  ":hover": {
    zIndex: 2,
  },
});

const openRule = ({ isOpen }: StyleProps<CustomProps>) =>
  isOpen
    ? {
        color: "#052c65",
        backgroundColor: "#cfe2ff",
        boxShadow: "inset 0 calc(-1 * -1px) 0 #dee2e6",
      }
    : {};

const firstRule = ({ first }: StyleProps<CustomProps>) =>
  first
    ? {
        borderTopLeftRadius: "calc(0.375rem - 1px)",
        borderTopRightRadius: "calc(0.375rem - 1px)",
      }
    : {};

const lastClosedRule = ({ last, isOpen }: StyleProps<CustomProps>) =>
  last && !isOpen
    ? {
        borderBottomRightRadius: "calc(0.375rem - 1px)",
        borderBottomLeftRadius: "calc(0.375rem - 1px)",
      }
    : {};

// [base, openRule, firstRule, lastClosedRule ]

// const rule = ({ isOpen = false, first = false, last = false }) => {
//   const style: IStyle = {
//     position: "relative",
//     display: "flex !important",
//     alignItems: "center",
//     width: "100%",
//     padding: "1.25rem 1rem",
//     fontSize: "1rem",
//     color: "#212529",
//     textAlign: "left",
//     backgroundColor: "#fff",
//     border: 0,
//     borderRadius: 0,
//     overflowAnchor: "none",
//     transition:
//       "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease",
//     "@media (prefers-reduced-motion: reduce)": {
//       transition: "none",
//     },
//     ":focus": {
//       zIndex: 3,
//       borderColor: "#86b7fe",
//       outline: 0,
//       boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
//     },
//     ":hover": {
//       zIndex: 2,
//     },
//   };

//   if (isOpen) {
//     style.color = "#052c65";
//     style.backgroundColor = "#cfe2ff";
//     style.boxShadow = "inset 0 calc(-1 * -1px) 0 #dee2e6";
//   }

//   const firstRule = () => ({
//     borderTopLeftRadius: "calc(0.375rem - 1px)",
//     borderTopRightRadius: "calc(0.375rem - 1px)",
//   });
//   if (first) {
//     style.borderTopLeftRadius = "calc(0.375rem - 1px)";
//     style.borderTopRightRadius = "calc(0.375rem - 1px)";
//   }

//   if (last && !isOpen) {
//     style.borderBottomRightRadius = "calc(0.375rem - 1px)";
//     style.borderBottomLeftRadius = "calc(0.375rem - 1px)";
//   }

//   return style;
// };

export type CustomProps = {
  isOpen: boolean;
  first: boolean;
  last: boolean;
};

export type ToggleButtonProps = ButtonProps<"button"> & Partial<CustomProps>;

export const ToggleButton = ({
  isOpen = false,
  first = false,
  last = false,
  children,
  ...other
}: ToggleButtonProps) => {
  const { css } = useFela({ isOpen, first, last });
  const cx = css([base, openRule, firstRule, lastClosedRule]);
  return (
    <Button
      data-testid="panel-group-toggle-button"
      aria-expanded={isOpen}
      className={cx}
      {...other}
    >
      {children}
    </Button>
  );
};
