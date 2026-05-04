import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private mockJobs = [
    {
      id: 'job-1',
      title: 'Senior Frontend Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      isRemote: true,
      salary: { min: 180000, max: 240000 },
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
      salary: { min: 140000, max: 200000 },
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
      salary: { min: 170000, max: 220000 },
      skills: ['Node.js', 'AWS', 'PostgreSQL'],
      description: 'Backend engineer for cloud platform',
      postedAt: new Date(),
    },
  ];

  async getJobs(filters?: any) {
    return this.mockJobs;
  }

  async getJobById(jobId: string) {
    return this.mockJobs.find((j) => j.id === jobId);
  }
}
