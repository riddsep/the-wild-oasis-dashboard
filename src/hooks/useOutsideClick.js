import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenCapturing = true) {
  const modal = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (modal.current && !modal.current.contains(e.target)) close();
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [close, listenCapturing]);

  return modal;
}
