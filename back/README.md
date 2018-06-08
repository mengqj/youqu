演示地址： [前端开发俱乐部](https://www.html-js.cn)
后台登录： https://www.html-js.cn/dr-admin     测试账号：doracms/123456

开发文档： [前端内容管理框架 DoraCMS2.0 开发文档](https://www.html-js.cn/details/ryn2kSWqZ.html)   
生产部署教程： [DoraCMS2.0 linux部署(生产环境)教程](https://www.html-js.cn/details/ry4-B-hkf.html)  


## 目录结构

```
├─build // webpack 相关配置文件
│
├─configs // 配置文件
│  │  
│  └─logConfig.js  // 日志配置文件
│ 
├─logs // 日志目录
│
├─dist  // webpack 生成文档存放目录
│  │
│  ├─server
│  │
│  └─static
│      ├─css
│      │
│      ├─images
│      │
│      ├─img
│      │
│      └─js
│
├─server    // 服务端目录
│  │
│  ├─lib    // 核心层
│  │
│  └─routes // 路由文件
│
├─src           // 客户端程序目录
│  │
│  ├─api        // api 配置文件
│  │
│  ├─filters    // 过滤器
│  │
│  ├─index      // 前台组件
│  │
│  ├─manage     // 后台组件
│  │
│  ├─template   // 初始模版
│  │
│  └─utils      // 实用工具
│
└─utils
    ├─middleware // 中间件
    │
    ├─authPower.js // 资源鉴权
    │
    ├─authSession.js // session 鉴权
    │
    ├─authToken.js // token鉴权
    │
    ├─logUtil.js // 日志配置
    │
    ├─settings.js // 关键信息配置
    │
    └─validatorUtil.js // 信息校验

```

首页
http://localhost:8080  
http://35.194.153.183:8080

登录
http://localhost:8080/dr-admin  
http://35.194.153.183:8080/dr-admin
