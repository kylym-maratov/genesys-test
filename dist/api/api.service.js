"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const custom_1 = require("./crm/custom");
let ApiService = class ApiService {
    constructor() {
        this.CRM = new custom_1.CustomCRM();
    }
    async getCompanies() {
        return await this.CRM.API.companies.list();
    }
    async getLeads() {
        return await this.CRM.API.leads.list();
    }
    async getContacts() {
        return await this.CRM.API.contacts.list();
    }
    async createCompanies({ name }) {
        const data = await this.CRM.API.companies.create({ name });
        return { message: 'Company created', id: data.id };
    }
    async createLeads({ name }) {
        const data = await this.CRM.API.leads.create({ name });
        return { message: 'Lead created', id: data.id };
    }
    async createContacts({ name }) {
        const data = await this.CRM.API.contacts.create({ name });
        return { message: 'Contact created', id: data.id };
    }
};
ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map