#!/usr/bin/env bash

set -e

echo "##[set-output name=branch;]$(echo ${GITHUB_REF#refs/heads/})"