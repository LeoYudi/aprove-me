import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAssignorBody {
  @IsNotEmpty({
    message: 'O campo `document` não pode ser vazio',
  })
  @MaxLength(30, {
    message: 'Field `document` must be shorter than 30 characters',
  })
  document: string;

  @IsNotEmpty({
    message: 'O campo `email` não pode ser vazio',
  })
  @MaxLength(140, {
    message: 'Field `email` must be shorter than 140 characters',
  })
  @IsEmail(undefined, {
    message: 'Field `email` is invalid',
  })
  email: string;

  @IsNotEmpty({
    message: 'O campo `phone` não pode ser vazio',
  })
  @MaxLength(20, {
    message: 'Field `phone` must be shorter than 20 characters',
  })
  phone: string;

  @IsNotEmpty({
    message: 'O campo `name` não pode ser vazio',
  })
  @MaxLength(140, {
    message: 'Field `name` must be shorter than 140 characters',
  })
  name: string;
}
