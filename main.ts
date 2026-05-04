import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'warn', 'error'],
  });

  // Security
  app.use(helmet());
  app.use(compression());
  app.use(cookieParser());

  // CORS
  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        process.env.FRONTEND_URL || 'http://localhost:3000',
        'http://localhost:8080',
        'http://localhost:3000',
        'http://localhost:8000',
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all for development
      }
    },
    credentials: true,
  });

  // Global prefix
  app.setGlobalPrefix('api');

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger docs
  const config = new DocumentBuilder()
    .setTitle('NexHire API')
    .setDescription('AI-powered job matching platform API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const basePort = parseInt(process.env.API_PORT || '3001', 10);
  const tryPorts = [basePort, basePort + 1, basePort + 9, basePort + 10];
  
  let started = false;
  for (const p of tryPorts) {
    try {
      await app.listen(p);
      console.log(`🚀 NexHire API running on http://localhost:${p}`);
      console.log(`📚 Swagger docs at http://localhost:${p}/api/docs`);
      started = true;
      break;
    } catch (err: any) {
      if (err.code !== 'EADDRINUSE') throw err;
    }
  }
  
  if (!started) throw new Error('Could not find available port');
}

bootstrap();
