import {
  Body,
  Controller,
  Delete,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateAssignorBody } from 'src/dtos/createAssignorBody';
import { AssignorService } from './assignor.service';

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
}
