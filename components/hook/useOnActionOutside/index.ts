"use client";
import { RefObject } from "react";

import { useEventListener } from "../useEventListener";

type Handler = (event: MouseEvent) => void;

export function useOnActionOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  actionEvent: "mousedown" 
): void {
  useEventListener(actionEvent, (event) => {
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
}
