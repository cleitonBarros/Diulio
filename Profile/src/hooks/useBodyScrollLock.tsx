import { useEffect, useState } from "react";

export function useBodyScrollLock() {
  const bodyStyle = document.body.style;
  const [isLock, setIsLock] = useState<boolean>(bodyStyle.overflowY === "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLock ? "hidden" : "auto";
  }, [bodyStyle, isLock]);

  function toggle() {
    setIsLock(!isLock);
  }
  return[toggle, isLock];
}
