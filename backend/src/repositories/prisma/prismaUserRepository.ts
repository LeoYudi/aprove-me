import { PrismaService } from 'src/database/prisma.service';
import {
  UserRepository,
  CreateUserArgsType,
  UserType,
  UpdateUserArgsType,
} from '../userRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<UserType> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByLogin(login: string): Promise<UserType> {
    return await this.prisma.user.findUnique({
      where: { login },
    });
  }

  async create({ login, password }: CreateUserArgsType): Promise<UserType> {
    return await this.prisma.user.create({
      data: {
        login,
        password,
      },
    });
  }

  async delete(id: string): Promise<UserType> {
    return await this.prisma.user.delete({ where: { id } });
  }

  async update(
    id: string,
    { login, password }: UpdateUserArgsType,
  ): Promise<UserType> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        login,
        password,
      },
    });
  }
}
