import { Body, Controller, Post } from '@nestjs/common';
import { CreateAssignorBody } from 'src/dtos/createAssignorBody';
import { AssignorRepository } from 'src/repositories/assignorRepository';

@Controller('assignor')
export class AssignorController {
  constructor(private assignorRepository: AssignorRepository) {}

  @Post('create')
  async create(@Body() body: CreateAssignorBody) {
    const { document, email, name, phone } = body;

    const assignor = await this.assignorRepository.create({
      document,
      email,
      name,
      phone,
    });

    return { assignor };
  }
}
