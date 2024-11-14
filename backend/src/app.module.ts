import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignorModule } from './assignor/assignor.module';
import { PayableModule } from './payable/payable.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AssignorModule, PayableModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
