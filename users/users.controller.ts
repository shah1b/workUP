import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  async getMe() {
    return this.usersService.getMe();
  }

  @Get('stats')
  async getStats() {
    return this.usersService.getStats();
  }

  @Get(':userId/profile')
  async getProfile(@Param('userId') userId: string) {
    return this.usersService.getProfile(userId);
  }

  @Put(':userId/profile')
  async updateProfile(@Param('userId') userId: string, @Body() profile: any) {
    return this.usersService.updateProfile(userId, profile);
  }

  @Post(':userId/resume')
  async uploadResume(@Param('userId') userId: string, @Body() body: any) {
    return this.usersService.uploadResume(userId, body);
  }
}
