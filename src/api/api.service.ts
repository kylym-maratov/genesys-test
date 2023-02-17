import { Injectable } from '@nestjs/common';
import { CustomCRM } from './crm/custom';

@Injectable()
export class ApiService {
  CRM = new CustomCRM();

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
}
