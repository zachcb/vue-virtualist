module.exports = {
  stories: [
    '../packages/virtualized/**/*.stories.mdx',
    '../packages/virtualized/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    check: true,
    checkOptions: {},
  },
}
