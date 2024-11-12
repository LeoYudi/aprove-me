import { PrismaService } from 'src/database/prisma.service';
import {
  AssignorRepository,
  CreateAssignorArgsType,
  CreateAssignorType,
} from '../assignorRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAssignorRepository implements AssignorRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    document,
    email,
    phone,
    name,
  }: CreateAssignorArgsType): Promise<CreateAssignorType> {
    return await this.prisma.assignor.create({
      data: {
        document,
        email,
        phone,
        name,
      },
    });
  }
}
