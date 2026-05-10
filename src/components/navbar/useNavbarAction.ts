"use client"

import { useState } from "react";

export const useNavbarAction = () => {
  const [menu, setMenu] = useState<"shop" | "men" | "women" | "kids">("shop");

  const updateMenu = (value: "shop" | "men" | "women" | "kids") => {
    setMenu(value);
  };

  return {
    menu,
    updateMenu,
  };
};
