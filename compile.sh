#!/bin/bash
#
branch=${GIT_BRANCH:-dev}
branch=${branch##*/}
env=$branch
echo "###       当前分支 : ${env}"
source ~/.nvm/nvm.sh
nvm use 16.15.0
node -v
npm install
echo "###       安装模块 : ${env}"
npm run build:${env}
