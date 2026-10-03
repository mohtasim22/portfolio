"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="grid size-11 place-items-center rounded-xl border-2 border-edge bg-card text-ink shadow-pop transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-sm"
    >
      <Sun className="size-5 dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
    </button>
  );
}
