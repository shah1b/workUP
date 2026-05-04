"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchesService = void 0;
const common_1 = require("@nestjs/common");
let MatchesService = class MatchesService {
    constructor() {
        this.mockJobs = [
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
    }
    async getMatches(userId = 'user-1', limit = 50) {
        return this.mockJobs.map((job, idx) => ({
            ...job,
            matchScore: 92 - idx * 7,
        })).slice(0, limit);
    }
    async computeMatches(userId = 'user-1') {
        return this.getMatches(userId);
    }
    async getMatchScore(userId, jobId) {
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
    async calculateMatch(userId, jobId) {
        return { score: 85, reasons: ['Good fit', 'Matching skills'] };
    }
};
exports.MatchesService = MatchesService;
exports.MatchesService = MatchesService = __decorate([
    (0, common_1.Injectable)()
], MatchesService);
//# sourceMappingURL=matches.service.js.map