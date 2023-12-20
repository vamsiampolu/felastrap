#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

source ./ci/logger.sh

export FORCE_COLOR=1

#Add yarn binaries to the path
export PATH="${PWD}/node_modules/.bin:$PATH"


add_npm_token() {
  export NPM_TOKEN=$PERSONAL_NPM_TOKEN
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
}

is_authenticated_with_npm() {
  if npm whoami > /dev/null; then
    log_info "Login to NPM succeeded."
  else
    log_err "Login to NPM failed."
  fi
}

npm_login() {
  npm login
}

add_npm_token
npm_login
is_authenticated_with_npm