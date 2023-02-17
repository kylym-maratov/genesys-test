import { Body, Controller, Get, Post } from '@nestjs/common';

import { ItemDto } from './dto/item.dto';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly itemService: ApiService) {}

  @Get('companies')
  getCompanies() {
    return this.itemService.getCompanies();
  }

  @Get('leads')
  getLeads() {
    return this.itemService.getLeads();
  }

  @Get('contacts')
  getContacts() {
    return this.itemService.getContacts();
  }

  @Post('companies')
  createCompanies(@Body() body: ItemDto) {
    return this.itemService.createCompanies(body);
  }

  @Post('leads')
  createLeads(@Body() body: ItemDto) {
    return this.itemService.createLeads(body);
  }

  @Post('contacts')
  createContacts(@Body() body: ItemDto) {
    return this.itemService.createContacts(body);
  }
}
