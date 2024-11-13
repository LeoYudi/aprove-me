import { IsNotEmpty } from 'class-validator';

export class CreatePayableBody {
  @IsNotEmpty({
    message: 'O campo `value` não pode ser vazio',
  })
  value: number;

  @IsNotEmpty({
    message: 'O campo `emissionDate` não pode ser vazio',
  })
  emissionDate: Date;

  @IsNotEmpty({
    message: 'O campo `assignorId` não pode ser vazio',
  })
  assignorId: string;
}
