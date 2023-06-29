"use client";
import { RefObject } from "react";

import { useEventListener } from "../useEventListener";

type Handler = (event: React.MouseEvent) => void;

export function useOnActionOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  actionEvent: "mousedown" | "mousedown" = "mouseup"
): void {
  useEventListener(actionEvent, (event) => {
    console.log(ref);
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
}
