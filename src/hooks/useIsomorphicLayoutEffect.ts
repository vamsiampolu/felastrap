import { useEffect, useLayoutEffect } from "react";
import { canUseDom } from "../utils";

const useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
