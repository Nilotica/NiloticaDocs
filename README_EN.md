# NiloticaDocs

ENGLISH | [中文](README.md)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Nilotica/NiloticaDocs/deploy.yaml)&ensp;![GitHub License](https://img.shields.io/github/license/Nilotica/NiloticaDocs)

## Description

This project is the documentation project of **[Nilotica](https://github.com/Lumosylva/Nilotica)**, used for document updates, deployment, etc.

Document browsing: [nilotica.github.io](https://nilotica.github.io/)

## Installation and running

If you only need to make simple changes, you can directly modify the markdown source code of the corresponding document. If the changes are more complicated, please refer to the following steps.

NiloticaDocs uses **[VitePress](https://vitepress.dev/zh/guide/what-is-vitepress)** as the document framework. Please refer to its documentation to contribute.

First, make sure that the node.js version meets >= `v20.5.0` or >= `v18.18.0`. After **installing** VitePress, **restart the terminal**, and execute the following code in the root directory of the pulled project to install the dependencies:

```bash
npm install
```

After installing the dependencies, execute the following code to preview:

```bash
npm run docs:dev
```

## Thanks

[VitePress](https://vitepress.dev/zh/guide/what-is-vitepress)

[NapNeko](https://github.com/NapNeko)