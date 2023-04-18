import {extname, join} from 'path';
import * as utf8 from 'utf8';
import {createReadStream} from 'node:fs';


/**
 * 取得存放檔案路徑
 *
 * 因 __dirname 依照該檔案位置, 故從這取得的檔案位置會固定, 不會依照各業務資料夾路徑不同而產生位置錯誤
 * @param path
 */
export const getStorePath = (path = ''): string => {
    return join(__dirname, '../../storage', path);
};




/**
 * 取得 package.json 設定
 */
export const readPackageJson = async (): Promise<{ name: string; version: string }> => {
    const packageJsonPath = './package.json';

    const stream = createReadStream(packageJsonPath);
    const chunks: Buffer[] = [];

    for await (const chunk of stream) {
        chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);
    const packageJson = JSON.parse(buffer.toString());

    return {
        name: packageJson.name,
        version: packageJson.version,
    };
}
