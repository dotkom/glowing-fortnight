# "Glowing Fortnight"
Splash-side for fadderuker.

### Getting started

Install dependencies ...

`npm install` or `make install`

Build the project ...

`npm run build` or `make`

Build the project and watch for changes, re-building on changes ...

`npm run watch` or `make watch`

For [hot module replacement](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack) run webpack dev server ...

`npm run dev` or `make dev`


## Releasing

### Build dependencies

The dependencies docker image can be built with the dockerfile `Dockerfile.build`. Save this as "glowing-fortnight-build" so it is usable in `Dockerfile.deploy` later on. (@ToDo: Make this available from a docker registry)

### Build glowing fortnight

Make sure the `glowing-fortnight-build` docker image is available (either from a registry or locally) and build `Dockerfile.deploy`. (@ToDo: Make this available from a docker registry)

### Deploy glowing fortnight

Run `docker -v ${PWD}/path/to/webroot:/dist glowing-fortnight`. The image will expose a data volume which contains the `bundle.js` file (as the default container CMD). E.g. `docker -v /var/www/glowing-fortnight/static/js:/dist glowing-fortnight` would make `bundle.js` available in `/var/www/glowing-fortnight/static/js`.
