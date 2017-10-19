
#################################
### thevtm.github.io Makefile ###
#################################

# CONSTANTS

NODE_MODULES = ./node_modules
NPM_BIN      = $(shell npm bin)

WEBPACK_CONFIG_PATH = ./webpack.config.js
BUILD_DIRECTORY_PATH = ./dist

.PHONY: install build build-dev clean dev

install:
	npm install

build: clean
	${NPM_BIN}/webpack -p --config ${WEBPACK_CONFIG_PATH} --bail

build-dev: clean
	${NPM_BIN}/webpack -d --config ${WEBPACK_CONFIG_PATH} --bail

clean:
	rm -rf ${BUILD_DIRECTORY_PATH}

dev:
	${NPM_BIN}/webpack-dev-server
