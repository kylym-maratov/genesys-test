"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const item_dto_1 = require("./dto/item.dto");
const api_service_1 = require("./api.service");
let ApiController = class ApiController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    getCompanies() {
        return this.itemService.getCompanies();
    }
    getLeads() {
        return this.itemService.getLeads();
    }
    getContacts() {
        return this.itemService.getContacts();
    }
    createCompanies(body) {
        return this.itemService.createCompanies(body);
    }
    createLeads(body) {
        return this.itemService.createLeads(body);
    }
    createContacts(body) {
        return this.itemService.createContacts(body);
    }
};
__decorate([
    (0, common_1.Get)('companies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getCompanies", null);
__decorate([
    (0, common_1.Get)('leads'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getLeads", null);
__decorate([
    (0, common_1.Get)('contacts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getContacts", null);
__decorate([
    (0, common_1.Post)('companies'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_dto_1.ItemDto]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "createCompanies", null);
__decorate([
    (0, common_1.Post)('leads'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_dto_1.ItemDto]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "createLeads", null);
__decorate([
    (0, common_1.Post)('contacts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_dto_1.ItemDto]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "createContacts", null);
ApiController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map