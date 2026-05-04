"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'warn', 'error'],
    });
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app.use((0, cookie_parser_1.default)());
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
            }
            else {
                callback(null, true);
            }
        },
        credentials: true,
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NexHire API')
        .setDescription('AI-powered job matching platform API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
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
        }
        catch (err) {
            if (err.code !== 'EADDRINUSE')
                throw err;
        }
    }
    if (!started)
        throw new Error('Could not find available port');
}
bootstrap();
//# sourceMappingURL=main.js.map