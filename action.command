#!/bin/bash

# Voltaの環境設定
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"

# スクリプトのディレクトリに移動
cd "$(dirname "$0")" || echo "Failed to change directory"

# npmコマンドを実行
npm run convert