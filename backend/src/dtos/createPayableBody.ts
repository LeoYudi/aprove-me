import { IsNotEmpty } from 'class-validator';

export class CreatePayableBody {
  @IsNotEmpty({
    message: 'Field `value` can not be empty',
  })
  value: number;

  @IsNotEmpty({
    message: 'Field `emissionDate` can not be empty',
  })
  emissionDate: Date;

  @IsNotEmpty({
    message: 'Field `assignorId` can not be empty',
  })
  assignorId: string;
}
