import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AssistantService } from './assistant.service';

@Controller('assistant')
export class AssistantController {
  constructor(private assistantService: AssistantService) {}

  @Get('recommendations/:userId')
  async getRecommendations(@Param('userId') userId: string) {
    return this.assistantService.getRecommendations(userId);
  }

  @Get('analyze/:userId')
  async analyzeProfile(@Param('userId') userId: string) {
    return this.assistantService.analyzeProfile(userId);
  }

  @Post('salary-insights')
  async getSalaryInsights(@Body() body: { role: string; location: string }) {
    return this.assistantService.getSalaryInsights(body.role, body.location);
  }
}
