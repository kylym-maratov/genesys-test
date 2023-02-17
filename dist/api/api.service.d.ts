import { CustomCRM } from './crm/custom';
export declare class ApiService {
    CRM: CustomCRM;
    getCompanies(): Promise<any>;
    getLeads(): Promise<any>;
    getContacts(): Promise<any>;
    createCompanies({ name }: {
        name: any;
    }): Promise<{
        message: string;
        id: any;
    }>;
    createLeads({ name }: {
        name: any;
    }): Promise<{
        message: string;
        id: any;
    }>;
    createContacts({ name }: {
        name: any;
    }): Promise<{
        message: string;
        id: any;
    }>;
}
