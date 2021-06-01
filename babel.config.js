const productPlugins = []
process.env.NODE_ENV === "production" && productPlugins.push('transform-remove-console')
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator', //可选链语法
    '@babel/plugin-proposal-optional-chaining', //双问号语法
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: "css"
      }
    ],
    ...productPlugins
  ],
}
