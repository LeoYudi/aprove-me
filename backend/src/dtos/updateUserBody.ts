import { IsOptional } from 'class-validator';

export class CreateUserBody {
  @IsOptional()
  login?: string;

  @IsOptional()
  password?: string;
}
