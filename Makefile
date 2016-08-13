default: build

install:
	@echo Installing npm packages...
	@npm install

build: install
	@echo Building project...
	@npm run build

watch: install
	@echo Starting file watcher...
	@npm run watch

dev: install
	@echo Starting dev server
	@npm run dev

.PHONY: default install build watch dev
