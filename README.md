# vue-test

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vscode setting.json formate config

{
"workbench.editor.enablePreview": false, //打开文件不覆盖
"search.followSymlinks": false, //关闭 rg.exe 进程
"editor.minimap.enabled": false, //关闭快速预览
"files.autoSave": "afterDelay", //打开自动保存
"editor.lineNumbers": "on", //开启行数提示
"editor.quickSuggestions": {
//开启自动显示建议
"other": true,
"comments": true,
"strings": true
},
"editor.tabSize": 4, //制表符符号 eslint
"editor.formatOnSave": true, //每次保存自动格式化
"eslint.autoFixOnSave": true, // 每次保存的时候将代码按 eslint 格式进行修复
"prettier.eslintIntegration": true, //让 prettier 使用 eslint 的代码格式进行校验
"prettier.semi": false, //去掉代码结尾的分号
"prettier.singleQuote": true, //使用带引号替代双引号
"javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
"vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue 中 html
"vetur.format.defaultFormatter.js": "vscode-typescript", //让 vue 中的 js 按编辑器自带的 ts 格式进行格式化
"vetur.format.defaultFormatterOptions": {
"js-beautify-html": {
"wrap_attributes": "force-aligned" //属性强制折行对齐
}
},
"eslint.validate": [
//开启对.vue 文件中错误的检查
"javascript",
"javascriptreact",
{
"language": "html",
"autoFix": true
},
{
"language": "vue",
"autoFix": true
}
],
"workbench.colorTheme": "Dark"
