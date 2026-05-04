import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @Get()
  async getMatches(@Query('limit') limit?: number) {
    return this.matchesService.getMatches('user-1', limit);
  }

  @Get('user/:userId')
  async getUserMatches(@Param('userId') userId: string, @Query('limit') limit?: number) {
    return this.matchesService.getMatches(userId, limit);
  }

  @Get('user/:userId/job/:jobId')
  async getMatchScore(@Param('userId') userId: string, @Param('jobId') jobId: string) {
    return this.matchesService.getMatchScore(userId, jobId);
  }

  @Post('calculate')
  async calculateMatch(@Body() body: { userId: string; jobId: string }) {
    return this.matchesService.calculateMatch(body.userId, body.jobId);
  }

  @Post('compute')
  async computeMatches(@Body() body?: { userId?: string }) {
    return this.matchesService.computeMatches(body?.userId || 'user-1');
  }
}
