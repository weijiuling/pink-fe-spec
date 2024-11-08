export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/npm/eslint.html", { loader: () => import(/* webpackChunkName: "npm_eslint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/npm/eslint.html.js"), meta: {"title":"encode-fe-eslint-config"} }],
  ["/npm/commitlint.html", { loader: () => import(/* webpackChunkName: "npm_commitlint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/npm/commitlint.html.js"), meta: {"title":"fe-commitlint-config"} }],
  ["/npm/eslint-plugin.html", { loader: () => import(/* webpackChunkName: "npm_eslint-plugin.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/npm/eslint-plugin.html.js"), meta: {"title":"pink-fe-eslint-plugin"} }],
  ["/npm/markdownlint.html", { loader: () => import(/* webpackChunkName: "npm_markdownlint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/npm/markdownlint.html.js"), meta: {"title":"encode-fe-markdownlint-config"} }],
  ["/npm/stylelint.html", { loader: () => import(/* webpackChunkName: "npm_stylelint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/npm/stylelint.html.js"), meta: {"title":"encode-fe-stylelint-config"} }],
  ["/.vuepress/npm/commitlint.html", { loader: () => import(/* webpackChunkName: ".vuepress_npm_commitlint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/npm/commitlint.html.js"), meta: {"title":"encode-fe-commitlint-config"} }],
  ["/.vuepress/npm/stylelint.html", { loader: () => import(/* webpackChunkName: ".vuepress_npm_stylelint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/npm/stylelint.html.js"), meta: {"title":"encode-fe-stylelint-config"} }],
  ["/.vuepress/npm/markdownlint.html", { loader: () => import(/* webpackChunkName: ".vuepress_npm_markdownlint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/npm/markdownlint.html.js"), meta: {"title":"encode-fe-markdownlint-config"} }],
  ["/.vuepress/npm/eslint-plugin.html", { loader: () => import(/* webpackChunkName: ".vuepress_npm_eslint-plugin.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/npm/eslint-plugin.html.js"), meta: {"title":"encode-fe-eslint-plugin"} }],
  ["/.vuepress/npm/eslint.html", { loader: () => import(/* webpackChunkName: ".vuepress_npm_eslint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/npm/eslint.html.js"), meta: {"title":"encode-fe-eslint-config"} }],
  ["/.vuepress/coding/html.html", { loader: () => import(/* webpackChunkName: ".vuepress_coding_html.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/coding/html.html.js"), meta: {"title":"HTML 编码规范"} }],
  ["/.vuepress/coding/node.html", { loader: () => import(/* webpackChunkName: ".vuepress_coding_node.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/coding/node.html.js"), meta: {"title":"Node 编码规范"} }],
  ["/.vuepress/coding/css.html", { loader: () => import(/* webpackChunkName: ".vuepress_coding_css.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/coding/css.html.js"), meta: {"title":"CSS 编码规范"} }],
  ["/.vuepress/coding/javascript.html", { loader: () => import(/* webpackChunkName: ".vuepress_coding_javascript.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/coding/javascript.html.js"), meta: {"title":"JavaScript 编码规范"} }],
  ["/.vuepress/coding/typescript.html", { loader: () => import(/* webpackChunkName: ".vuepress_coding_typescript.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/.vuepress/coding/typescript.html.js"), meta: {"title":"TypeScript 编码规范"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/cli/encode-fe-lint.html", { loader: () => import(/* webpackChunkName: "cli_encode-fe-lint.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/cli/encode-fe-lint.html.js"), meta: {"title":"encode-fe-lint"} }],
  ["/engineering/changelog.html", { loader: () => import(/* webpackChunkName: "engineering_changelog.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/engineering/changelog.html.js"), meta: {"title":"CHANGELOG 规范"} }],
  ["/engineering/git.html", { loader: () => import(/* webpackChunkName: "engineering_git.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/engineering/git.html.js"), meta: {"title":"Git 规范"} }],
  ["/engineering/doc.html", { loader: () => import(/* webpackChunkName: "engineering_doc.html" */"/Users/weijiuling/Desktop/pink-fe-spec/docs/.vuepress/.temp/pages/engineering/doc.html.js"), meta: {"title":"文档规范"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
