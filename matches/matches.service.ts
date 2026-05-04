import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchesService {
  private mockJobs = [
    {
      id: 'job-1',
      title: 'Senior Frontend Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      isRemote: true,
      jobType: 'FULL_TIME',
      salary: { min: 180000, max: 240000 },
      salaryMax: 240000,
      skills: ['React', 'TypeScript', 'GraphQL'],
      description: 'Looking for senior frontend engineer with 5+ years experience',
      postedAt: new Date(),
    },
    {
      id: 'job-2',
      title: 'Full Stack Engineer',
      company: 'StartUp Inc',
      location: 'New York, NY',
      isRemote: false,
      jobType: 'FULL_TIME',
      salary: { min: 140000, max: 200000 },
      salaryMax: 200000,
      skills: ['Node.js', 'React', 'PostgreSQL'],
      description: 'Full stack role for growing startup',
      postedAt: new Date(),
    },
    {
      id: 'job-3',
      title: 'Backend Engineer',
      company: 'Cloud Systems',
      location: 'Remote',
      isRemote: true,
      jobType: 'FULL_TIME',
      salary: { min: 170000, max: 220000 },
      salaryMax: 220000,
      skills: ['Node.js', 'AWS', 'PostgreSQL'],
      description: 'Backend engineer for cloud platform',
      postedAt: new Date(),
    },
  ];

  async getMatches(userId: string = 'user-1', limit = 50) {
    // Return jobs with match scores
    return this.mockJobs.map((job, idx) => ({
      ...job,
      matchScore: 92 - idx * 7,
    })).slice(0, limit);
  }

  async computeMatches(userId: string = 'user-1') {
    return this.getMatches(userId);
  }

  async getMatchScore(userId: string, jobId: string) {
    const job = this.mockJobs.find((j) => j.id === jobId);
    return {
      jobId,
      userId,
      score: 85,
      skillsScore: 0.88,
      locationScore: 1.0,
      salaryScore: 0.88,
      reasons: ['Good skill match', 'Remote position', 'Salary in range'],
      ...job,
    };
  }

  async calculateMatch(userId: string, jobId: string) {
    return { score: 85, reasons: ['Good fit', 'Matching skills'] };
  }
}
