import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAssignorBody } from 'src/dtos/createAssignorBody';
import { AssignorService } from './assignor.service';
import { UpdateAssignorBody } from 'src/dtos/updateAssignorBody';

@Controller('assignor')
export class AssignorController {
  constructor(private assignorService: AssignorService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const assignor = await this.assignorService.findOne(id);

    if (!assignor)
      throw new NotFoundException(`Assignor with id '${id}' not found`);

    return assignor;
  }

  @Post('create')
  async create(@Body() body: CreateAssignorBody) {
    const { document, email, name, phone } = body;

    const assignor = await this.assignorService.create({
      document,
      email,
      name,
      phone,
    });

    return { assignor };
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    const deletedAssignor = await this.assignorService.delete(id);

    if (!deletedAssignor)
      throw new NotFoundException(`Assignor with id '${id}' not found`);

    return { assignor: deletedAssignor };
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() body: UpdateAssignorBody) {
    const updatedAssignor = await this.assignorService.update(id, body);

    if (!updatedAssignor)
      throw new NotFoundException(`Assignor with id '${id}' not found`);

    return { assignor: updatedAssignor };
  }
}
