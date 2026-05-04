"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
let JobsService = class JobsService {
    constructor() {
        this.mockJobs = [
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
    }
    async getJobs(filters) {
        return this.mockJobs;
    }
    async getJobById(jobId) {
        return this.mockJobs.find((j) => j.id === jobId);
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)()
], JobsService);
//# sourceMappingURL=jobs.service.js.map