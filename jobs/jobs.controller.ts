import { Controller, Get, Query, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  async getJobs(@Query() filters?: any) {
    return this.jobsService.getJobs(filters);
  }

  @Get(':jobId')
  async getJobById(@Param('jobId') jobId: string) {
    return this.jobsService.getJobById(jobId);
  }
}
