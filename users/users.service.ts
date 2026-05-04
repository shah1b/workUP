import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getMe(userId: string = 'user-1') {
    return {
      id: userId,
      name: 'John Doe',
      email: 'john@example.com',
      profile: {
        skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
        experience: 5,
        location: 'San Francisco, CA',
        remoteOnly: true,
        desiredRoles: ['Senior Engineer', 'Tech Lead'],
        salaryMin: 150000,
        salaryMax: 250000,
      },
    };
  }

  async getStats(userId: string = 'user-1') {
    return {
      avgMatchScore: 87,
      totalMatches: 12,
      applications: {
        saved: 5,
        applied: 3,
        interviewing: 1,
        offer: 0,
        rejected: 1,
      },
    };
  }

  async getProfile(userId: string = 'user-1') {
    return {
      id: userId,
      name: 'John Doe',
      email: 'john@example.com',
      skills: ['JavaScript', 'TypeScript', 'React'],
      experience: 5,
      location: 'San Francisco, CA',
      remoteOnly: true,
      desiredRoles: ['Senior Engineer', 'Tech Lead'],
      salaryMin: 150000,
      salaryMax: 250000,
    };
  }

  async updateProfile(userId: string, profile: any) {
    return { id: userId, ...profile, updatedAt: new Date() };
  }

  async uploadResume(userId: string, file: any) {
    return { id: userId, resumeUrl: '/resumes/resume-1.pdf' };
  }
}
