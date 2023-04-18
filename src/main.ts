import {NestFactory} from '@nestjs/core';
import {ConfigService} from '@nestjs/config';
import {join} from 'path';
import {json} from 'express';
import {AppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import * as fs from 'fs';
import { graphqlUploadExpress } from 'graphql-upload';
import { Logger } from '@nestjs/common';
import {readPackageJson} from './utils/file';

// import * as cookieParser from 'cookie-parser';

// const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.mjs');


async function bootstrap() {
    readPackageJson()
        .then(data => {
            const logger = new Logger('Bootstrap');
            logger.debug(`Application ${data.name}: ${data.version}`);
        });

    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    process.env.TZ = 'Asia/Taipei'; // 時區



    // 限制請求大小
    app.use(json({limit: '5mb'}));
    // app.use(cookieParser());

    app.use(graphqlUploadExpress({maxFileSize: 1000000, maxFiles: 10}));

    const configService = app.get(ConfigService);
    const port = configService.get('PORT', 8080);

    // API 預設路徑
    // app.setGlobalPrefix('api');

    // 發布使用相對路徑 /dist/public
    const publicPath = join(__dirname, '../', 'storage/public');
    app.useStaticAssets(publicPath);

    // 設定暫存路徑 (檢查暫存路徑, 若沒有則新增)
    const tmpPath = '/tmp/bearests';
    if (!fs.existsSync(tmpPath)) {
        fs.mkdirSync(tmpPath);
    }

    await app.listen(port);
}
bootstrap();
