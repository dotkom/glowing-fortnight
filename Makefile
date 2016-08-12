default: build

install:
	@echo Installing npm packages...
	@npm install

build: install
	@echo Building project...
	@npm run build

watch:
	@echo Starting file watcher...
	@npm run watch

.PHONY: default install build watch
