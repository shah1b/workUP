import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { MatchesModule } from './matches/matches.module';
import { ApplicationsModule } from './applications/applications.module';
import { AssistantModule } from './assistant/assistant.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    JobsModule,
    MatchesModule,
    ApplicationsModule,
    AssistantModule,
  ],
})
export class AppModule {}
