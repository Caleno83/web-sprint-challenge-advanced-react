import { useState, useEffect } from "react";

export const useDarkMode = (toggleValue) => {
  const [darkToggle, SetDarkToggle] = useState(toggleValue);

  useEffect(() => {
    darkToggle
      ? (document.body.className = "dark-mode")
      : (document.body.className = null);
  });

  return [darkToggle, SetDarkToggle];
};