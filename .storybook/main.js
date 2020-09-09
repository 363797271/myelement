module.exports = {
  "stories": [
    // 匹配packages目录下任意文件名以 .stories.js 结尾的文件
    '../packages/**/*.stories.js'
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
