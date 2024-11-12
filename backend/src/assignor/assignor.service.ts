import { Injectable } from '@nestjs/common';
import { CreateAssignorBody } from 'src/dtos/createAssignorBody';
import { AssignorRepository } from 'src/repositories/assignorRepository';

@Injectable()
export class AssignorService {
  constructor(private assignorRepository: AssignorRepository) {}

  async findOne(id: string) {
    return await this.assignorRepository.findOne(id);
  }

  async create(body: CreateAssignorBody) {
    return await this.assignorRepository.create(body);
  }

  async delete(id: string) {
    const assignor = await this.findOne(id);

    if (assignor) await this.assignorRepository.delete(id);

    return assignor;
  }
}
