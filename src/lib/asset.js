// Build a correct URL for files in /public, honouring Vite's base path.
// Works on GitHub Pages subpaths (base: './') and at the root alike.
// Usage: asset('images/hero.jpg')
export const asset = (path) =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + String(path).replace(/^\//, '');
