"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    async getMe(userId = 'user-1') {
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
    async getStats(userId = 'user-1') {
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
    async getProfile(userId = 'user-1') {
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
    async updateProfile(userId, profile) {
        return { id: userId, ...profile, updatedAt: new Date() };
    }
    async uploadResume(userId, file) {
        return { id: userId, resumeUrl: '/resumes/resume-1.pdf' };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map