import { Injectable } from '@nestjs/common';
import { CreatePayableBody } from 'src/dtos/createPayableBody';
import { UpdatePayableBody } from 'src/dtos/updatePayableBody';
import { PayableRepository } from 'src/repositories/payableRepository';

@Injectable()
export class PayableService {
  constructor(private payableRepository: PayableRepository) {}

  async findOne(id: string) {
    return await this.payableRepository.findOne(id);
  }

  async create(createPayableData: CreatePayableBody) {
    return await this.payableRepository.create(createPayableData);
  }

  async delete(id: string) {
    const payable = await this.findOne(id);

    if (payable) await this.payableRepository.delete(id);

    return payable;
  }

  async update(id: string, updatePayableData: UpdatePayableBody) {
    let payable = await this.findOne(id);

    if (payable)
      payable = await this.payableRepository.update(id, updatePayableData);

    return payable;
  }
}
