# layaair-tape 4.x
> A layaair game library

### Usage

```
> npm install layaair-tape
```

```html
<!-- include tape library -->
<script src="../node_modules/layaair-tape/dist/tape.js"></script>
```

### CLI

#### create new project
```
> layaair-tape create
```

#### build
```
> layaair-tape
  Usage: layaair-tape build [options]
    --input            input dir
    --output           output dir
    --env              [Optional] dev | prod
    --platform         [Optional] h5 | quickgame | android
    --index            [Optional] index.html file def: index.html
    --version          [Optional] version code def: read package.json
    --cssfile          [Optional] cssfile def: style.css
    --jsfile           [Optional] jsfile def: code.js
    --jschunk          [Optional] jschunk def: code.chunk.js
    --jsunpack         [Optional] jsunpack def: code.unpack.js
    --projectname      [Optional] project name
    --packagename      [Optional] android package name, def: 
    --orientation      [Optional] android screen orientation
    --pngquant         [Optional] pngquant quality def:65-80
    --injection        [Optional] injection js file
    --injection-append [Optional] injection append js file
    --bgcolor          [Optional] h5 body bg color
    --imgbase64        [Optional] h5 html image base64
    --zip              [Optional] [bool] zip build.zip
    --zip-name         [Optional] [bool] zip name, def:build.zip
    --min              [Optional] [bool] uglify js
    --minchunk         [Optional] [bool] uglify chunk js
    --mergeunpack      [Optional] [bool] merge unpack js
    --babel            [Optional] [bool] babel js
    --babelchunk       [Optional] [bool] babel chunk js
    --force            [Optional] [bool] ignore .lock file
    --x                [Optional] show this help
```

### Development
* make sure latest `node.js` installed
* install dependnecies by: `npm install`
* start development by: `npm start`
* make build by: `npm run build` 