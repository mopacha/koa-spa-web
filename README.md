#koa-spa-web
### 开发

- Node: >=8

#### 安装依赖


#koa-spa-web
```
npm install
```

#### 运行

```
npm start
```

### 部署

- Node: >=8
- pm2

```
npm i -g pm2 

pm2 install pm2-intercom
```

#### 打包

打包脚本在`./release.sh`

run `./release.sh` will generate the deploy directory

	├── build
	│   ├── deploy
	│   │   ├── koa-spa-static.zip // static resource
	│   │   ├── koa-spa-node.zip  //node 


####  运行

```bash
npm run server
npm run stop
```




`npm dedupe`