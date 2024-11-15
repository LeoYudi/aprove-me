import { PrismaService } from 'src/database/prisma.service';
import {
  PayableRepository,
  CreatePayableArgsType,
  PayableType,
  UpdatePayableArgsType,
} from '../payableRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPayableRepository implements PayableRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number, limit: number): Promise<PayableType[]> {
    return await this.prisma.payable.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: string): Promise<PayableType> {
    return await this.prisma.payable.findUnique({
      where: { id },
    });
  }

  async create({
    value,
    emissionDate,
    assignorId,
  }: CreatePayableArgsType): Promise<PayableType> {
    return await this.prisma.payable.create({
      data: {
        value,
        emissionDate,
        assignorId,
      },
    });
  }

  async delete(id: string): Promise<PayableType> {
    return await this.prisma.payable.delete({ where: { id } });
  }

  async update(
    id: string,
    { value, emissionDate, assignorId }: UpdatePayableArgsType,
  ): Promise<PayableType> {
    return await this.prisma.payable.update({
      where: { id },
      data: {
        value,
        emissionDate,
        assignorId,
      },
    });
  }
}
