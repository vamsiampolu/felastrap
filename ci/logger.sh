#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

RED="\033[0;31m"
CYAN="\033[0;36m"
NO_COLOR="\033[0m"

log_err() {
  printf ${RED}"[ERROR: $(date +'%Y-%m-%dT%H:%M:%S%z')]: $@ \n"${NO_COLOR} >&2
}

log_info() {
  printf ${CYAN}"[INFO: $(date +'%Y-%m-%dT%H:%M:%S%z')]: $@ \n"${NO_COLOR} >&1
}
