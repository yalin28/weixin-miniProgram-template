# 利用 [eslint](https://eslint.org/docs/user-guide/configuring) + [prettier](https://prettier.io/) + [Easy LESS](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less) + [Vant Weapp](https://github.com/youzan/vant-weapp) 搭建的微信小程序原生开发模板

- [eslint](https://eslint.org/docs/user-guide/configuring) + [prettier](https://prettier.io/) 统一代码风格
- [Easy LESS](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less) 利用 [VS Code](https://code.visualstudio.com/) 可以在小程序中用 [less](https://less.bootcss.com/) 编写样式，保存的时候自动转化成 `wxss`
- [Vant Weapp](https://github.com/youzan/vant-weapp) 轻量、可靠的小程序 UI 组件库（可根据需求确定是否使用或者更换其他 UI 组件库）

## 一、开发环境说明

1. Node.js

   推荐版本：`v12.18.0` 或以上，理论上不能小于 `10.0` ，避免意料不到的问题

| 下载地址                                      | 版本说明                                            |
| --------------------------------------------- | --------------------------------------------------- |
| 👉[点我](https://nodejs.org/zh-cn/download/) | 👉[点我](https://nodejs.org/zh-cn/about/releases/) |

2. Visual Studio Code

   推荐版本：[官方](https://code.visualstudio.com/) 最新版本

3. 微信小程序开发工具

   推荐版本：[官方稳定版](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)（Stable Build ）最新版本

## 二、使用说明

1. 下载开发环境相关工具

2. 下载 Visual Studio Code 所需插件

   | 插件名      | 作用                      |
   | ----------- | ------------------------- |
   | ESLint    | 用于 用于代码校验和格式化 |
   | Easy LESS | 用于 `less` 转 `wxss`     |

3. 在 `VS Code` 的 `settings.json` 中添加配置：

   ```js
   "less.compile": {
     "outExt": ".wxss"
   }
   ```

4. 项目根目录安装依赖

   ```bash
   npm i
   ```

5. 项目目录说明

   ```bash
   ├─.eslintrc.js ------------------- // eslint配置
   ├─.gitignore --------------------- // git提交忽略配置
   ├─.prettierrc.js ----------------- // prettier配置
   ├─LICENSE ------------------------ // 开源协议
   ├─README.md ---------------------- // 使用文档
   ├─package.json ------------------- // 项目npm依赖包
   └─src ---------------------------- // 微信小程序项目根目录
     ├─app.js ----------------------- // App实例配置
     ├─app.json --------------------- // 公共配置
     ├─app.wxss --------------------- // 公共样式表
     ├─behavior.js ------------------ // 全局混入
     ├─components ------------------- // 组件存放目录
     ├─config ----------------------- // 配置文件存放目录
     │ └─api.js --------------------- // 接口配置
     ├─config.wxss ------------------ // 全局样式变量配置，如颜色宽度等
     ├─control ---------------------- // 全局可复用业务逻辑存放目录
     ├─images
     ├─miniprogram_npm -------------- // 微信小程序构建npm生成目录
     │ └─@vant
     ├─pages
     ├─project.config.json ---------- // 构建小程序相关配置
     ├─sitemap.json ----------------- // 小程序页面是否允许被微信索引配置
     ├─template --------------------- // 复用模板存放目录
     ├─utils ------------------------ // 工具集合目录
     │ ├─WxNotificationCenter.js ---- // 微信小程序内部实现通知
     │ ├─router.js ------------------ // 路由封装
     │ └─util.js -------------------- // 常用工具类方法
     └─utils.wxss ------------------- // 全局功能性样式 如.text-ellipsis
   ```

## 三、开源协议

[MIT](http://opensource.org/licenses/MIT)
