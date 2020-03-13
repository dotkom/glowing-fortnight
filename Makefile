default: install build

install:
	@echo Installing npm packages with yarn...
	@yarn

build:
	@echo Building project...
	@yarn build

dev:
	@echo Starting dev server
	@yarn dev

test:
	@echo Running tests
	@yarn test

.PHONY: default install build dev test
