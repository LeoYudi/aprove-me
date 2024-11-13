import {
  Body,
  Controller,
  Delete,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAssignorBody } from 'src/dtos/createAssignorBody';
import { AssignorService } from './assignor.service';
import { UpdateAssignorData } from 'src/dtos/updateAssignorBody';

@Controller('assignor')
export class AssignorController {
  constructor(private assignorService: AssignorService) {}

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

    return deletedAssignor;
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() body: UpdateAssignorData) {
    const updatedAssignor = await this.assignorService.update(id, body);

    if (!updatedAssignor)
      throw new NotFoundException(`Assignor with id '${id}' not found`);

    return updatedAssignor;
  }
}
