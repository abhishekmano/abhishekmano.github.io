/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves plain files, so the build has to emit a static site into
  // out/. The workflow's configure-pages step injects these same settings, but
  // declaring them here means `npm run build` produces a publishable out/ dir
  // locally too, instead of silently depending on CI to patch this file.
  output: "export",
  // next/image cannot optimise at request time without a server.
  images: { unoptimized: true },
};

export default nextConfig;
