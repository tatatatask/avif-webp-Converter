# AVIF & WebP Converter

画像ファイル（jpg,png）をAVIFとWebP形式に変換

## Requirements

- Node.js v23.10.0

## Install

```bash
cd avif-webp-Converter
npm install
```
## Directory Structure

```
├── dist		---		(out)
├── src			---		(in)
├── README.md
├── action.bat			---		(Windows)
├── action.command		---		(macOS)
├── package-lock.json
├── package.json
└── script.js
```

## How to Use

1. srcディレクトリに画像を格納
2. (macOS)action.command または (Windows)action.batをダブルクリック
3. コマンドプロンプトで処理が実行されます
4. distディレクトリに出力される

### コマンドで実行する場合

```bash
npm run convert
```

## Options

`script.js`ファイルを編集することで、変換設定をカスタマイズできます。以下のオプションを変更可能：
- 入力ディレクトリ
- 出力ディレクトリ
- 品質設定
- リサイズ最大サイズ

## Supported Input Formats

- JPG/JPEG
- PNG
