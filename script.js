import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const srcDir = "src";
const distDir = "dist";

const webpQuality = 86;
const avifQuality = 70;

const resizeMax = 2840;

async function convertImage(srcPath, distPath, format, quality) {
	try {
		await sharp(srcPath)
			.resize({ width: resizeMax, withoutEnlargement: true })
			[format]({ quality })
			.toFile(distPath);
		console.log(`Converted to ${format}: ${distPath}`);
	} catch (err) {
		console.error(`Error converting image: ${err}`);
	}
}

async function processDirectory(srcDir, distDir, format, quality) {
	const files = await fs.readdir(srcDir, {withFileTypes: true});

	// distDirが存在しない場合は作成
	await fs.mkdir(distDir, {recursive: true});

	for (const dirent of files) {
		const filePath = path.join(srcDir, dirent.name);

		if (dirent.isDirectory()) {
			// ディレクトリの場合、再帰的に処理
			await processDirectory(filePath, path.join(distDir, dirent.name), format, quality);
		} else if (/\.(jpg|jpeg|png)$/i.test(dirent.name)) {
			// 画像ファイルの場合、変換処理
			const distPath = path.join(distDir, dirent.name.replace(/\.(jpg|jpeg|png)$/i, `.${format}`));
			await convertImage(filePath, distPath, format, quality);
		}
	}
}

async function main() {
	// webp
	await processDirectory(srcDir, distDir, "webp", webpQuality);
	// avif
	await processDirectory(srcDir, distDir, "avif", avifQuality);
}

main().catch((error) => {
	console.error("Error:", error);
});
