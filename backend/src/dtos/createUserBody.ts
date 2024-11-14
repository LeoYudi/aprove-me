import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'Field `value` can not be empty',
  })
  login: string;

  @IsNotEmpty({
    message: 'Field `emissionDate` can not be empty',
  })
  password: string;
}
