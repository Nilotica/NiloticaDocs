# NiloticaDocs

中文 | [ENGLISH](README_EN.md)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Nilotica/NiloticaDocs/deploy.yaml)&ensp;![GitHub License](https://img.shields.io/github/license/Nilotica/NiloticaDocs)



## 说明

本项目是 **[Nilotica](https://github.com/Lumosylva/Nilotica)** 的文档项目，用于文档的更新，部署等。

文档浏览：[nilotica.github.io](https://nilotica.github.io/)

## 安装和运行

如果只需要进行简单的修改可以直接修改对应文档的 markdown 源码, 如果修改较为复杂请参考以下步骤.

NiloticaDocs 采用 **[VitePress](https://vitepress.dev/zh/guide/what-is-vitepress)** 作为文档框架, 请参考其文档进行贡献.

首先确保 node.js 版本满足 >= `v20.5.0` 或 >= `v18.18.0`, **安装好** VitePress 后, **重启终端**, 于拉取的本项目根目录下执行以下代码安装依赖:

```bash
npm install
```

安装依赖后执行以下代码进行预览:

```bash
npm run docs:dev
```

## 感谢

[VitePress](https://vitepress.dev/zh/guide/what-is-vitepress)

[NapNeko](https://github.com/NapNeko)