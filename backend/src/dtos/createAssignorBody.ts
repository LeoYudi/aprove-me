import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAssignorBody {
  @IsNotEmpty({
    message: 'Field `document` can not be empty',
  })
  @MaxLength(30, {
    message: 'Field `document` must be shorter than 30 characters',
  })
  document: string;

  @IsNotEmpty({
    message: 'Field `email` can not be empty',
  })
  @MaxLength(140, {
    message: 'Field `email` must be shorter than 140 characters',
  })
  @IsEmail(undefined, {
    message: 'Field `email` is invalid',
  })
  email: string;

  @IsNotEmpty({
    message: 'Field `phone` can not be empty',
  })
  @MaxLength(20, {
    message: 'Field `phone` must be shorter than 20 characters',
  })
  phone: string;

  @IsNotEmpty({
    message: 'Field `name` can not be empty',
  })
  @MaxLength(140, {
    message: 'Field `name` must be shorter than 140 characters',
  })
  name: string;
}
