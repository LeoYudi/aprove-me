import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AssignorController } from './assignor.controller';
import { AssignorRepository } from 'src/repositories/assignorRepository';
import { PrismaAssignorRepository } from 'src/repositories/prisma/prismaAssignorRepository';
import { AssignorService } from './assignor.service';

@Module({
  imports: [],
  controllers: [AssignorController],
  providers: [
    PrismaService,
    AssignorService,
    {
      provide: AssignorRepository,
      useClass: PrismaAssignorRepository,
    },
  ],
})
export class AssignorModule {}
