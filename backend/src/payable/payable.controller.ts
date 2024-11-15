import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PayableService } from './payable.service';
import { CreatePayableBody } from 'src/dtos/createPayableBody';
import { UpdatePayableBody } from 'src/dtos/updatePayableBody';
import { AssignorService } from 'src/assignor/assignor.service';
import { ListPayableQuery } from 'src/dtos/listPayableQuery';

@Controller('integration/payable')
export class PayableController {
  constructor(
    private payableServive: PayableService,
    private assignorService: AssignorService,
  ) {}

  @Get('')
  async findAll(@Query() query: ListPayableQuery) {
    const { page, limit } = query;
    return await this.payableServive.findAll(+page, +limit);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const assignor = await this.payableServive.findOne(id);

    if (!assignor)
      throw new NotFoundException(`Payable with id '${id}' not found`);

    return assignor;
  }

  @Post('create')
  async create(@Body() body: CreatePayableBody) {
    const { value, emissionDate, assignorId } = body;

    const assignor = await this.assignorService.findOne(assignorId);

    if (!assignor)
      throw new NotFoundException(`Assignor with id '${assignorId}' not found`);

    const payable = await this.payableServive.create({
      value,
      emissionDate,
      assignorId,
    });

    return { payable };
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    const deletedPayable = await this.payableServive.delete(id);

    if (!deletedPayable)
      throw new NotFoundException(`Payable with id '${id}' not found`);

    return { payable: deletedPayable };
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() body: UpdatePayableBody) {
    if (body.assignorId) {
      const assignor = await this.assignorService.findOne(body.assignorId);

      if (!assignor)
        throw new NotFoundException(
          `Assignor with id '${body.assignorId}' not found`,
        );
    }

    const updatedPayable = await this.payableServive.update(id, body);

    if (!updatedPayable)
      throw new NotFoundException(`Payable with id '${id}' not found`);

    return { payable: updatedPayable };
  }
}
