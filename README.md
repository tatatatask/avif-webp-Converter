# AVIF & WebP Converter

画像ファイル（jpg,png）をAVIFとWebP形式に変換します。

## 必要条件

- Node.js (Volta推奨)

## インストール方法

```bash
cd avif-webp-Converter
npm install
```

## 使用方法

srcディレクトリに画像を格納
→ (macOS)action.command or (Windows)action.batをダブルクリック、コマンドプロンプトで実行

### macOSの場合

```bash
./action.command
```
```bash
npm run convert
```

### Windowsの場合

```
action.bat
```
```
npm run convert
```

## 設定

`config.js`ファイルを編集することで、変換設定をカスタマイズできます。以下のオプションを変更可能：

- 入力ディレクトリ
- 出力ディレクトリ
- 品質設定
- 変換するフォーマット（AVIFのみ、WebPのみ、または両方）

## 対応入力フォーマット

- JPG/JPEG
- PNG

