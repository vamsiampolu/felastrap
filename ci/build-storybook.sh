#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

source ./ci/logger.sh

log_info "Install dependencies"
yarn install
log_info "Building storybook with Vite"
yarn build-storybook
