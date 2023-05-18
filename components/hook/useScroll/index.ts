"use client";
import { useState, useEffect, useCallback } from "react";

const useScroll = () => {
  const [loadData, setLoadData] = useState<boolean>(false);
  const handleNavigation = useCallback((e: Event, loadData: boolean) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    const scrollHeightCheck = scrollHeight - (scrollTop + clientHeight);
    if (scrollHeightCheck < 100 && !loadData) {
      setLoadData(true);
    } else {
      setLoadData(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (event: Event) =>
      handleNavigation(event, loadData)
    );

    return () => {
      window.scrollTo(0, 0);
      window.removeEventListener("scroll", (event: Event) =>
        handleNavigation(event, loadData)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleNavigation]);

  return loadData;
};

export default useScroll;
