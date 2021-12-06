<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20211206173311.svg">
  </a>
</p>

<h1 align="center">React Google Map</h1>

<div align="center">
基于 React 封装的谷歌地图组件，助你轻松的接入谷歌地图到 React 项目中。
</div>

## ✨ 特性

- 📦 开箱即用，本组件支持了大部分的常用地图组件
- 🎉 可扩展，支持自定义地图组件
- 💻 使用 TypeScript 编写，提供完善的类型定义

## 🏗 安装

```sh
# npm install
$ npm install @pansy/react-google-map --save

# yarn install
$ yarn add @pansy/react-google-map
```

## 🔨 使用

```
// html
<div id="app"></div>

// css
#app {
  width: 600px;
  height: 400px;
}

// tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from '@pansy/react-google-map';

ReactDOM.render(
  <Map apiKey={YOUR_API_KEY} />,
  document.querySelector('#app')
)
```
