# "Glowing Fortnight"
Splash-side for fadderuker.

### Getting started

Install dependencies ...

`yarn` or `make install`

Build the project ...

`yarn build` or `make`

Build the project and watch for changes, re-building on changes ...

`yarn dev` or `make dev`

Runs tests ...

`yarn test` or `make test`

Watch files for changes and rerun tests related to changed files ...

`yarn test:watch`

## Releasing

### Build dependencies

The dependencies docker image can be built with the dockerfile `Dockerfile.build`. Save this as "glowing-fortnight-build" so it is usable in `Dockerfile.deploy` later on. (@ToDo: Make this available from a docker registry)

### Build glowing fortnight

Make sure the `glowing-fortnight-build` docker image is available (either from a registry or locally) and build `Dockerfile.deploy`. (@ToDo: Make this available from a docker registry)

### Deploy glowing fortnight

Run `docker -v ${PWD}/path/to/webroot:/dist glowing-fortnight`. The image will expose a data volume which contains the `bundle.js` file (as the default container CMD). E.g. `docker -v /var/www/glowing-fortnight/static/js:/dist glowing-fortnight` would make `bundle.js` available in `/var/www/glowing-fortnight/static/js`.
