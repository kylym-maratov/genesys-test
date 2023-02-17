import { ItemDto } from './dto/item.dto';
import { ApiService } from './api.service';
export declare class ApiController {
    private readonly itemService;
    constructor(itemService: ApiService);
    getCompanies(): Promise<any>;
    getLeads(): Promise<any>;
    getContacts(): Promise<any>;
    createCompanies(body: ItemDto): Promise<{
        message: string;
        id: any;
    }>;
    createLeads(body: ItemDto): Promise<{
        message: string;
        id: any;
    }>;
    createContacts(body: ItemDto): Promise<{
        message: string;
        id: any;
    }>;
}
