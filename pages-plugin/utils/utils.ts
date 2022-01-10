export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '-')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function className(names: Record<string, boolean>) {
  const activeNames = Object.entries(names)
    .filter(([, enabled]) => enabled)
    .map(([name]) => name);
  return activeNames.join(' ');
}

export const restoreTheme = () => {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const theme = getTheme() ?? (darkQuery.matches ? 'dark' : 'light');
  setTheme(theme);
  // Dark mode color transition, wait for react's inital render.
  requestAnimationFrame(() => {
    document.body.style.transition =
      'color 0.5s ease-out, background 0.5s ease-out';
  });
};

export const getTheme = () => {
  return localStorage.getItem('theme');
};
export const setTheme = (theme: string) => {
  if (theme === 'dark') {
    document.documentElement.className = 'dark';
  } else {
    document.documentElement.className = '';
  }
  localStorage.setItem('theme', theme);
};
