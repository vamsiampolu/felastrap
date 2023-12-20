import { useState, useRef, useEffect, useMemo, RefObject } from "react";
import { CollapseContextValue } from "./CollapseContext";

export type UseCollapseOptions = {
  collapsed?: boolean;
};

export const useCollapse = ({
  collapsed: initCollapsed = false,
}: UseCollapseOptions) => {
  const [collapsed, setCollapsed] = useState(initCollapsed);
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<undefined | number>(
    collapsed ? undefined : 0,
  );

  const setDimensionEffect = () => {
    if (contentRef?.current) {
      const clientRect = contentRef.current.getBoundingClientRect();
      const contentHeight = !collapsed ? clientRect.height : 0;
      return setHeight(contentHeight);
    }

    return undefined;
  };

  const setDimensionWithResizeObserverEffect = () => {
    if (contentRef?.current && height && !collapsed) {
      const resizeObserver = new ResizeObserver((el) => {
        const contentHeight = el[0].contentRect.height;
        setHeight(contentHeight);
      });

      resizeObserver.observe(contentRef.current);

      return () => resizeObserver.disconnect();
    }

    return undefined;
  };

  useEffect(setDimensionWithResizeObserverEffect, [collapsed, height]);
  useEffect(setDimensionEffect, [collapsed]);

  return useMemo<CollapseContextValue>(
    () => ({
      toggleCollapse: () => {
        setCollapsed((x) => !x);
      },
      isOpen: !collapsed,
      height,
      collapsed,
      contentRef: contentRef as null | RefObject<HTMLDivElement>,
    }),
    [height, collapsed, contentRef],
  );
};
