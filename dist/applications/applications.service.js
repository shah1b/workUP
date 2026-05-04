"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsService = void 0;
const common_1 = require("@nestjs/common");
let ApplicationsService = class ApplicationsService {
    constructor() {
        this.mockApplications = [
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
    }
    async getApplications(userId = 'user-1') {
        return this.mockApplications.filter((a) => a.userId === userId);
    }
    async getBoard(userId = 'user-1') {
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
    async saveJob(userId, jobId) {
        return { userId, jobId, status: 'SAVED', savedAt: new Date() };
    }
    async applyToJob(userId, jobId, notes) {
        return { userId, jobId, status: 'APPLIED', appliedAt: new Date(), notes };
    }
    async updateApplication(appId, status) {
        return { id: appId, status, updatedAt: new Date() };
    }
};
exports.ApplicationsService = ApplicationsService;
exports.ApplicationsService = ApplicationsService = __decorate([
    (0, common_1.Injectable)()
], ApplicationsService);
//# sourceMappingURL=applications.service.js.map