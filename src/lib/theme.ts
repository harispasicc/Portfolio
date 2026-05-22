export type ThemeMode = "light" | "dark";

export const THEME_STORAGE_KEY = "haris-theme";

export const THEME_BOOTSTRAP_SCRIPT = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY,
)},t=localStorage.getItem(k),d=document.documentElement;if(t==="dark")d.classList.add("dark");else d.classList.remove("dark");}catch(e){}})();`;

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "dark" || v === "light") return v;
  } catch {}
  return null;
}

export function applyThemeClass(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}
