"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantService = void 0;
const common_1 = require("@nestjs/common");
let AssistantService = class AssistantService {
    async getRecommendations(userId) {
        return {
            recommendations: [
                'Update your profile to highlight React expertise',
                'Consider exploring backend roles with your Node.js skills',
                'Your location preference limits job options - consider remote-first search',
            ],
        };
    }
    async analyzeProfile(userId) {
        return {
            strengths: ['Strong React skills', 'Good experience'],
            gaps: ['Limited backend experience', 'Need more AWS knowledge'],
            opportunities: ['Remote roles are a perfect fit', 'Consider tech lead positions'],
        };
    }
    async getSalaryInsights(role, location) {
        return {
            averageSalary: 200000,
            range: { min: 150000, max: 250000 },
            marketTrend: 'Increasing',
            demandLevel: 'High',
        };
    }
};
exports.AssistantService = AssistantService;
exports.AssistantService = AssistantService = __decorate([
    (0, common_1.Injectable)()
], AssistantService);
//# sourceMappingURL=assistant.service.js.map