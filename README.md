# umi project 
## React-umo-mobile-template

技术：基于 Umi3 + DVA + TS + Antd-Mobile5.x

- 由于旧版本的 umi 插件和 antd-mobile v5 有一定的冲突，所以你可能会遇到类似下面这样的报错：
```
These dependencies were not found:

* antd-mobile/es/button in ./src/pages/home-my/index.tsx
* antd-mobile/es/button/style in ./src/pages/home-my/index.tsx
...
```
解决方法就是对插件进行一下升级：

1. 如果你的项目中依赖了 @umijs/preset-react （可以在 package.json 文件中看到），那么请把它升级到最新版
2. 如果你的项目中依赖了 @umijs/plugin-antd （可以在 package.json 文件中看到），那么请把它升级到最新版
3. 如果你的项目中上述两个 npm 包都没有依赖，那么可以安装最新版的 @umijs/plugin-antd-mobile 插件

安装依赖：yarn

启动项目：yarn start
