import { IsNotEmpty } from 'class-validator';

export class CreateAssignorBody {
  @IsNotEmpty({
    message: 'O campo "document" não pode ser vazio',
  })
  document: string;

  @IsNotEmpty({
    message: 'O campo "email" não pode ser vazio',
  })
  email: string;

  @IsNotEmpty({
    message: 'O campo "phone" não pode ser vazio',
  })
  phone: string;

  @IsNotEmpty({
    message: 'O campo "name" não pode ser vazio',
  })
  name: string;
}
