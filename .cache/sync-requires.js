const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/olokoo/Development/Olokoo/clients/we-are-the-wackadoodles/.cache/dev-404-page.js"))),
  "component---src-templates-advanced-js": hot(preferDefault(require("/Users/olokoo/Development/Olokoo/clients/we-are-the-wackadoodles/src/templates/advanced.js"))),
  "component---src-templates-diary-js": hot(preferDefault(require("/Users/olokoo/Development/Olokoo/clients/we-are-the-wackadoodles/src/templates/diary.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/olokoo/Development/Olokoo/clients/we-are-the-wackadoodles/src/templates/page.js"))),
  "component---src-templates-shop-js": hot(preferDefault(require("/Users/olokoo/Development/Olokoo/clients/we-are-the-wackadoodles/src/templates/shop.js")))
}

