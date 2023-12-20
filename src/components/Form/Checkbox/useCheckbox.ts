import { useEffect, useRef } from "react";
import { CHECKBOX_STATES, CheckboxStates } from "./CheckboxStates";

export const useCheckbox = ({
  allowIndeterminate,
  value,
}: {
  allowIndeterminate: boolean;
  value: CheckboxStates;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      switch (value) {
        case CHECKBOX_STATES.Checked: {
          ref.current.checked = true;

          if (allowIndeterminate) {
            ref.current.indeterminate = false;
          }

          break;
        }

        case CHECKBOX_STATES.Indeterminate: {
          if (allowIndeterminate) {
            ref.current.checked = false;
            ref.current.indeterminate = true;
          }

          break;
        }

        case CHECKBOX_STATES.Empty: {
          ref.current.checked = false;
          if (allowIndeterminate) {
            ref.current.indeterminate = false;
          }
          break;
        }
      }
    }
  }, [allowIndeterminate, value]);

  return ref;
};
