import { Controller, Get, Post, Put, Patch, Param, Body } from '@nestjs/common';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Get('user/:userId')
  async getApplications(@Param('userId') userId: string) {
    return this.applicationsService.getApplications(userId);
  }

  @Get('board')
  async getBoard() {
    return this.applicationsService.getBoard('user-1');
  }

  @Post('save')
  async saveJob(@Body() body: { userId: string; jobId: string }) {
    return this.applicationsService.saveJob(body.userId, body.jobId);
  }

  @Post('apply')
  async applyToJob(@Body() body: { userId: string; jobId: string; notes?: string }) {
    return this.applicationsService.applyToJob(body.userId, body.jobId, body.notes);
  }

  @Put(':appId')
  async updateApplication(@Param('appId') appId: string, @Body() body: { status: string }) {
    return this.applicationsService.updateApplication(appId, body.status);
  }

  @Patch(':appId')
  async patchApplication(@Param('appId') appId: string, @Body() body: { status: string }) {
    return this.applicationsService.updateApplication(appId, body.status);
  }
}
