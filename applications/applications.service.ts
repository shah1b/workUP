import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationsService {
  private mockApplications = [
    {
      id: 'app-1',
      userId: 'user-1',
      jobId: 'job-1',
      status: 'APPLIED',
      appliedAt: new Date(),
      createdAt: new Date(),
      notes: 'Great role for my career',
      job: {
        id: 'job-1',
        title: 'Senior Frontend Engineer',
        company: 'Tech Corp',
      },
    },
    {
      id: 'app-2',
      userId: 'user-1',
      jobId: 'job-3',
      status: 'SAVED',
      savedAt: new Date(),
      createdAt: new Date(),
      notes: 'Interested but need to review more',
      job: {
        id: 'job-3',
        title: 'Backend Engineer',
        company: 'Cloud Systems',
      },
    },
  ];

  async getApplications(userId: string = 'user-1') {
    return this.mockApplications.filter((a) => a.userId === userId);
  }

  async getBoard(userId: string = 'user-1') {
    const apps = this.mockApplications.filter((a) => a.userId === userId);
    const board = {
      SAVED: apps.filter((a) => a.status === 'SAVED'),
      APPLIED: apps.filter((a) => a.status === 'APPLIED'),
      INTERVIEWING: apps.filter((a) => a.status === 'INTERVIEWING'),
      OFFER: apps.filter((a) => a.status === 'OFFER'),
      REJECTED: apps.filter((a) => a.status === 'REJECTED'),
    };
    return board;
  }

  async saveJob(userId: string, jobId: string) {
    return { userId, jobId, status: 'SAVED', savedAt: new Date() };
  }

  async applyToJob(userId: string, jobId: string, notes?: string) {
    return { userId, jobId, status: 'APPLIED', appliedAt: new Date(), notes };
  }

  async updateApplication(appId: string, status: string) {
    return { id: appId, status, updatedAt: new Date() };
  }
}
