#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

source './ci/setup.sh'

yarn install
yarn build

# version and publish each package version if it isn't already published
log_info "+++ :npm: Publishing to NPM :npm:"
yarn publish