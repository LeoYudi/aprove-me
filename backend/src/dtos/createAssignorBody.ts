import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAssignorBody {
  @IsNotEmpty({
    message: 'O campo `document` não pode ser vazio',
  })
  @MaxLength(30, {
    message: 'O campo `document` deve ser menor que 30 caracteres',
  })
  document: string;

  @IsNotEmpty({
    message: 'O campo `email` não pode ser vazio',
  })
  @MaxLength(140, {
    message: 'O campo `email` deve ser menor que 140 caracteres',
  })
  @IsEmail(undefined, {
    message: 'O campo `email` é inválido',
  })
  email: string;

  @IsNotEmpty({
    message: 'O campo `phone` não pode ser vazio',
  })
  @MaxLength(20, {
    message: 'O campo `phone` deve ser menor que 20 caracteres',
  })
  phone: string;

  @IsNotEmpty({
    message: 'O campo `name` não pode ser vazio',
  })
  @MaxLength(140, {
    message: 'O campo `name` deve ser menor que 140 caracteres',
  })
  name: string;
}
