import { IsEmail, IsOptional, MaxLength } from 'class-validator';

export class UpdateAssignorData {
  @IsOptional()
  @MaxLength(30, {
    message: 'O campo `document` deve ser menor que 30 caracteres',
  })
  document?: string;

  @IsOptional()
  @MaxLength(140, {
    message: 'O campo `email` deve ser menor que 140 caracteres',
  })
  @IsEmail(undefined, {
    message: 'O campo `email` é inválido',
  })
  email?: string;

  @IsOptional()
  @MaxLength(20, {
    message: 'O campo `phone` deve ser menor que 20 caracteres',
  })
  phone?: string;

  @IsOptional()
  @MaxLength(140, {
    message: 'O campo `name` deve ser menor que 140 caracteres',
  })
  name?: string;
}
