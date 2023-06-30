import { RefObject, useRef, useCallback } from "react";
const useOutsideListener = (): [
  RefObject<HTMLDivElement>,
  (node: HTMLDivElement) => void
] => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback(
    (node: HTMLDivElement) => {
      ref.current = node;
    },
    [ref.current]
  );

  return [ref, setRef];
};

export default useOutsideListener;
