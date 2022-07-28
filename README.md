# package

## 手順メモ


### root設定

- eslint/prettier/typescriptは、rootに突っ込む。

```
yarn add -D -W eslint prettier typescript
```

- plugin & `.eslintrc.js`をつっこむ。内容はわりと適当。

```  
yarn add -D -W eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react  eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- .vscode/setting.jsonでファイル保存時にlintをかけるように設定。
- scriptsに、`eslint --fix`を入れて、lintがかかることをチェック。
- 適当なファイルを作成して、保存時にlintがかかることをチェック。初回はvscode再起動したほうがいい。


### ad-ui

- rootの`package.json`にworkspace追加して、`ad-ui`を対象にする。
- ad-uiに`yarn init` & 必要なパッケージを追加。

```
yarn add -D rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve
```


### lerna

```
yarn add -D -W lerna
yarn lerna init --independent
```

```
yarn add -D -W rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve
```

### jest

```
yarn add -D -W jest @babel/core @babel/plugin-transform-modules-commonjs babel-jest @types/jest
```
```
yarn add -D -W jest @babel/core @babel/plugin-transform-modules-commonjs babel-jest @types/jest @babel/preset-typescript
```
