import { Injectable } from '@nestjs/common';
import { CreateAssignorBody } from 'src/dtos/createAssignorBody';
import { UpdateAssignorData } from 'src/dtos/updateAssignorBody';
import { AssignorRepository } from 'src/repositories/assignorRepository';

@Injectable()
export class AssignorService {
  constructor(private assignorRepository: AssignorRepository) {}

  async findOne(id: string) {
    return await this.assignorRepository.findOne(id);
  }

  async create(createAssignorData: CreateAssignorBody) {
    return await this.assignorRepository.create(createAssignorData);
  }

  async delete(id: string) {
    const assignor = await this.findOne(id);

    if (assignor) await this.assignorRepository.delete(id);

    return assignor;
  }

  async update(id: string, updateAssignorData: UpdateAssignorData) {
    let assignor = await this.findOne(id);

    if (assignor)
      assignor = await this.assignorRepository.update(id, updateAssignorData);

    return assignor;
  }
}
