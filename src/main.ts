import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from 'fastify-helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    app.enableCors();
    app.register(helmet);
    const configService = app.get(ConfigService);
    const port = configService.get<number>('port');
    await app.listen(port);
    console.log(`Backend is running on ${await app.getUrl()}`);
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
