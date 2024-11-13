import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PayableRepository } from 'src/repositories/payableRepository';
import { PrismaPayableRepository } from 'src/repositories/prisma/prismaPayableRepository';
import { PayableController } from './payable.controller';
import { PayableService } from './payable.service';
import { AssignorModule } from 'src/assignor/assignor.module';

@Module({
  imports: [AssignorModule],
  controllers: [PayableController],
  providers: [
    PrismaService,
    PayableService,
    {
      provide: PayableRepository,
      useClass: PrismaPayableRepository,
    },
  ],
})
export class PayableModule {}
