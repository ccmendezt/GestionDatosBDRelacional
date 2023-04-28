import { Controller, Post, Get, Body, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { Enterprise } from './enterprise.entity';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { EnterpriseService } from './enterprise.service';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';

@Controller('enterprise')
export class EnterpriseController {

  constructor(private enterpriseService: EnterpriseService) { }

  @Get()
  getEnterprises(): Promise<Enterprise[]>{
    return this.enterpriseService.getEnterprises()
  }

  @Get(':id')
  getEnterprise(@Param('id', ParseIntPipe) id: number) {
    //console.log(id)
    //console.log(typeof id)
    return this.enterpriseService.getEnterprise(id)
  }

  @Post()
  createEnterprise(@Body() newEnterprise: CreateEnterpriseDto): Promise<Enterprise> {
    return this.enterpriseService.createEnterprise(newEnterprise)
  }

  @Delete(':id')
  deleteEnterprise(@Param('id', ParseIntPipe) id: number)  {
    return this.enterpriseService.deleteEnterprise(id)
  }

  @Patch(':id')
  updateEnterprise(@Param('id', ParseIntPipe) id: number, @Body() enterprise: UpdateEnterpriseDto) {
    return this.enterpriseService.updateEnterprise(id, enterprise)
  }

}
