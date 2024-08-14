/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Specify the path if your app is not deployed at the root of your
  // domain. The GitLab Pages example is deployed at gitlab.pages.io/nextjs,
  // so we specify the below basePath
  basePath: '/nextjs',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`. Remember to update
  // it in .gitlab-ci.yml as well.
  // distDir: 'dist',
};

export default nextConfig;
