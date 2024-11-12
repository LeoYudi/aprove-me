import { PrismaService } from 'src/database/prisma.service';
import {
  AssignorRepository,
  CreateAssignorArgsType,
  AssignorType,
} from '../assignorRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAssignorRepository implements AssignorRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<AssignorType> {
    return await this.prisma.assignor.findUnique({
      where: { id },
    });
  }

  async create({
    document,
    email,
    phone,
    name,
  }: CreateAssignorArgsType): Promise<AssignorType> {
    return await this.prisma.assignor.create({
      data: {
        document,
        email,
        phone,
        name,
      },
    });
  }

  async delete(id: string): Promise<AssignorType> {
    return await this.prisma.assignor.delete({ where: { id } });
  }
}
