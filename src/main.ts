import {NestFactory} from '@nestjs/core';
import {ConfigService} from '@nestjs/config';
import {AppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    process.env.TZ = 'Asia/Taipei'; // 時區

    const configService = app.get(ConfigService);
    const port = configService.get('PORT', 8080);

    await app.listen(port);
}
bootstrap();
