![Build Status](https://gitlab.com/pages/<project>/badges/master/build.svg)

---

Example [Next.js](https://nextjs.org) website using GitLab Pages.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation https://docs.gitlab.com/ce/user/project/pages/.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [GitLab CI](#gitlab-ci)
- [Building locally](#building-locally)
- [Add base path in Next.js when unique domain is disabled](#add-base-path-in-nextjs-when-unique-domain-is-disabled)
- [GitLab User or Group Pages](#gitlab-user-or-group-pages)
- [Did you fork this project?](#did-you-fork-this-project)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

contents of .gitlab-ci.yml in codeblock

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. Install dependencies: `npm install`
1. Preview your project: `npm run dev`
1. Add content

Read more at the Next.js [documentation](https://nextjs.org/docs).

## Add base path in Next.js when unique domain is disabled

If you [disable the unique domain](https://docs.gitlab.com/user/project/pages/#unique-domains),
the site will be hosted under `yourname.gitlab.io/examplerepository/`,
you will need to configure Next.js to use the `basePath`.

In `next.config.mjs`, the value for `basePath` should be your project’s name,
starting with a forward slash - for example, `/examplerepository`.
This ensures Next.js understands that your website’s root is `/examplerepository` instead of the default `/`,
especially when your project is hosted at `https://gitlab.com/yourname/examplerepository/`.

```js:title=next.config.mjs
const nextConfig = {
  basePath: '/examplerepository',
};
export default nextConfig;
```

## GitLab User or Group Pages

To use this project as your user/group website, you will need one additional
step: just rename your project to `namespace.gitlab.io`, where `namespace` is
your `username` or `groupname`. This can be done by navigating to your
project's **Settings**.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be necessary
unless you want to contribute back to the upstream project.

## Troubleshooting

1. CSS is missing! That means two things:

   Either that you have wrongly set up the CSS URL in your templates, or
   your static generator has a configuration option that needs to be explicitly
   set in order to serve static assets under a relative URL.

[ci]: https://about.gitlab.com/gitlab-ci/
[<project>]: http://link-to-project-main-page
[install]: http://link-to-install-page
[documentation]: http://link-to-main-documentation-page
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages

----